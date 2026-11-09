export const shuffle=(arr,rng=Math.random)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const unique=a=>[...new Set(a)];
export function makeBank(records,universe=records){
 const bank=[],seen=new Set();
 const add=q=>{const sig=JSON.stringify([q.kind,q.prompt,q.context]);if(!seen.has(sig)){seen.add(sig);bank.push({...q,id:sig});}};
 for(const r of records){
  const context=`${r.term} · ${r.grammar}`;
  const candidates=universe.filter(x=>x.root===r.root&&x.id!==r.id);
  const options=(field)=>unique([r[field],...shuffle(candidates.filter(x=>x.term===r.term).map(x=>x[field])),...shuffle(candidates.map(x=>x[field]))]).slice(0,4);
  for(const [kind,field,prompt,ar] of [['meaning','meaning',r.ar,true],['form','ar',r.meaning,false],['grammar','term',r.ar,true]]){
   const opts=options(field);
   if(opts.length>1)add({kind,recordId:r.id,prompt,context:kind==='grammar'?r.grammar:context,question:kind==='meaning'?'Bu ifadenin anlamı hangisi?':kind==='form'?'Bu anlama uygun Arapça ifade hangisi?':'Bu ifadenin sîgası hangisi?',arabic:ar,options:shuffle(opts),answer:r[field],explanation:`${r.ar} → ${r.meaning}. ${r.note||''}`});
  }
  const distractor=shuffle(candidates.filter(x=>x.term===r.term&&x.meaning!==r.meaning))[0]||shuffle(candidates.filter(x=>x.meaning!==r.meaning))[0];
  for(const truth of [true,false]){
   if(!truth&&!distractor)continue;
   const proposed=truth?r.meaning:distractor.meaning;
   add({kind:'tf',recordId:r.id,prompt:r.ar,context:context+' · “'+proposed+'”',question:'Verilen anlam doğru mu?',arabic:true,options:['Doğru','Yanlış'],answer:truth?'Doğru':'Yanlış',explanation:`Doğru anlam: ${r.meaning}. ${r.note||''}`});
  }
 }
 return bank;
}
export function selectQuestions(bank,count,rng=Math.random){
 if(![10,30].includes(count))throw new Error('Soru sayısı 10 veya 30 olmalı.');
 if(!bank.length)throw new Error('Bu seçimde soru yok.');
 const out=[];let last;
 while(out.length<count){
  const round=shuffle(bank,rng);
  if(round.length>1&&round[0].id===last){[round[0],round[1]]=[round[1],round[0]];}
  for(const q of round){if(out.length===count)break;out.push({...q,options:shuffle(q.options,rng)});last=q.id;}
 }
 return out;
}
export function freshState(){return {version:1,known:{},completed:{},stats:{},history:[],settings:{rootOnly:true},active:null,visits:[],lastLesson:'mu-1'};}
export function loadState(storage){try{const s=JSON.parse(storage.getItem('emsile-v1'));if(!s||s.version!==1)return freshState();return {...freshState(),...s,settings:{...freshState().settings,...s.settings}};}catch{return freshState();}}
export function saveState(storage,state){try{storage.setItem('emsile-v1',JSON.stringify(state));return true;}catch{return false;}}
export function recordAnswer(state,question,chosen){
 const a=state.active;if(!a||a.answers.length>a.index)return false;
 const correct=chosen===question.answer;
 a.answers.push({recordId:question.recordId,chosen,correct});
 const st=state.stats[question.recordId]||{correct:0,wrong:0};st[correct?'correct':'wrong']++;state.stats[question.recordId]=st;
 return true;
}
export function finishQuiz(state){
 const a=state.active;if(!a||a.answers.length!==a.questions.length)return null;
 const result={id:a.id,date:new Date().toISOString(),total:a.questions.length,correct:a.answers.filter(x=>x.correct).length,wrongIds:[...new Set(a.answers.filter(x=>!x.correct).map(x=>x.recordId))]};
 if(!state.history.some(x=>x.id===a.id))state.history.unshift(result);
 state.history=state.history.slice(0,100);state.active=null;return result;
}
