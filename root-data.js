// Regular sound triliteral verbs with root-specific stem vowels. No letter replacement
// is applied to finished words: prefixes and personal endings stay independent.
export const ROOTS={
 nsr:{id:'nsr',name:'Nasara / Nâsirun',letters:'ن ص ر',past:'نَصَرَ',present:'يَنْصُرُ',meaning:'yardım etmek'},
 shkr:{id:'shkr',name:'Şekera',letters:'ش ك ر',past:'شَكَرَ',present:'يَشْكُرُ',meaning:'teşekkür etmek'},
 ktb:{id:'ktb',name:'Ketebe',letters:'ك ت ب',past:'كَتَبَ',present:'يَكْتُبُ',meaning:'yazmak'},
 ilm:{id:'ilm',name:'Alime',letters:'ع ل م',past:'عَلِمَ',present:'يَعْلَمُ',meaning:'bilmek',pastMiddle:'ِ',presentMiddle:'َ',imperativeStart:'اِ'}
};
const pastEnds=['َ','َا','ُوا','َتْ','َتَا','ْنَ','ْتَ','ْتُمَا','ْتُمْ','ْتِ','ْتُمَا','ْتُنَّ','ْتُ','ْنَا'];
const presentEnds=['ُ','َانِ','ُونَ','ُ','َانِ','ْنَ','ُ','َانِ','ُونَ','ِينَ','َانِ','ْنَ','ُ','ُ'];
const prefixes=['ي','ي','ي','ت','ت','ي','ت','ت','ت','ت','ت','ت','أ','ن'];
const dative=['Ona (eril)','O ikisine (eril)','Onlara (eril)','Ona (dişil)','O ikisine (dişil)','Onlara (dişil)','Sana (eril)','Siz ikinize (eril)','Size (eril)','Sana (dişil)','Siz ikinize (dişil)','Size (dişil)','Bana','Bize'];
const all=Array.from({length:14},(_,i)=>i),gaib=[0,1,2,3,4,5,12,13],hazir=[6,7,8,9,10,11];
const expand=([one,plural,you,yous,i,we])=>[one,one,plural,one,one,plural,you,yous,yous,you,yous,yous,i,we];
const thanks={
 past:expand(['teşekkür etti','teşekkür ettiler','teşekkür ettin','teşekkür ettiniz','teşekkür ettim','teşekkür ettik']),
 present:expand(['teşekkür eder','teşekkür ederler','teşekkür edersin','teşekkür edersiniz','teşekkür ederim','teşekkür ederiz']),
 lem:expand(['teşekkür etmedi','teşekkür etmediler','teşekkür etmedin','teşekkür etmediniz','teşekkür etmedim','teşekkür etmedik']),
 ma:expand(['teşekkür etmiyor','teşekkür etmiyorlar','teşekkür etmiyorsun','teşekkür etmiyorsunuz','teşekkür etmiyorum','teşekkür etmiyoruz']),
 la:expand(['teşekkür etmeyecek','teşekkür etmeyecekler','teşekkür etmeyeceksin','teşekkür etmeyeceksiniz','teşekkür etmeyeceğim','teşekkür etmeyeceğiz']),
};
const writes={
 past:expand(['yazdı','yazdılar','yazdın','yazdınız','yazdım','yazdık']),
 present:expand(['yazar','yazarlar','yazarsın','yazarsınız','yazarım','yazarız']),
 lem:expand(['yazmadı','yazmadılar','yazmadın','yazmadınız','yazmadım','yazmadık']),
 ma:expand(['yazmıyor','yazmıyorlar','yazmıyorsun','yazmıyorsunuz','yazmıyorum','yazmıyoruz']),
 la:expand(['yazmayacak','yazmayacaklar','yazmayacaksın','yazmayacaksınız','yazmayacağım','yazmayacağız']),
};
const written={
 past:expand(['yazıldı','yazıldılar','yazıldın','yazıldınız','yazıldım','yazıldık']),
 present:expand(['yazılır','yazılırlar','yazılırsın','yazılırsınız','yazılırım','yazılırız']),
 lem:expand(['yazılmadı','yazılmadılar','yazılmadın','yazılmadınız','yazılmadım','yazılmadık']),
 ma:expand(['yazılmıyor','yazılmıyorlar','yazılmıyorsun','yazılmıyorsunuz','yazılmıyorum','yazılmıyoruz']),
 la:expand(['yazılmayacak','yazılmayacaklar','yazılmayacaksın','yazılmayacaksınız','yazılmayacağım','yazılmayacağız'])
};
const knows={
 past:expand(['bildi','bildiler','bildin','bildiniz','bildim','bildik']),
 present:expand(['bilir','bilirler','bilirsin','bilirsiniz','bilirim','biliriz']),
 lem:expand(['bilmedi','bilmediler','bilmedin','bilmediniz','bilmedim','bilmedik']),
 ma:expand(['bilmiyor','bilmiyorlar','bilmiyorsun','bilmiyorsunuz','bilmiyorum','bilmiyoruz']),
 la:expand(['bilmeyecek','bilmeyecekler','bilmeyeceksin','bilmeyeceksiniz','bilmeyeceğim','bilmeyeceğiz'])
};
const known={
 past:expand(['bilindi','bilindiler','bilindin','bilindiniz','bilindim','bilindik']),
 present:expand(['bilinir','bilinirler','bilinirsin','bilinirsiniz','bilinirim','biliniriz']),
 lem:expand(['bilinmedi','bilinmediler','bilinmedin','bilinmediniz','bilinmedim','bilinmedik']),
 ma:expand(['bilinmiyor','bilinmiyorlar','bilinmiyorsun','bilinmiyorsunuz','bilinmiyorum','bilinmiyoruz']),
 la:expand(['bilinmeyecek','bilinmeyecekler','bilinmeyeceksin','bilinmeyeceksiniz','bilinmeyeceğim','bilinmeyeceğiz'])
};
const commandWords={
 ktb:{emr:['yazsın','yazsınlar','yazayım','yazalım'],nehy:['yazmasın','yazmasınlar','yazmayayım','yazmayalım'],hazir:['yaz','yazın'],hazirNehy:['yazma','yazmayın'],passiveEmr:['yazılsın','yazılsınlar','yazılayım','yazılalım'],passiveNehy:['yazılmasın','yazılmasınlar','yazılmayayım','yazılmayalım'],passiveHazir:['yazıl','yazılın'],passiveHazirNehy:['yazılma','yazılmayın']},
 ilm:{emr:['bilsin','bilsinler','bileyim','bilelim'],nehy:['bilmesin','bilmesinler','bilmeyeyim','bilmeyelim'],hazir:['bil','bilin'],hazirNehy:['bilme','bilmeyin'],passiveEmr:['bilinsin','bilinsinler','bilineyim','bilinelim'],passiveNehy:['bilinmesin','bilinmesinler','bilinmeyeyim','bilinmeyelim'],passiveHazir:['bilin','bilinin'],passiveHazirNehy:['bilinme','bilinmeyin']}
};
export function changeMood(ar,m){if(m==='raf')return ar;if(ar.endsWith('انِ'))return ar.slice(0,-2);if(ar.endsWith('ونَ'))return ar.slice(0,-2)+'ا';if(ar.endsWith('ينَ'))return ar.slice(0,-2);if(ar.endsWith('ُ'))return ar.slice(0,-1)+(m==='nasb'?'َ':'ْ');return ar;}
export function buildRootFamily(root,persons,sigas){
 const meta=ROOTS[root],[f,a,l]=meta.letters.split(' ');
 const stem=`${f}َ${a}${meta.pastMiddle||'َ'}${l}`,pstem=`${f}ُ${a}ِ${l}`,body=`${f}ْ${a}${meta.presentMiddle||'ُ'}${l}`,pbody=`${f}ْ${a}َ${l}`;
 const past=pastEnds.map(e=>stem+e),passivePast=pastEnds.map(e=>pstem+e),present=presentEnds.map((e,i)=>prefixes[i]+'َ'+body+e),passivePresent=presentEnds.map((e,i)=>prefixes[i]+'ُ'+pbody+e);
 const imperative=['ْ','َا','ُوا','ِي','َا','ْنَ'].map(e=>(meta.imperativeStart||'اُ')+body+e),means=root==='shkr'?thanks:root==='ilm'?knows:writes,passiveMeans=root==='ilm'?known:written,commands=commandWords[root],records=[],lessons=[];
 const rule='Şahıs, sayı ve cinsiyeti zamirle birlikte oku. İkil ve bazı muhatap biçimlerinin yazılışı aynı olduğunda bağlamı kullan.';
 const note=`${meta.name}: ${meta.past} → ${meta.present}. `+(root==='ilm'?'Bu kök فَعِلَ – يَفْعَلُ bâbındadır: mâzîde orta harf kesreli, muzâride fethalıdır. Emr-i hâzır اِعْلَمْ biçimindedir.':'Bu kök نَصَرَ – يَنْصُرُ ile aynı temel bâbdadır.');
 function add(part,title,rows,{section='muttaride',stage='',siga='',extra=''}={}){
  const id=`${root}-${part}`,item={id,title:`${meta.name} · ${title}`,subtitle:rows.length+' çekim kartı',section,stage,root,rootName:meta.name,note:note+' '+extra,siga,guideRule:rows[0]?.type==='isim'?'İsimlerde şahıs değil, sayı ve varsa cinsiyet değişir. Tekil, ikil ve çoğul eklerini sırayla karşılaştır.':rule,recordIds:[]};
  rows.forEach((r,i)=>{const itemId=id+'-'+i;item.recordIds.push(itemId);records.push({id:itemId,lessonId:id,root,rootName:meta.name,stage,...r});});lessons.push(item);return item;
 }
 function mean(key,i,passive=false){
  if(!passive)return persons[i].person+' '+means[key][i];
  return root==='shkr'?dative[i]+' '+({past:'teşekkür edildi',present:'teşekkür edilir',lem:'teşekkür edilmedi',ma:'teşekkür edilmiyor',la:'teşekkür edilmeyecek'}[key]):persons[i].person+' '+passiveMeans[key][i];
 }
 function rows(forms,term,key,passive=false,indices=all,prefix=''){
  return indices.map(i=>({...persons[i],ar:forms[i],term,grammar:`${passive?'Meçhul':'Ma‘lûm'} · ${persons[i].grammar}`,meaning:prefix+mean(key,i,passive),type:'fiil',note}));
 }
 const masdar=root==='shkr'?'شُكْرًا':root==='ilm'?'عِلْمًا':'كِتَابَةً',fail=`${f}َا${a}ِ${l}`,meful=`مَ${f}ْ${a}ُو${l}`;
 const failMeaning=root==='shkr'?'Teşekkür eden':root==='ilm'?'Bilen':'Yazan',mefulMeaning=root==='shkr'?'Teşekkür edilen':root==='ilm'?'Bilinen':'Yazılan';
 const starter=[
  {ar:past[0],term:'Fiil-i mâzî',meaning:means.past[0],siga:'mazi',type:'fiil'},
  {ar:present[0],term:'Fiil-i muzâri',meaning:root==='shkr'?'Teşekkür eder / ediyor / edecek':root==='ilm'?'Bilir / biliyor / bilecek':'Yazar / yazıyor / yazacak',siga:'muzari',type:'fiil'},
  {ar:masdar,term:'Masdar-ı gayr-i mîmî',meaning:meta.meaning,siga:'masdar',type:'isim'},
  {ar:fail+'ٌ',term:'İsm-i fâil',meaning:failMeaning,siga:'fail',type:'isim'},
  {ar:meful+'ٌ',term:'İsm-i mef’ûl',meaning:mefulMeaning,siga:'meful',type:'isim'}
 ].map(r=>({...r,grammar:'Temel sîga · '+r.type,note}));
 const parts=[['lem','لَمْ','cezm','Cahd-i mutlak'],['lemma','لَمَّا','cezm','Cahd-i müstağrak'],['ma','مَا','raf','Nefy-i hâl'],['la','لَا','raf','Nefy-i istikbal'],['lan','لَنْ','nasb','Te’kîd-i nefy-i istikbal']];
 const others=parts.map(([id,particle,m,term])=>({ar:particle+' '+changeMood(present[0],m),term,meaning:(id==='lemma'?'Henüz ':id==='lan'?'Kesinlikle ':'')+means[id==='lemma'?'lem':id==='lan'?'la':id][0],grammar:'Temel sîga · fiil',type:'fiil',siga:id,note}));
 others.push({ar:'لِ'+changeMood(present[0],'cezm'),term:'Emr-i gâib',meaning:root==='shkr'?'Teşekkür etsin':commands.emr[0],grammar:'Temel sîga · fiil',type:'fiil',siga:'emrgaib',note});
 const place=`مَ${f}ْ${a}َ${l}`,tool=`مِ${f}ْ${a}َ${l}`,brokenPlace=`مَ${f}َا${a}ِ${l}ُ`,merre=`${f}َ${a}ْ${l}`,nevi=`${f}ِ${a}ْ${l}`,small=`${f}ُ${a}َيْ${l}`,relation=root==='shkr'?'شُكْرِيّ':root==='ilm'?'عِلْمِيّ':'كِتَابِيّ',intensive=`${f}َ${a}َّ ا${l}`.replace(' ',''),comparative=`أَ${f}ْ${a}َ${l}`,compFem=`${f}ُ${a}ْ${l}َى`;
 const pedagogic='Bu bölüm klasik Emsile kalıbını farklı köke uygulama çalışmasıdır. Bazı türetmeler günlük dilde yaygın bir sözlük kelimesi olmayabilir; kalıp anlamı esas alınır.';
 const nounMean={mansar:root==='shkr'?'Teşekkür zamanı / yeri / teşekkür etmek':'Yazma zamanı / yeri / yazmak',alet:root==='shkr'?'Teşekkür kökünde âlet ismi kalıbı':'Yazma kökünde âlet ismi kalıbı',merre:root==='shkr'?'Bir kez teşekkür etmek':'Bir kez yazmak',nevi:root==='shkr'?'Bir tür teşekkür etmek':'Bir tür yazmak',tasgir:root==='shkr'?'Teşekkür kökünde küçültme kalıbı':'Yazmak masdarının küçültme kalıbı',mensub:root==='shkr'?'Teşekküre mensup':'Yazıya mensup',mubalaga:root==='shkr'?'Çok teşekkür eden':'Çok yazan',tafdil:root==='shkr'?'Daha çok / en çok teşekkür eden':'Daha çok / en çok yazan'};
 if(root==='ilm')Object.assign(nounMean,{mansar:'Bilme zamanı / yeri / bilmek',alet:'Bilmek kökünde âlet ismi kalıbı',merre:'Bir kez bilmek',nevi:'Bir tür bilmek',tasgir:'Bilmek kökünde küçültme kalıbı',mensub:'İlme mensup',mubalaga:'Çok bilen',tafdil:'Daha çok / en çok bilen'});
 const wonder=root==='shkr'?'Onun teşekkürüne hayret!':root==='ilm'?'Onun bilgisine hayret!':'Onun yazmasına hayret!';
 const tail=[
  ['nehygaib','لَا '+changeMood(present[0],'cezm'),root==='shkr'?'Teşekkür etmesin':commands.nehy[0]],['emr',imperative[0],root==='shkr'?'Teşekkür et':commands.hazir[0]],['nehy','لَا '+changeMood(present[6],'cezm'),root==='shkr'?'Teşekkür etme':commands.hazirNehy[0]],
  ['mansar',place+'ٌ',nounMean.mansar],['alet',tool+'ٌ',nounMean.alet],['merre',merre+'َةٌ',nounMean.merre],['nevi',nevi+'َةٌ',nounMean.nevi],['tasgir',small+'ٌ',nounMean.tasgir],['mensub',relation+'ٌ',nounMean.mensub],['mubalaga',intensive+'ٌ',nounMean.mubalaga],['tafdil',comparative+'ُ',nounMean.tafdil],
  ['taaccub1',`مَا أَ${f}ْ${a}َ${l}َهُ`,wonder],['taaccub2',`أَ${f}ْ${a}ِ${l}ْ بِهِ`,wonder]
 ].map(([siga,ar,meaning])=>{const original=sigas.find(s=>s.id===siga);return {ar,meaning,term:original.term,siga,type:original.type,grammar:'Temel sîga · '+original.type,note:original.type==='isim'?pedagogic:original.note};});
 const rootSigmas=[...starter,...others,...tail].map((r,i)=>({...r,id:r.siga,order:i+1}));
 add('mu-1','İlk beş kalıp',starter,{section:'muhtelife',stage:'starter'});add('mu-2','Olumsuzluk ve emir',others,{section:'muhtelife',stage:'starter'});
 add('mu-3','12–18. sîgalar',tail.slice(0,7),{section:'muhtelife'});add('mu-4','19–24. sîgalar',tail.slice(7),{section:'muhtelife'});
 add('mazi','Mâzî · ma‘lûm',rows(past,'Fiil-i mâzî','past'),{section:'mazi',stage:'basicPast',siga:'mazi'});
 add('passive-past','Mâzî · meçhul',rows(passivePast,'Fiil-i mâzî','past',true),{siga:'mazi'});
 add('muzari','Muzâri · ma‘lûm',rows(present,'Fiil-i muzâri','present'),{siga:'muzari'});
 add('passive-present','Muzâri · meçhul',rows(passivePresent,'Fiil-i muzâri','present',true),{siga:'muzari'});
 for(const [part,particle,m,term]of parts)for(const passive of [false,true]){
  const forms=(passive?passivePresent:present).map(ar=>particle+' '+changeMood(ar,m)),key=part==='lemma'?'lem':part==='lan'?'la':part;
  add(part+'-'+(passive?'passive':'active'),term+' · '+(passive?'meçhul':'ma‘lûm'),rows(forms,term,key,passive,all,part==='lemma'?'Henüz ':part==='lan'?'Kesinlikle ':''),{siga:part,extra:m==='raf'?'Bu edatla fiil merfû kalır.':m==='nasb'?'Fiil mansubdur; nûn düşen biçimleri kontrol et.':'Fiil meczumdur; ikil ve bazı çoğul biçimlerde nûn düşer.'});
 }
 for(const [part,indices,passive]of [['emrgaib',gaib,false],['emrgaib',gaib,true],['passive-imperative-addressed',hazir,true],['nehygaib',gaib,false],['nehygaib',gaib,true],['nehy',hazir,false],['nehy',hazir,true]]){
  const isEmr=part==='emrgaib'||part==='passive-imperative-addressed',siga=isEmr?'emrgaib':part,term=sigas.find(s=>s.id===siga).term;
  const forms=(passive?passivePresent:present).map(ar=>(isEmr?'لِ':'لَا ')+changeMood(ar,'cezm'));
  const rs=indices.map(i=>{
   let action;if(root==='shkr'){action=passive?(isEmr?'teşekkür edilsin':'teşekkür edilmesin'):isEmr?(i===12?'teşekkür edeyim':i===13?'teşekkür edelim':i===2||i===5?'teşekkür etsinler':'teşekkür etsin'):part==='nehy'?(i===6||i===9?'teşekkür etme':'teşekkür etmeyin'):(i===12?'teşekkür etmeyeyim':i===13?'teşekkür etmeyelim':i===2||i===5?'teşekkür etmesinler':'teşekkür etmesin');}
   else{const addressed=hazir.includes(i),key=passive?(isEmr?(addressed?'passiveHazir':'passiveEmr'):(addressed?'passiveHazirNehy':'passiveNehy')):isEmr?'emr':addressed?'hazirNehy':'nehy',n=addressed?(i===6||i===9?0:1):i===12?2:i===13?3:i===2||i===5?1:0;action=commands[key][n];}
   return {...persons[i],ar:forms[i],term,grammar:`${passive?'Meçhul':'Ma‘lûm'} · ${persons[i].grammar}`,meaning:(passive&&root==='shkr'?dative[i]:persons[i].person)+' '+action,type:'fiil',note};
  });
  add(part==='passive-imperative-addressed'?part:part+'-'+(passive?'passive':'active'),term+' · '+(passive?'meçhul':'ma‘lûm')+(part==='passive-imperative-addressed'?' (muhatap)':''),rs,{siga,extra:indices===gaib?'İlk altı biçim gâib/gâibedir; son iki biçim ek mütekellim istek/yasaklama kullanımıdır.':''});
 }
 add('imperative','Emr-i hâzır',hazir.map((i,n)=>({...persons[i],ar:imperative[n],term:'Emr-i hâzır',grammar:persons[i].grammar,meaning:persons[i].person+' '+(root==='shkr'?(n===0||n===3?'teşekkür et':'teşekkür edin'):commands.hazir[n===0||n===3?0:1]),type:'fiil',note})),{siga:'emr'});
 const nounEnds=['ٌ','َانِ','ُونَ','َةٌ','َتَانِ','َاتٌ'],grammar=['Müfred müzekker','Tesniye müzekker','Cemi müzekker','Müfred müennes','Tesniye müennes','Cemi müennes'];
 for(const [part,base,term,meaning]of [['fail',fail,'İsm-i fâil',failMeaning],['meful',meful,'İsm-i mef’ûl',mefulMeaning]])add('noun-'+part,term,nounEnds.map((end,i)=>({ar:base+end,term,meaning:meaning+' · '+grammar[i].toLocaleLowerCase('tr'),grammar:grammar[i],type:'isim',siga:part,note:'İsimlerde şahıs yoktur. Bu tablo temel merfû, sağlam çekimleri gösterir.'})),{siga:part});
 add('noun-masdar','Masdar-ı gayr-i mîmî',[{ar:masdar,term:'Masdar-ı gayr-i mîmî',meaning:meta.meaning,grammar:'Müfred masdar · mansub örnek',type:'isim',siga:'masdar',note:root==='shkr'?'Bu fiilin masdarı شُكْرٌ olarak öğrenilir. Masdarlar yalnız kalıptan tahmin edilmez.':root==='ilm'?'Bu fiilin masdarı عِلْمٌ olarak öğrenilir; burada عِلْمًا mansub örneğidir. Masdarlar yalnız kalıptan tahmin edilmez.':'Bu fiilin كِتَابَةٌ yanında كَتْبٌ ve كِتَابٌ masdarları da vardır. Masdar sözlükten öğrenilir.'}],{siga:'masdar'});
 const inflectSix=base=>nounEnds.map(end=>base+end);
 const nounGroups=[['mansar',[place+'ٌ',place+'َانِ',brokenPlace]],['alet',[tool+'ٌ',tool+'َانِ',brokenPlace]],['merre',[merre+'َةٌ',merre+'َتَانِ',merre+'َاتٌ']],['nevi',[nevi+'َةٌ',nevi+'َتَانِ',nevi+'َاتٌ']],['tasgir',inflectSix(small)],['mensub',inflectSix(relation)],['mubalaga',inflectSix(intensive)],['tafdil',[comparative+'ُ',comparative+'َانِ',comparative+'ُونَ',compFem,`${f}ُ${a}ْ${l}َيَانِ`,`${f}ُ${a}َ${l}ٌ`]]];
 for(const [siga,forms]of nounGroups){const source=sigas.find(s=>s.id===siga);add('noun-'+siga,source.term,forms.map((ar,i)=>({ar,term:source.term,meaning:nounMean[siga]+' · '+(forms.length===6?grammar[i]:['Müfred','Tesniye','Cemi'][i]),grammar:forms.length===6?grammar[i]:['Müfred','Tesniye','Cemi'][i],type:'isim',siga,note:pedagogic+(siga==='tasgir'&&root==='ktb'?' Buradaki كُتَيْبٌ, كَتْبٌ masdarından kalıp örneğidir; كِتَابٌ kelimesinin yaygın küçültmesi كُتَيِّبٌ biçimindedir.':'')})),{siga,extra:pedagogic+(siga==='tafdil'?' Gerçek cümlede yalın أَفْعَلُ, ال ve izafet kullanımına göre uygunluk değişebilir.':'')});}
 const objects=['هُ','هُمَا','هُمْ','هَا','هُمَا','هُنَّ','كَ','كُمَا','كُمْ','كِ','كُمَا','كُنَّ','نِي','نَا'],bi=['بِهِ','بِهِمَا','بِهِمْ','بِهَا','بِهِمَا','بِهِنَّ','بِكَ','بِكُمَا','بِكُمْ','بِكِ','بِكُمَا','بِكُنَّ','بِي','بِنَا'];
 for(const n of [1,2]){const term=n===1?'Taaccüb-i evvel':'Taaccüb-i sânî';add('taaccub-'+n,term,persons.map((p,i)=>({...p,ar:n===1?`مَا أَ${f}ْ${a}َ${l}َ`+objects[i]:`أَ${f}ْ${a}ِ${l}ْ `+bi[i],term,grammar:p.grammar+' · nesne zamiri',meaning:(root==='shkr'?'Teşekküre hayret':root==='ilm'?'Bilgisine hayret':'Yazmaya hayret')+' · nesne: '+p.person,type:'fiil',note:'Taaccüp fiili sabittir; bu tabloda nesne zamiri değişir.'})),{siga:'taaccub'+n});}
 return {lessons,records,sigas:rootSigmas};
}
