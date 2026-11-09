import {buildRootFamily,ROOTS} from './root-data.js';
export {ROOTS};
// Original learning cards, using the traditional n-s-r paradigm.
export const SOURCES = [
  {title:'TDV İslâm Ansiklopedisi · el-Emsile',url:'https://islamansiklopedisi.org.tr/el-emsile'},
  {title:'Musa Alak · Arapça’da Kelime Çekimleri (İÜ ders notları)',url:'https://www.emedrese.com.tr/wp-content/uploads/wpcfto_files/2a3d4534d646b96af6192111c27bae33Emsile%20Kitab%C4%B1.pdf'}
];
export const SIGAS = [
 ['mazi','نَصَرَ','Nasara','Fiil-i mâzî','Yardım etti','Geçmiş zamanda gerçekleşen bir işi bildirir.','fiil'],
 ['muzari','يَنْصُرُ','Yensuru','Fiil-i muzâri','Yardım eder / ediyor / edecek','Şimdiki veya gelecek zamanı bağlam belirler.','fiil'],
 ['masdar','نَصْرًا','Nasran','Masdar-ı gayr-i mîmî','Yardım etmek','Zaman ve şahıs bildirmeyen iş adıdır.','isim'],
 ['fail','نَاصِرٌ','Nâsirun','İsm-i fâil','Yardım eden','İşi yapanı bildirir. Kökü ن ص ر; vezni فَاعِلٌ.','isim'],
 ['meful','مَنْصُورٌ','Mansûrun','İsm-i mef’ûl','Yardım edilen','İşten etkileneni bildirir. Vezni مَفْعُولٌ.','isim'],
 ['lem','لَمْ يَنْصُرْ','Lem yensur','Cahd-i mutlak','Yardım etmedi','لَمْ muzâriyi cezm eder; anlamı geçmiş zamanın olumsuzudur.','fiil'],
 ['lemma','لَمَّا يَنْصُرْ','Lemmâ yensur','Cahd-i müstağrak','Henüz yardım etmedi','لَمَّا gerçekleşmemiş işin henüz anlamını taşır ve cezm eder.','fiil'],
 ['ma','مَا يَنْصُرُ','Mâ yensuru','Nefy-i hâl','Yardım etmiyor','مَا ile şimdiki zaman olumsuzluğu; fiil merfû kalır.','fiil'],
 ['la','لَا يَنْصُرُ','Lâ yensuru','Nefy-i istikbal','Yardım etmeyecek','Klasik Emsile karşılığı geleceğin olumsuzudur. Genel olumsuzluk da anlatabilir.','fiil'],
 ['lan','لَنْ يَنْصُرَ','Len yensura','Te’kîd-i nefy-i istikbal','Kesinlikle yardım etmeyecek','لَنْ muzâriyi nasb eder. Tek başına sonsuza dek anlamını zorunlu kılmaz.','fiil'],
 ['emrgaib','لِيَنْصُرْ','Li-yensur','Emr-i gâib','Yardım etsin','Emir lâmı ve meczum muzâri ile kurulur.','fiil'],
 ['nehygaib','لَا يَنْصُرْ','Lâ yensur','Nehy-i gâib','Yardım etmesin','Yasaklama lâ’sı muzâriyi cezm eder. Son harekeye dikkat et.','fiil'],
 ['emr','اُنْصُرْ','Unsur','Emr-i hâzır','Yardım et','Karşımızdakine emir verir. Başlangıçtaki hemze, hemze-i vasıldır.','fiil'],
 ['nehy','لَا تَنْصُرْ','Lâ tensur','Nehy-i hâzır','Yardım etme','Muhataba yönelik yasaklamadır.','fiil'],
 ['mansar','مَنْصَرٌ','Mansarun','İsm-i zaman / mekân / masdar-ı mîmî','Yardım zamanı / yeri / yardım etmek','Aynı yazılı kalıp üç işlevde kullanılabilir; bağlam ayırır.','isim'],
 ['alet','مِنْصَرٌ','Minsarun','İsm-i âlet','Yardım aleti','Klasik çekimde âlet ismine örnek verilen kalıptır.','isim'],
 ['merre','نَصْرَةٌ','Nasratun','Masdar-ı merre','Bir kez yardım etmek','İşin bir defa yapılmasını bildirir.','isim'],
 ['nevi','نِصْرَةٌ','Nisratun','Masdar-ı nev‘','Bir tür yardım etmek','İşin türünü veya yapılış biçimini bildirir.','isim'],
 ['tasgir','نُصَيْرٌ','Nusayrun','İsm-i tasğîr','Küçük yardım / küçük yardımcı','Klasik örnekte küçültme anlamı taşır.','isim'],
 ['mensub','نَصْرِيٌّ','Nasriyyun','İsm-i mensûb','Yardıma mensup','Sondaki şeddeli يّ nispet bildirir.','isim'],
 ['mubalaga','نَصَّارٌ','Nassârun','Mübâlağa-i ism-i fâil','Çok yardım eden','Şeddeye dikkat: فَعَّالٌ çokluk veya süreklilik bildirir.','isim'],
 ['tafdil','أَنْصَرُ','Ensaru','İsm-i tafdîl','Daha çok / en çok yardım eden','Karşılaştırma bildirir. Kullanımına göre uygunluk kuralları değişebilir.','isim'],
 ['taaccub1','مَا أَنْصَرَهُ','Mâ ensarahu','Taaccüb-i evvel','Ne kadar da çok yardım etti!','Şaşma bildirir. Kalıp sabittir; zamir nesneye göre değişir.','fiil'],
 ['taaccub2','أَنْصِرْ بِهِ','Ensır bihi','Taaccüb-i sânî','Onun yardımına hayret!','İkinci taaccüp kalıbıdır; بِـ sonrasındaki zamir değişir.','fiil']
].map(([id,ar,read,term,meaning,note,type],i)=>({id,ar,read,term,meaning,note,type,order:i+1}));
export const PERSONS = [
 ['هُوَ','O (eril)','Müfred müzekker gâib'],['هُمَا','O ikisi (eril)','Tesniye müzekker gâib'],['هُمْ','Onlar (eril)','Cemi müzekker gâib'],
 ['هِيَ','O (dişil)','Müfred müennes gâibe'],['هُمَا','O ikisi (dişil)','Tesniye müennes gâibe'],['هُنَّ','Onlar (dişil)','Cemi müennes gâibe'],
 ['أَنْتَ','Sen (eril)','Müfred müzekker muhâtab'],['أَنْتُمَا','Siz ikiniz (eril)','Tesniye müzekker muhâtab'],['أَنْتُمْ','Siz (eril)','Cemi müzekker muhâtab'],
 ['أَنْتِ','Sen (dişil)','Müfred müennes muhâtaba'],['أَنْتُمَا','Siz ikiniz (dişil)','Tesniye müennes muhâtaba'],['أَنْتُنَّ','Siz (dişil)','Cemi müennes muhâtaba'],
 ['أَنَا','Ben','Nefs-i mütekellim vahde'],['نَحْنُ','Biz','Nefs-i mütekellim maa’l-gayr']
].map(([pronoun,person,grammar])=>({pronoun,person,grammar}));
const PAST=['نَصَرَ','نَصَرَا','نَصَرُوا','نَصَرَتْ','نَصَرَتَا','نَصَرْنَ','نَصَرْتَ','نَصَرْتُمَا','نَصَرْتُمْ','نَصَرْتِ','نَصَرْتُمَا','نَصَرْتُنَّ','نَصَرْتُ','نَصَرْنَا'];
const PASTREAD=['nasara','nasarâ','nasarû','nasarat','nasaratâ','nasarne','nasarte','nasartumâ','nasartum','nasarti','nasartumâ','nasartunne','nasartu','nasarnâ'];
const PASTMEAN=['yardım etti','yardım etti','yardım ettiler','yardım etti','yardım etti','yardım ettiler','yardım ettin','yardım ettiniz','yardım ettiniz','yardım ettin','yardım ettiniz','yardım ettiniz','yardım ettim','yardım ettik'];
const PRESENT=['يَنْصُرُ','يَنْصُرَانِ','يَنْصُرُونَ','تَنْصُرُ','تَنْصُرَانِ','يَنْصُرْنَ','تَنْصُرُ','تَنْصُرَانِ','تَنْصُرُونَ','تَنْصُرِينَ','تَنْصُرَانِ','تَنْصُرْنَ','أَنْصُرُ','نَنْصُرُ'];
const PRESENTREAD=['yensuru','yensurâni','yensurûne','tensuru','tensurâni','yensurne','tensuru','tensurâni','tensurûne','tensurîne','tensurâni','tensurne','ensuru','nensuru'];
const endings = ['eder','eder','ederler','eder','eder','ederler','edersin','edersiniz','edersiniz','edersin','edersiniz','edersiniz','ederim','ederiz'];
const future = ['edecek','edecek','edecek','edecek','edecek','edecek','edeceksin','edeceksiniz','edeceksiniz','edeceksin','edeceksiniz','edeceksiniz','edeceğim','edeceğiz'];
const negativePast = ['etmedi','etmedi','etmediler','etmedi','etmedi','etmediler','etmedin','etmediniz','etmediniz','etmedin','etmediniz','etmediniz','etmedim','etmedik'];
const negativeNow = ['etmiyor','etmiyor','etmiyorlar','etmiyor','etmiyor','etmiyorlar','etmiyorsun','etmiyorsunuz','etmiyorsunuz','etmiyorsun','etmiyorsunuz','etmiyorsunuz','etmiyorum','etmiyoruz'];
const negativeFuture = ['etmeyecek','etmeyecek','etmeyecekler','etmeyecek','etmeyecek','etmeyecekler','etmeyeceksin','etmeyeceksiniz','etmeyeceksiniz','etmeyeceksin','etmeyeceksiniz','etmeyeceksiniz','etmeyeceğim','etmeyeceğiz'];
const passivePast = ['edildi','edildi','edildiler','edildi','edildi','edildiler','edildin','edildiniz','edildiniz','edildin','edildiniz','edildiniz','edildim','edildik'];
const passiveNow = ['edilir','edilir','edilirler','edilir','edilir','edilirler','edilirsin','edilirsiniz','edilirsiniz','edilirsin','edilirsiniz','edilirsiniz','edilirim','ediliriz'];
const pastPassive=PAST.map(x=>x.replace('نَصَ','نُصِ'));
const presentPassive=PRESENT.map(x=>x.replace(/^([يتأن])َنْصُ/,'$1ُنْصَ'));
function mood(ar,m){
 if(m==='raf') return ar;
 if(ar.endsWith('انِ')) return ar.slice(0,-2);
 if(ar.endsWith('ونَ')) return ar.slice(0,-2)+'ا';
 if(ar.endsWith('ينَ')) return ar.slice(0,-2);
 if(ar.endsWith('ُ')) return ar.slice(0,-1)+(m==='nasb'?'َ':'ْ');
 return ar;
}
export const LESSONS=[];
export const RECORDS=[];
function lesson(id,title,subtitle,section,rows,note=''){
 const item={id,title,subtitle,section,note,recordIds:[]};
 rows.forEach((row,i)=>{const r={id:`${id}-${i}`,root:'nsr',lessonId:id,...row}; RECORDS.push(r);item.recordIds.push(r.id);});
 LESSONS.push(item);return item;
}
function sigaRows(start,end){return SIGAS.slice(start,end).map(s=>({...s,id:undefined,term:s.term,grammar:s.type==='fiil'?'Temel sîga · fiil':'Temel sîga · isim',siga:s.id,read:s.read}));}
// Avoid copying the source IDs into record IDs.
function cleanRows(rows){return rows.map(({id,...r})=>r);}
lesson('mu-1','İlk beş kalıp','Mâzî, muzâri, masdar ve iki isim','muhtelife',cleanRows(sigaRows(0,5)),'Önce harekeli kelimeyi oku, ardından kalıp adını ve anlamını birlikte hatırla.');
lesson('mu-2','Olumsuzluk ve emir','Başlangıçtaki 11 kalıbı tamamla','muhtelife',cleanRows(sigaRows(5,11)),'لَمْ ve لَمَّا sonu cezm eder; لَنْ sonu nasb eder.');
lesson('mu-3','Emir, nehiy ve isimler','12–18. sîgalar','muhtelife',cleanRows(sigaRows(11,18)));
lesson('mu-4','Türemiş isimler ve taaccüp','19–24. sîgalar','muhtelife',cleanRows(sigaRows(18,24)));
function verbRows(forms,term,mean,reads=[],indices=PERSONS.map((_,i)=>i),voice='Ma‘lûm'){
 const dative=['Ona (eril)','O ikisine (eril)','Onlara (eril)','Ona (dişil)','O ikisine (dişil)','Onlara (dişil)','Sana (eril)','Siz ikinize (eril)','Size (eril)','Sana (dişil)','Siz ikinize (dişil)','Size (dişil)','Bana','Bize'];
 return indices.map(i=>({...PERSONS[i],ar:forms[i],read:reads[i]||'',term,grammar:`${voice} · ${PERSONS[i].grammar}`,meaning:voice==='Meçhul'?`${dative[i]} ${mean[indices[0]].replace(/edilme$/,'edilmesin')}`:`${PERSONS[i].person} ${mean[i]}`,note:'Aynı yazılan bazı çekimler zamir, sayı ve cinsiyet bağlamıyla ayrılır.',type:'fiil'}));
}
lesson('mazi-1','Mâzî · o ve onlar','6 gâib / gâibe çekimi','mazi',verbRows(PAST,'Fiil-i mâzî',PASTMEAN,PASTREAD,[0,1,2,3,4,5]));
lesson('mazi-2','Mâzî · sen ve siz','6 muhâtab / muhâtaba çekimi','mazi',verbRows(PAST,'Fiil-i mâzî',PASTMEAN,PASTREAD,[6,7,8,9,10,11]));
lesson('mazi-3','Mâzî · ben ve biz','2 mütekellim çekimi','mazi',verbRows(PAST,'Fiil-i mâzî',PASTMEAN,PASTREAD,[12,13]));
lesson('passive-past','Mâzî · meçhul','14 şahısta edilgen geçmiş','muttaride',verbRows(pastPassive,'Fiil-i mâzî',passivePast.map(x=>'yardım '+x),[],undefined,'Meçhul'));
lesson('present','Muzâri · ma‘lûm','14 şahısta etken muzâri','muttaride',verbRows(PRESENT,'Fiil-i muzâri',endings.map(x=>'yardım '+x),PRESENTREAD));
lesson('passive-present','Muzâri · meçhul','14 şahısta edilgen muzâri','muttaride',verbRows(presentPassive,'Fiil-i muzâri',passiveNow.map(x=>'yardım '+x),[],undefined,'Meçhul'));
const negSpecs=[['lem','لَمْ','cezm',negativePast,''],['lemma','لَمَّا','cezm',negativePast,'henüz '],['ma','مَا','raf',negativeNow,''],['la','لَا','raf',negativeFuture,''],['lan','لَنْ','nasb',negativeFuture,'kesinlikle ']];
for(const [id,part,m,means,prefix] of negSpecs){
 const s=SIGAS.find(x=>x.id===id);
 for(const passive of [false,true]){
  const forms=(passive?presentPassive:PRESENT).map(x=>`${part} ${mood(x,m)}`);
  const meanings=means.map(x=>prefix+'yardım '+(passive?x.replace(/^et/,'edil'):x));
  lesson(`${id}-${passive?'passive':'active'}`,`${s.term} · ${passive?'meçhul':'ma‘lûm'}`,'14 şahısta olumsuz çekim','muttaride',verbRows(forms,s.term,meanings,[],undefined,passive?'Meçhul':'Ma‘lûm'),s.note);
 }
}
const gaib=[0,1,2,3,4,5,12,13], hazir=[6,7,8,9,10,11];
for(const kind of ['emrgaib','nehygaib','nehy']){
 const s=SIGAS.find(x=>x.id===kind),indices=kind==='nehy'?hazir:gaib;
 for(const passive of [false,true]){
  const forms=(passive?presentPassive:PRESENT).map(x=>kind==='emrgaib'?'لِ'+mood(x,'cezm'):'لَا '+mood(x,'cezm'));
  const means=PERSONS.map((_,i)=>{
   let a=kind==='emrgaib'?(i===12?'edeyim':i===13?'edelim':i===2||i===5?'etsinler':'etsin'):(i===12?'etmeyeyim':i===13?'etmeyelim':kind==='nehy'?(i===6||i===9?'etme':'etmeyin'):i===2||i===5?'etmesinler':'etmesin');
   return 'yardım '+(passive?a.replace(/^et/,'edil').replace(/^edey/,'ediley').replace(/^edel/,'edilel'):a);
  });
  lesson(`${kind}-${passive?'passive':'active'}`,`${s.term} · ${passive?'meçhul':'ma‘lûm'}`,`${indices.length} şahısta çekim`,'muttaride',verbRows(forms,s.term,means,[],indices,passive?'Meçhul':'Ma‘lûm'),s.note);
 }
}
const imperative=['اُنْصُرْ','اُنْصُرَا','اُنْصُرُوا','اُنْصُرِي','اُنْصُرَا','اُنْصُرْنَ'];
lesson('imperative','Emr-i hâzır','6 muhatap çekimi','muttaride',hazir.map((p,i)=>({...PERSONS[p],ar:imperative[i],read:['unsur','unsurâ','unsurû','unsurî','unsurâ','unsurne'][i],term:'Emr-i hâzır',grammar:PERSONS[p].grammar,meaning:PERSONS[p].person+' yardım '+(i===0||i===3?'et':'edin'),type:'fiil',note:'Doğrudan emir muhataba yöneliktir. Meçhul emir, emir lâmıyla muzâriden yapılır.'})));
const nounSpecs=[
 ['masdar',['نَصْرًا','نَصْرَيْنِ','نُصُورًا']],
 ['fail',['نَاصِرٌ','نَاصِرَانِ','نَاصِرُونَ','نَاصِرَةٌ','نَاصِرَتَانِ','نَاصِرَاتٌ']],
 ['meful',['مَنْصُورٌ','مَنْصُورَانِ','مَنْصُورُونَ','مَنْصُورَةٌ','مَنْصُورَتَانِ','مَنْصُورَاتٌ']],
 ['mansar',['مَنْصَرٌ','مَنْصَرَانِ','مَنَاصِرُ']],
 ['alet',['مِنْصَرٌ','مِنْصَرَانِ','مَنَاصِرُ']],
 ['merre',['نَصْرَةٌ','نَصْرَتَانِ','نَصَرَاتٌ']],
 ['nevi',['نِصْرَةٌ','نِصْرَتَانِ','نِصَرٌ']],
 ['tasgir',['نُصَيْرٌ','نُصَيْرَانِ','نُصَيْرُونَ','نُصَيْرَةٌ','نُصَيْرَتَانِ','نُصَيْرَاتٌ']],
 ['mensub',['نَصْرِيٌّ','نَصْرِيَّانِ','نَصْرِيُّونَ','نَصْرِيَّةٌ','نَصْرِيَّتَانِ','نَصْرِيَّاتٌ']],
 ['mubalaga',['نَصَّارٌ','نَصَّارَانِ','نَصَّارُونَ','نَصَّارَةٌ','نَصَّارَتَانِ','نَصَّارَاتٌ']],
 ['tafdil',['أَنْصَرُ','أَنْصَرَانِ','أَنْصَرُونَ','نُصْرَى','نُصْرَيَانِ','نُصَرٌ']]
];
const number=['Müfred','Tesniye','Cemi'];
for(const [id,forms] of nounSpecs){
 const s=SIGAS.find(x=>x.id===id),six=forms.length===6;
 lesson('noun-'+id,s.term,`${forms.length} isim çekimi`,'muttaride',forms.map((ar,i)=>({ar,term:s.term,grammar:number[i%3]+(six?(i<3?' müzekker':' müennes'):''),meaning:`${s.meaning} · ${number[i%3].toLocaleLowerCase('tr')}${six?(i<3?' (eril)':' (dişil)'):''}`,note:s.note+' '+(id==='masdar'?'Masdar örnekleri mansub verilmiştir.':'İsimler burada temel merfû biçimleriyle gösterilir; isimlerde şahıs bulunmaz.'),type:'isim',siga:id})),id==='tafdil'?'Bu tablo klasik tasrif alıştırmasıdır. Gerçek cümlede yalın أَفْعَلُ, ال takısı veya izafet kullanımına göre uygunluk kuralları farklıdır.':'Bu bölüm sarf çekimlerini gösterir; cümledeki i‘raba göre sonlar değişebilir.');
}
const objects=['هُ','هُمَا','هُمْ','هَا','هُمَا','هُنَّ','كَ','كُمَا','كُمْ','كِ','كُمَا','كُنَّ','نِي','نَا'];
const bi=['بِهِ','بِهِمَا','بِهِمْ','بِهَا','بِهِمَا','بِهِنَّ','بِكَ','بِكُمَا','بِكُمْ','بِكِ','بِكُمَا','بِكُنَّ','بِي','بِنَا'];
for(const type of [1,2]) lesson(`taaccub-${type}`,`Taaccüb-i ${type===1?'evvel':'sânî'}`,'14 zamirle sabit taaccüp kalıbı','muttaride',PERSONS.map((p,i)=>({...p,ar:type===1?'مَا أَنْصَرَ'+objects[i]:'أَنْصِرْ '+bi[i],term:SIGAS[type===1?22:23].term,grammar:p.grammar+' · nesne zamiri',meaning:`${p.person} için yardıma hayret`,note:'Fiilin kendisi sabittir. Bu tabloda fiilin şahsı değil, nesne zamiri değişir.',type:'fiil'})));
// Mixed-root transfer practice uses only well-established basic forms.
for(const mode of ['mazi','muzari']){
 const forms=(mode==='mazi'?PAST:PRESENT).map(x=>x.replaceAll('نَصَر','كَتَب').replaceAll('نَصْر','كَتْب').replaceAll('نْصُر','كْتُب'));
 const means=mode==='mazi'?PASTMEAN.map(x=>x.replace('yardım etti','yazdı')):endings.map(x=>({eder:'yazar',ederler:'yazarlar',edersin:'yazarsın',edersiniz:'yazarsınız',ederim:'yazarım',ederiz:'yazarız'}[x]));
 lesson('ktb-'+mode,`Kök alıştırması · ${mode==='mazi'?'mâzî':'muzâri'}`,'كَتَبَ · yazmak','kok',verbRows(forms,mode==='mazi'?'Fiil-i mâzî':'Fiil-i muzâri',means).map(x=>({...x,root:'ktb',note:'ك ت ب kökü, kalıbı farklı bir köke uygulama alıştırmasıdır.'})));
}
// Additional traditional broken-plural forms keep existing card identifiers stable.
const extraNouns=[
 ['noun-fail','نُصَّارٌ','Cemi müzekker mükesser','Yardım edenler · eril kırık çoğul (fu‘‘âl)'],
 ['noun-fail','نُصَّرٌ','Cemi müzekker mükesser','Yardım edenler · eril kırık çoğul (fu‘‘al)'],
 ['noun-fail','نَصَرَةٌ','Cemi müzekker mükesser','Yardım edenler · eril kırık çoğul (fa‘ala)'],
 ['noun-fail','نَوَاصِرُ','Cemi müennes mükesser','Yardım edenler · dişil kırık çoğul'],
 ['noun-meful','مَنَاصِيرُ','Cemi müzekker mükesser','Yardım edilenler · eril kırık çoğul'],
 ['noun-tafdil','أَنَاصِرُ','Cemi müzekker mükesser','Daha çok yardım edenler · eril kırık çoğul']
];
for(const [lid,ar,grammar,meaning] of extraNouns){const l=LESSONS.find(l=>l.id===lid);const first=RECORDS.find(r=>r.lessonId===lid);const r={...first,id:lid+'-'+l.recordIds.length,ar,grammar,meaning,read:'',note:'Klasik çekimde verilen ek kırık çoğul biçimidir. Kırık çoğulda kelimenin iç yapısı da değişir.'};RECORDS.push(r);l.recordIds.push(r.id);l.subtitle=l.recordIds.length+' isim çekimi · kırık çoğullar dahil';}
const addressedForms=presentPassive.map(x=>'لِ'+mood(x,'cezm'));
lesson('passive-imperative-addressed','Meçhul emir · muhatap','6 muhatapta emir lâmı ile çekim','muttaride',verbRows(addressedForms,'Emr-i gâib',PERSONS.map(()=> 'yardım edilsin'),[],hazir,'Meçhul'),'Meçhul emir doğrudan اُنْصُرْ biçimiyle yapılmaz. Muhatap için لِتُنْصَرْ biçimi kullanılır. Diğer 8 şahısla birlikte edilgen emir 14 şahsı tamamlar.');
for(const l of LESSONS.filter(l=>['emrgaib-active','nehygaib-active'].includes(l.id)))l.note+=' İlk altı kart klasik gâib/gâibe çekimidir. Son iki kart, bazı başlangıç baskılarında alınmayan birinci şahıs lâm ile istek / yasaklama kullanımlarını gösterir.';
SOURCES.push({title:'Birzeit Üniversitesi Qabas · Ketebe sözlük kaydı',url:'https://sina.birzeit.edu/qabas/lemma/202000003'});
SOURCES.push({title:'Birzeit Üniversitesi Qabas · Alime: bilmek',url:'https://sina.birzeit.edu/qabas/lemma/202003468'});
// Replace the old two-lesson transfer preview with complete root families.
for(let i=RECORDS.length-1;i>=0;i--)if(RECORDS[i].root==='ktb')RECORDS.splice(i,1);
for(let i=LESSONS.length-1;i>=0;i--)if(LESSONS[i].id.startsWith('ktb-'))LESSONS.splice(i,1);
export const ROOT_SIGAS={nsr:SIGAS};
for(const root of ['shkr','ktb','ilm']){const family=buildRootFamily(root,PERSONS,SIGAS);LESSONS.push(...family.lessons);RECORDS.push(...family.records);ROOT_SIGAS[root]=family.sigas;}
export const byId = Object.fromEntries(RECORDS.map(r=>[r.id,r]));
export const lessonById=Object.fromEntries(LESSONS.map(l=>[l.id,l]));
