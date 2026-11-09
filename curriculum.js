import {SIGAS,LESSONS,RECORDS,PERSONS} from './data.js';

export const GLOSSARY=[
 ['KOK','Bir kelime ailesinin temel harfleri.'],['VEZIN','Bir kelimenin biçimini gösteren ölçü kalıp.'],['SIGA','Kelimenin belirli anlam taşıyan çekimli biçimi.'],
 ['MAZI','Geçmiş zamanda gerçekleşen işi bildiren fiil.'],['MUZARI','Şimdiki veya gelecek zamanı bildiren fiil.'],['MASDAR','İşin zaman ve şahıs bildirmeyen adı.'],
 ['FAIL','İşi yapanı bildiren isim türü.'],['MEFUL','İşten etkileneni bildiren isim türü.'],['EMIR','Bir işin yapılmasını isteyen kip.'],['NEHIY','Bir işin yapılmamasını isteyen kip.'],
 ['GAIB','Konuşmada karşıda bulunmayan üçüncü şahıs.'],['MUHATAP','Kendisine söz söylenen ikinci şahıs.'],['TEKIL','Bir varlığı gösteren sayı.'],['IKIL','İki varlığı gösteren sayı.'],['COGUL','İkiden fazla varlığı gösteren sayı.'],
 ['MALUM','Fiilde etken çatıyı anlatan terim.'],['MECHUL','Fiilde edilgen çatıyı anlatan terim.'],['MUENNES','Dişil cinsi gösteren dil bilgisi terimi.'],['MUZEKKER','Eril cinsi gösteren dil bilgisi terimi.'],['MUTEKELLIM','Konuşan kişiyi bildiren birinci şahıs.'],['TASGIR','Küçültme anlamı taşıyan isim kalıbı.'],['TAFDIL','Daha çok veya en çok anlamıyla karşılaştırma bildiren isim.'],['MENSUP','Bir şeye ait olmayı bildiren nispet ismi.'],['MERRE','İşin bir kez yapılmasını bildiren masdar türü.'],['NEVI','İşin türünü bildiren masdarın adı.'],['TAACCUP','Hayret ve şaşma bildiren kalıpların adı.'],['CEZIM','Muzâri fiili meczum yapan dil bilgisi işlemi.'],['NASB','Kelimeyi mansub yapan dil bilgisi işlemi.'],['TESNIYE','İkiyi bildiren sayının klasik dil bilgisi adı.']
].map(([word,clue])=>({word,clue}));

export const BASICS=[
 {title:'1 · Kök ve kalıp',ar:'ن ص ر ← نَاصِرٌ',text:'ن ص ر üç kök harfidir. Kalıp değişince aynı aileden yeni anlamlar çıkar. نَصَرَ “yardım etti”, نَاصِرٌ “yardım eden” demektir. Nâsirun kökün kendisi değil, bu ailenin ism-i fâilidir.',task:'Önce üç kök harfini söyle. Sonra kelimede kök dışında kalan harfi bul: نَاصِرٌ içinde uzatma elifi vardır.'},
 {title:'2 · Muhtelife ve Muttaride',ar:'نَصَرَ ← يَنْصُرُ   |   نَصَرَ ← نَصَرْتُ',text:'Muhtelife’de anlam ve kalıp değişir: mâzîden muzâriye, masdardan ism-i fâile geçersin. Muttaride’de aynı sîga kişi, sayı veya cinsiyete göre çekilir. Klasik düzen 24 sîgadır: 13 fiil, 11 isim.',task:'نَصَرَ → يَنْصُرُ değişiminde zaman; نَصَرَ → نَصَرْتُ değişiminde şahıs değişir.'},
 {title:'3 · Sayı ve cinsiyet',ar:'هُوَ · هُمَا · هُمْ',text:'Müfred bir, tesniye iki, cemi ikiden fazla varlıktır. Müzekker eril, müennes dişil biçimdir. İkil ve bazı fiillerin yazılışı aynı olabilir; zamir ve bağlam anlamı ayırır.',task:'هُمَا iki kişi içindir. هُمْ eril çoğul, هُنَّ dişil çoğul içindir.'},
 {title:'4 · On dört şahıs',ar:'هُوَ ← أَنْتَ ← أَنَا',text:'Altı üçüncü şahıs (gâib/gâibe), altı ikinci şahıs (muhâtab/muhâtaba), iki birinci şahıs (mütekellim) vardır. Ben ve biz için ayrı eril/dişil çekim bulunmaz.',task:'Sıra: o/o ikisi/onlar; dişil üçlü; sen/siz ikiniz/siz; dişil üçlü; ben/biz.'},
 {title:'5 · Ma‘lûm ve meçhul',ar:'نَصَرَ ↔ نُصِرَ',text:'Ma‘lûm etken, meçhul edilgen çatıdır. نَصَرَ “o yardım etti”; نُصِرَ “ona yardım edildi” demektir. Sadece ilk harekeye değil, kelimenin iç harekesine de bak.',task:'Mâzîde نَصَرَ → نُصِرَ; muzâride يَنْصُرُ → يُنْصَرُ karşılaştırmasını sesli oku.'},
 {title:'6 · Son harekeyi fark et',ar:'يَنْصُرُ · لَنْ يَنْصُرَ · لَمْ يَنْصُرْ',text:'Muzâri temel biçimde merfûdur. لَنْ ile mansub, لَمْ ile meczum olur. İkil ve nûn düşen çekimlerde değişim sadece son hareke değildir: يَنْصُرَانِ → لَمْ يَنْصُرَا.',task:'Önce edatı, sonra fiilin sonunu incele. لَا يَنْصُرُ olumsuz haber, لَا يَنْصُرْ ise yasaklamadır.'}
];

const EXPLANATIONS={
 mazi:['Geçmişi anlat','Üç kök harfi de fethalı: نَصَرَ. Şahıs ekleri sona gelir; نَصَرْتُ içinde تُ “ben” işaretidir.','نَصَرَ: o yardım etti. نَصَرْتُ: ben yardım ettim.','Önce o, sen, ben biçimlerini ayır; ardından ikil ve çoğulları ekle.'],
 muzari:['Şimdiki ve gelecek zamanı tanı','Muzâri şahıs harfiyle başlar: أ، ن، ي، ت. Tek bir biçim, bağlama göre eder, ediyor veya edecek anlamı taşıyabilir.','يَنْصُرُ: o yardım eder. أَنْصُرُ: ben yardım ederim.','Baş harfi tek başına yeterli sanma: تَنْصُرُ hem dişil üçüncü hem eril ikinci şahıs olabilir.'],
 masdar:['İşin adını söyle','Masdarın zamanı ve şahsı yoktur. نَصْرًا eylemin kendisini, “yardım etmeyi” bildirir. Burada klasik mansub örnek gösterilir.','نَصْرًا → yardım etmek. “O” veya “sen” ekleme.','Masdar ile mâzîyi karşılaştır: نَصَرَ bir işin gerçekleşmesini, نَصْرًا işin adını bildirir.'],
 fail:['İşi yapanı bul','فَاعِلٌ ölçüsündeki نَاصِرٌ, yardım eden demektir. İsimlerde şahıs değil, sayı ve cinsiyet çekimi vardır.','نَاصِرٌ yardım eden; نَاصِرَةٌ yardım eden dişil biçim.','Nâsirun ile mansûrun’u karşılaştır: yapan mı, işten etkilenen mi?'],
 meful:['İşten etkileneni bul','مَفْعُولٌ ölçüsündeki مَنْصُورٌ, yardım edilen demektir. Baştaki mîm ve ortadaki uzatma vâvını fark et.','نَاصِرٌ yardım eden ↔ مَنْصُورٌ yardım edilen.','İsm-i mef’ûl isimdir; نُصِرَ ise edilgen bir fiildir.'],
 lem:['Geçmişi olumsuz yap','لَمْ ardından muzâri gelir, fakat anlam geçmiş zamanın olumsuzudur. Fiil cezm edilir.','لَمْ يَنْصُرْ: yardım etmedi. لَمْ يَنْصُرُوا: onlar yardım etmediler.','İkil, eril çoğul ve muhatap dişil tekilde son nûn düşer; dişil çoğul نَ korunur.'],
 lemma:['“Henüz” farkını hisset','لَمَّا, gerçekleşmemiş bir iş için “henüz” anlamını taşır. Ardındaki muzâri meczumdur.','لَمَّا يَنْصُرْ: henüz yardım etmedi.','لَمْ ile aynı çekim değişimlerini kullanırsın; anlamda “henüz” farkı vardır.'],
 ma:['Şimdiki zamanı olumsuz yap','مَا يَنْصُرُ klasik Emsile’de nefy-i hâl olarak çalışılır. مَا, burada muzârinin sonunu cezm etmez.','مَا يَنْصُرُ: yardım etmiyor.','لَمْ يَنْصُرْ ile karşılaştır; sondaki damme ile sükûnu ayır.'],
 la:['Geleceği veya geneli olumsuz yap','Nefy-i istikbalde لَا يَنْصُرُ çalışılır. Olumsuzluk lâ’sı, bu yapıda muzâriyi merfû bırakır.','لَا يَنْصُرُ: yardım etmeyecek / yardım etmez.','Nehiy lâ’sıyla karıştırma: لَا يَنْصُرْ “yardım etmesin” demektir.'],
 lan:['Geleceği kuvvetle olumsuz yap','لَنْ ardından mansub muzâri gelir. “Kesinlikle yardım etmeyecek” karşılığıyla öğren; tek başına sonsuza kadar anlamı zorunlu değildir.','لَنْ يَنْصُرَ: kesinlikle yardım etmeyecek.','Sonu fethalı يَنْصُرَ biçimini, يَنْصُرُ ve يَنْصُرْ ile karşılaştır.'],
 emrgaib:['Bir işin yapılmasını iste','Emir lâmı, meczum muzâriye eklenir. Gâib biçimleri başkası için isteği bildirir. Meçhulde de aynı yol kullanılır.','لِيَنْصُرْ: yardım etsin. لِيُنْصَرْ: ona yardım edilsin.','Gâibin ilk altı biçimini önce öğren. Birinci şahıstaki lâm ile istek biçimleri ek bilgi olarak ayrıca açıklanır.'],
 nehygaib:['Başkasına yönelik yasağı tanı','Yasaklama lâ’sından sonra muzâri meczum olur. Etken ve edilgen anlamları ayır.','لَا يَنْصُرْ: yardım etmesin. لَا يُنْصَرْ: ona yardım edilmesin.','Sondaki sükûn, nefy-i istikbalden ayrımı görünür kılar.'],
 emr:['Karşındakine seslen','Emr-i hâzır yalnız ikinci şahıslar için doğrudan emir biçimidir. ن ص ر ailesinde başlangıç “unsur” okunur.','اُنْصُرْ: yardım et. اُنْصُرِي: sen (dişil) yardım et.','İkil ve eril çoğulun sonuna bak: اُنْصُرَا, اُنْصُرُوا.'],
 nehy:['Karşındakine “yapma” de','لَا ile meczum ikinci şahıs muzâriyi birlikte kullan. Dişil tekil ile dişil çoğulun sonlarını ayır.','لَا تَنْصُرْ: yardım etme. لَا تَنْصُرِي: sen (dişil) yardım etme.','لَا تَنْصُرْنَ dişil çoğuldur; نَ burada düşmez.'],
 mansar:['Yer, zaman ve mimli masdarı ayır','مَنْصَرٌ klasik örnekte üç işleve sahiptir: yardım zamanı, yardım yeri ve yardım etmek. Yazılış tek, anlam bağlama göre üçtür.','Aynı مَنْصَرٌ için üç ayrı işlev düşün.','İsm-i âlette başlangıç mîm meksurdur: مِنْصَرٌ.'],
 alet:['İşin aracını tanı','مِفْعَلٌ ölçüsündeki مِنْصَرٌ, klasik alıştırmada yardım aletine örnektir. Başlangıç mîminin kesrasına dikkat et.','مِنْصَرٌ âlet ↔ مَنْصَرٌ yer / zaman / mimli masdar.','Her türetme günlük dilde sık kullanılan bağımsız bir kelime olmayabilir; burada kalıbı öğreniyoruz.'],
 merre:['“Bir kez” anlamını bul','نَصْرَةٌ işin bir defa yapılmasını gösterir. Kökün ilk harfi fethalıdır.','نَصْرَةٌ: bir kez yardım etmek.','نِصْرَةٌ ile ilk harekeyi karşılaştır.'],
 nevi:['İşin türünü anlat','نِصْرَةٌ işin yapılış türüne örnektir. İlk harf kesralı okunur.','نِصْرَةٌ: bir tür yardım etmek.','Merre “kaç kez”, nev‘ “nasıl bir tür” sorusuna yakındır.'],
 tasgir:['Küçültme kalıbını gör','نُصَيْرٌ, فُعَيْلٌ ölçüsündeki küçültme örneğidir. Ortadaki يْ sesini fark et.','نُصَيْرٌ: küçük yardım / küçük yardımcı.','Bu kelime نَصِيرٌ (nasîr) ile aynı harekelere sahip değildir.'],
 mensub:['Mensubiyet ekini tanı','نَصْرِيٌّ kelimesindeki şeddeli يّ nispet bildirir. Tek bir yâ varmış gibi kısa okuma.','نَصْرِيٌّ: yardıma mensup.','Müennes biçimde nispet yâ’sından sonra ة gelir: نَصْرِيَّةٌ.'],
 mubalaga:['Çokluk ve süreklilik anlamını bul','نَصَّارٌ, فَعَّالٌ ölçüsündedir. Kökün ikinci harfindeki şedde, ism-i fâilden farklı bir kalıp yapar.','نَاصِرٌ yardım eden ↔ نَصَّارٌ çok yardım eden.','نُصَّارٌ ise نَاصِرٌ için bir kırık çoğuldur; ilk harekeler aynı değildir.'],
 tafdil:['Karşılaştırmayı tanı','أَنْصَرُ daha çok veya en çok yardım eden demektir. Klasik tabloda müzekker/müennes çekimleri gösterilir. Gerçek cümlede ال ve izafet kullanımına göre uygunluk kuralları değişebilir.','أَنْصَرُ eril örnek; نُصْرَى dişil örnek.','Bu tablo kalıp çalışmasıdır; her cümlede yalın أَفْعَلُ biçiminin cinsiyete uyması gerekmez.'],
 taaccub1:['Şaşmayı birinci kalıpla anlat','مَا أَنْصَرَهُ bir taaccüp yapısıdır. أَنْصَرَ fiili bu yapıda sabittir; sondaki nesne zamiri değişir.','مَا أَنْصَرَهُ: onun yardımına hayret! مَا أَنْصَرَهَا: onun (dişil) yardımına hayret!','Bu tablodaki değişimi normal mâzî şahıs çekimi sanma.'],
 taaccub2:['Şaşmayı ikinci kalıpla anlat','أَنْصِرْ بِهِ ikinci taaccüp kalıbıdır. أَنْصِرْ biçimi sabit kalır; بِـ ile gelen zamir değişir.','أَنْصِرْ بِهِ: onun yardımına hayret! أَنْصِرْ بِهِمْ: onların yardımına hayret!','Yazılışı emir görünümündedir; burada iletişim görevi taaccüptür.' ]
};
export function explainSiga(id){const s=SIGAS.find(s=>s.id===id),a=EXPLANATIONS[id];return {siga:s,title:a[0],rule:a[1],example:a[2],tip:a[3]};}
export function sigaForLesson(id){
 const item=LESSONS.find(l=>l.id===id);if(item?.siga)return item.siga;
 if(id.startsWith('mazi-')||id==='passive-past'||id==='ktb-mazi')return 'mazi';
 if(['present','passive-present','ktb-muzari'].includes(id))return 'muzari';
 if(id==='imperative')return 'emr';if(id==='passive-imperative-addressed')return 'emrgaib';
 if(id.startsWith('noun-'))return id.slice(5);
 if(id.startsWith('taaccub-'))return id.endsWith('1')?'taaccub1':'taaccub2';
 return SIGAS.find(s=>id.startsWith(s.id+'-'))?.id;
}
export function relatedLessons(id){return LESSONS.filter(l=>sigaForLesson(l.id)===id);}
export const COVERAGE=SIGAS.map(s=>({siga:s,lessons:relatedLessons(s.id)}));
export {PERSONS};
