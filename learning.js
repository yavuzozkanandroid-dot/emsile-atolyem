import {shuffle} from './core.js';
export function localDay(at=Date.now()){const d=new Date(at);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function ensureLearning(state){
 state.learning={xp:0,claims:[],days:{},games:{match:0,build:0,crossword:0},reviews:{},activeGame:null,...state.learning};
 return state.learning;
}
export function award(state,id,points,kind='cards',at=Date.now()){
 const a=ensureLearning(state);if(a.claims.includes(id))return false;
 a.claims.push(id);a.claims=a.claims.slice(-2000);a.xp+=points;
 const day=localDay(at);a.days[day]??={cards:0,answers:0,games:0,lessons:0,xp:0};a.days[day][kind]=(a.days[day][kind]||0)+1;a.days[day].xp+=points;
 return true;
}
export function scheduleReview(state,id,good,at=Date.now()){
 const a=ensureLearning(state),old=a.reviews[id]||{stage:0};
 if(good&&old.lastGood===localDay(at))return;
 const stage=good?Math.min((old.stage||0)+1,5):0;
 const days=[0,1,3,7,14,30][stage];
 a.reviews[id]={stage,due:at+days*86400000,lastReviewed:at,lastGood:good?localDay(at):null};
}
export function dueRecords(state,records,at=Date.now()){const reviews=ensureLearning(state).reviews;return records.filter(r=>reviews[r.id]&&reviews[r.id].due<=at).sort((a,b)=>reviews[a.id].due-reviews[b.id].due);}
export function streak(state,at=Date.now()){
 const days=ensureLearning(state).days,d=new Date(at);let n=0;
 if(!days[localDay(d)]?.xp)d.setDate(d.getDate()-1);
 while(days[localDay(d)]?.xp){n++;d.setDate(d.getDate()-1);}return n;
}
export function pairsFor(records,count=4,rng=Math.random){
 const selected=[],ars=new Set(),means=new Set();
 for(const r of shuffle(records,rng)){if(ars.has(r.ar)||means.has(r.meaning))continue;ars.add(r.ar);means.add(r.meaning);selected.push(r);if(selected.length===count)break;}return selected;
}
export function graphemes(text){return typeof Intl.Segmenter==='function'?[...new Intl.Segmenter('ar',{granularity:'grapheme'}).segment(text)].map(x=>x.segment):Array.from(text.normalize('NFC')).reduce((a,c)=>{if(/[\u064b-\u065f\u0670]/.test(c)&&a.length)a[a.length-1]+=c;else a.push(c);return a;},[]);}

export function makeCrossword(words,rng=Math.random){
 const size=15,grid=new Map(),placed=[];
 const key=(r,c)=>`${r},${c}`;
 function fits(w,r,c,dir){
  const dr=dir==='down'?1:0,dc=dir==='across'?1:0;let overlaps=0;
  if(r<0||c<0||r+dr*(w.length-1)>=size||c+dc*(w.length-1)>=size)return -1;
  if(grid.has(key(r-dr,c-dc))||grid.has(key(r+dr*w.length,c+dc*w.length)))return -1;
  for(let i=0;i<w.length;i++){
   const rr=r+dr*i,cc=c+dc*i,existing=grid.get(key(rr,cc));
   if(existing){if(existing.char!==w[i]||existing.dirs.includes(dir))return -1;overlaps++;}
   else if(grid.has(key(rr+dc,cc+dr))||grid.has(key(rr-dc,cc-dr)))return -1;
  }
  const coords=[...grid.keys()].map(k=>k.split(',').map(Number));coords.push([r,c],[r+dr*(w.length-1),c+dc*(w.length-1)]);
  const width=Math.max(...coords.map(x=>x[1]))-Math.min(...coords.map(x=>x[1]))+1,height=Math.max(...coords.map(x=>x[0]))-Math.min(...coords.map(x=>x[0]))+1;
  if(width>12||height>12||(!overlaps&&placed.length))return -1;
  return overlaps*100-width*height;
 }
 function place(item,r,c,dir){
  for(let i=0;i<item.word.length;i++){const rr=r+(dir==='down'?i:0),cc=c+(dir==='across'?i:0),k=key(rr,cc),v=grid.get(k);if(v)v.dirs.push(dir);else grid.set(k,{char:item.word[i],dirs:[dir]});}
  placed.push({...item,r,c,dir});
 }
 const choices=shuffle(words,rng).slice(0,15).sort((a,b)=>b.word.length-a.word.length);
 if(!choices.length)return {rows:0,cols:0,cells:{},clues:[]};
 place(choices[0],7,Math.floor((size-choices[0].word.length)/2),'across');
 for(const item of choices.slice(1)){
  let best;
  for(const [k,cell] of grid){const [r,c]=k.split(',').map(Number);for(let i=0;i<item.word.length;i++)if(item.word[i]===cell.char)for(const dir of ['across','down']){const rr=r-(dir==='down'?i:0),cc=c-(dir==='across'?i:0),score=fits(item.word,rr,cc,dir);if(score>=0&&(!best||score>best.score))best={rr,cc,dir,score};}}
  if(best)place(item,best.rr,best.cc,best.dir);if(placed.length===6)break;
 }
 const coords=[...grid.keys()].map(k=>k.split(',').map(Number)),minR=Math.min(...coords.map(x=>x[0])),minC=Math.min(...coords.map(x=>x[1]));
 const cells={};for(const [k,v]of grid){const [r,c]=k.split(',').map(Number);cells[key(r-minR,c-minC)]={...v};}
 const clues=placed.map(p=>({...p,r:p.r-minR,c:p.c-minC})).sort((a,b)=>a.r-b.r||a.c-b.c);let number=0,last='';
 for(const clue of clues){const k=key(clue.r,clue.c);if(k!==last){number++;last=k;}clue.number=number;cells[k].number=number;}
 return {rows:Math.max(...coords.map(x=>x[0]))-minR+1,cols:Math.max(...coords.map(x=>x[1]))-minC+1,cells,clues};
}
export function checkCrossword(crossword,answers){return Object.entries(crossword.cells).every(([key,v])=>answers[key]===v.char);}

export function mergeBackup(current,backup,validIds,validLessons){
 if(!backup||backup.app!=='emsile-atolyem'||![1,2].includes(backup.format)||!backup.state||typeof backup.state!=='object')throw new Error('Bu dosya Emsile ilerleme yedeği değil.');
 const incoming=backup.state,out=JSON.parse(JSON.stringify(current));
 const isId=k=>validIds.has(k),isLesson=k=>validLessons.has(k);
 out.known??={};out.completed??={};out.stats??={};
 for(const [k,v] of Object.entries(incoming.known||{}))if(isId(k)&&v===true)out.known[k]=true;
 for(const [k,v] of Object.entries(incoming.completed||{}))if(isLesson(k)&&v===true)out.completed[k]=true;
 const safe=n=>Number.isInteger(n)&&n>=0&&n<=1000000?n:0;
 for(const [k,v] of Object.entries(incoming.stats||{}))if(isId(k)&&v&&typeof v==='object')out.stats[k]={correct:Math.max(out.stats[k]?.correct||0,safe(v.correct)),wrong:Math.max(out.stats[k]?.wrong||0,safe(v.wrong))};
 const oldHistory=new Map((out.history||[]).map(x=>[x.id,x]));
 if(Array.isArray(incoming.history))for(const h of incoming.history)if(h&&typeof h.id==='string'&&h.id.length<150&&[10,30].includes(h.total)&&Number.isInteger(h.correct)&&h.correct>=0&&h.correct<=h.total&&Number.isFinite(Date.parse(h.date)))oldHistory.set(h.id,{id:h.id,date:h.date,total:h.total,correct:h.correct,wrongIds:Array.isArray(h.wrongIds)?h.wrongIds.filter(isId):[]});
 out.history=[...oldHistory.values()].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,100);
 const a=ensureLearning(out),b=incoming.learning;
 if(b&&typeof b==='object'){
  a.xp=Math.max(a.xp,safe(b.xp));
  for(const kind of ['match','build','crossword'])a.games[kind]=Math.max(a.games[kind]||0,safe(b.games?.[kind]));
  for(const [id,v]of Object.entries(b.reviews||{}))if(isId(id)&&v&&Number.isFinite(v.due)&&Number.isInteger(v.stage)&&v.stage>=0&&v.stage<=5&&Number.isFinite(v.lastReviewed)&&v.lastReviewed>(a.reviews[id]?.lastReviewed||0))a.reviews[id]={due:v.due,stage:v.stage,lastReviewed:v.lastReviewed,lastGood:typeof v.lastGood==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v.lastGood)?v.lastGood:null};
  for(const [day,v]of Object.entries(b.days||{}))if(/^\d{4}-\d{2}-\d{2}$/.test(day)&&v&&typeof v==='object'){a.days[day]??={};for(const k of ['cards','answers','games','lessons','xp'])a.days[day][k]=Math.max(a.days[day][k]||0,safe(v[k]));}
  a.claims=[...new Set([...a.claims,...(Array.isArray(b.claims)?b.claims.filter(x=>typeof x==='string'&&x.length<300):[])])].slice(-2000);
 }
 return out;
}
