function showDetails(jadid) {
  const detailsSection = document.getElementById("details");
  const detailTitle = document.getElementById("detail-title");
  const detailDescription = document.getElementById("detail-description");

  let title = "";
  let description = "";

  switch (jadid) {
    case "mahmudxoja":
      title = "Mahmudxo'ja Behbudiy";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1875</p>
                <p><strong>Vafot etgan yili:</strong> 1919</p>
                <p><strong>Asosiy ishlari:</strong> "Pedagogika", "Yosh bolalarga qo'llanma".</p>
                <p><strong>Qisqacha ma'lumot:</strong> Mahmudxo'ja Behbudiy o'zbek ma'rifatparvarlik harakatining yetakchilaridan biri bo'lgan.
                Maxmudxo‘ja Behbudiy (1875–1919) – jadidchilik harakatining yetakchilaridan biri, ma’rifatparvar, dramaturg, publitsist va noshir. U Turkiston o‘lkasida ilm-fan va madaniyatni rivojlantirishga katta hissa qo‘shgan.  
A   sosiy faoliyati:
Maorif sohasi:Yangi usul maktablarini ochib, zamonaviy ta’lim tizimini joriy etishga harakat qilgan.  
Matbuot:“Samarkand” gazetasi va boshqa nashrlarni tashkil etib, xalqni ma’rifatga chorladi.  
Adabiyot:“Padarkush” dramasini yozib, jaholat va eski tuzumga qarshi kurashni targ‘ib qildi.  

Behbudiy jadidchilik g‘oyalari va mustaqillik yo‘lidagi faoliyati tufayli 1919 yilda bolsheviklar tomonidan qatl etilgan. Uning merosi O‘zbekiston madaniyati va ta’lim taraqqiyotida muhim o‘rin tutadi.
</p> `;
      break;
    case "abdulla":
      title = "Abdulla Avloniy";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1878</p>
                <p><strong>Vafot etgan yili:</strong> 1934</p>
                <p><strong>Asosiy ishlari:</strong> "Turkiy guliston yoxud axloq", "Adabiyot qoidalari".</p>
                <p><strong>Qisqacha ma'lumot:</strong> Abdulla Avloniy o'zbek adabiyoti va pedagogikasining rivojiga katta hissa qo'shgan.
                Abdulla Avloniy(1878–1934) – o‘zbek jadidchilik harakatining yetakchilaridan biri, ma’rifatparvar, shoir, dramaturg, jurnalist va pedagog. U o‘z faoliyati orqali xalqni ilm-ma’rifatga chorlab, o‘zbek adabiyoti va madaniyatining rivojiga katta hissa qo‘shgan.  
Asosiy faoliyati:
Ta’lim sohasi:Yangi usul maktablarini ochgan va zamonaviy o‘quv dasturlarini joriy qilgan.  
Adabiyot:"Turkiy Guliston yoxud axloq" asari orqali axloqiy tarbiya masalalarini yoritgan.  
Matbuot:“Shuhrat”, “Turon” kabi gazeta va jurnallarga asos solib, xalqni uyg‘otishga harakat qilgan.  
Teatr:Milliy teatrning shakllanishida ishtirok etib, "Advokatlik osonmi?" kabi sahna asarlarini yozgan.  
Uning ma’rifiy islohotlari va pedagogik merosi bugungi kungacha dolzarb bo‘lib qolmoqda.
 </p> `;
      break;
    case "munavvar":
      title = "Munavvar Qori Abdurashidxonov";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1878</p>
                <p><strong>Vafot etgan yili:</strong> 1931</p>
                <p><strong>Asosiy ishlari:</strong> "Islohot", "Yosh avlodga maktublar".</p>
                <p><strong>Qisqacha ma'lumot:</strong> Munavvar qori Abdurashidxonov (1878–1931) – o‘zbek jadidchilik harakatining yetakchilaridan biri, ma’rifatparvar, pedagog, publitsist va siyosatchi. U O‘zbekistonda yangi usul maktablarini tashkil etgan va zamonaviy ta’lim tizimini rivojlantirishga katta hissa qo‘shgan.
Asosiy faoliyati:
Ta’lim sohasi: 1901-yilda Toshkentda ilk jadid maktabini ochgan, o‘quv dasturlarini yangilashga harakat qilgan.
Adabiyot va matbuot: “Kengash” gazetasini chiqargan, ko‘plab darslik va ilmiy maqolalar yozgan.
Siyosat: 1917-yilgi inqilobdan keyin Turkiston Muxtoriyati hukumatida ishtirok etgan.
Milliy uyg‘onish: O‘zbek tili, madaniyati va mustaqilligi uchun kurashgan.
Sovet hokimiyati tomonidan ta’qib qilinib, 1931-yilda qatl etilgan. Uning ma’rifiy va milliy uyg‘otish yo‘lidagi ishlari bugungi kungacha muhim ahamiyatga ega.
</p> `;
      break;
    case "fitrat":
      title = "Fitrat";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1886</p>
                <p><strong>Vafot etgan yili:</strong> 1938</p>
                <p><strong>Asosiy ishlari:</strong> "Munozara", "Qiyomat".</p>
                <p><strong>Qisqacha ma'lumot:</strong>Abdulhamid Sulaymon o‘g‘li Fitrat(1886–1938) – o‘zbek jadidchilik harakatining yirik namoyandalaridan biri, adib, tilshunos, dramaturg, tarixchi va siyosiy arbob. U O‘zbekistonda ma’rifat, adabiyot va milliy uyg‘onish g‘oyalarini rivojlantirishga katta hissa qo‘shgan.  

Asosiy faoliyati:
Adabiyot:Fitrat “Hind ixtilochilari”, “Abulfayzxon”, “Temurning sog‘onasi” kabi dramatik asarlar yozgan.  
Ma’rifat:Istanbulda tahsil olib, o‘zbek jadid maktablari uchun darsliklar yozgan.  
Tilshunoslik:O‘zbek tilining rivojlanishi va islohoti bo‘yicha ilmiy ishlari bor.  
Siyosat:1920-yillarda Buxoro Xalq Sovet Respublikasida faoliyat yuritgan, lekin keyinchalik Sovet hukumati tomonidan “millatchilik”da ayblanib, 1938-yilda qatl etilgan.  
Fitratning ijodi va ilmiy ishlari bugungi o‘zbek adabiyoti va tilshunosligi uchun katta ahamiyatga ega.
</p>`;
      break;
    case "cholpon":
      title = "Cho'lpon";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1897</p>
                <p><strong>Vafot etgan yili:</strong> 1938</p>
                <p><strong>Asosiy ishlari:</strong> "Kecha va kunduz", "Tanlangan asarlar".</p>
                <p><strong>Qisqacha ma'lumot:</strong>Abdulhamid Cho‘lpon(1897–1938) – o‘zbek jadidchilik harakatining yetakchilaridan biri, shoir, yozuvchi, dramaturg va tarjimon. U o‘z ijodi orqali xalqni milliy uyg‘onish, ozodlik va ma’rifat sari chorlagan.  

Asosiy faoliyati:
She’riyat:“Buloqlar”, “Tong sirlari” kabi she’riy to‘plamlarida erkinlik, vatanparvarlik va ma’rifat g‘oyalarini kuylagan.  
Nasr:“Kecha va kunduz” romani orqali Turkiston xalqlarining jadidchilik harakatidagi hayotini tasvirlagan.  
Teatr:“Yorqinoy” dramasini yozib, milliy sahna san’atining rivojiga hissa qo‘shgan.  
Tarjima:Rus va jahon adabiyotidan Pushkin, Lermontov, G‘orkiy asarlarini o‘zbek tiliga tarjima qilgan.  
Sovet hokimiyati tomonidan “millatchilik”da ayblanib, 1938-yilda qatl etilgan. Cho‘lponning ijodi mustaqillikdan keyin qayta tiklanib, o‘zbek adabiyoti va madaniyatining bebaho qismi sifatida e’tirof etilgan. 
</p>`;
      break;
    case "usmon":
      title = "Usmon Nosir";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1892</p>
                <p><strong>Vafot etgan yili:</strong> 1944</p>
                <p><strong>Asosiy ishlari:</strong> "O'g'il", "Yosh avlod".</p>
                <p><strong>Qisqacha ma'lumot:</strong>Usmon Nosir(1912–1944) – o‘zbekning iste’dodli shoirlaridan biri, sovet davrida ijod qilgan, lekin qatag‘on qurboniga aylangan adib. Uning she’rlari jo‘shqin, vatanparvarlik, muhabbat va kurash ruhida yozilgan.  

Asosiy faoliyati:
She’riyat:“Quyosh bilan suhbat”, “Safarbar satrlar” kabi to‘plamlarida yoshlik, vatan va ozodlik mavzularini kuylagan.  
Dramaturgiya:“Naxshab qissasi” asarini yozgan.  
Tarjima:Shekspir, Pushkin va boshqa adiblarning asarlarini o‘zbek tiliga tarjima qilgan.  
1937-yilda “millatchilik” va “sovet tuzumiga qarshi targ‘ibot”da ayblanib, qamoqqa olingan. 1944-yilda mahbuslikda og‘ir sharoitda vafot etgan. Mustaqillikdan keyin Usmon Nosir ijodi qayta tiklanib, o‘zbek adabiyotining oltin fondidan joy oldi.
</p>`;
      break;
    case "hamza":
      title = "Hamza Hakimzoda Niyoziy";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1889</p>
                <p><strong>Vafot etgan yili:</strong> 1929</p>
                <p><strong>Asosiy ishlari:</strong> "Boy ila xizmatchi", "Paranji sirlari".</p>
                <p><strong>Qisqacha ma'lumot:</strong>Hamza Hakimzoda Niyoziy(1889–1929) – o‘zbek adabiyoti va madaniyatining yirik namoyandasi, shoir, dramaturg, pedagog va jadidchilik harakatining faol vakili. U o‘z asarlari orqali xalqni ma’rifatga, taraqqiyotga va islohotlarga chorlagan.  

Asosiy faoliyati: 
She’riyat:Ijtimoiy-ma’rifiy ruhdagi she’rlar yozib, jaholat va qoloqlikka qarshi kurashgan.  
Dramaturgiya:“Zaharli hayot yoxud Ishq qurbonlari”, “Maysaraning ishi” kabi pyesalarida eski qarashlarni tanqid qilgan.  
Maorif:Yangi usul maktablarini ochib, o‘quv darsliklarini yaratgan.  
Teatr:O‘zbek milliy teatrining shakllanishiga katta hissa qo‘shgan.  
Hamza sovet davrida ham faoliyat yuritgan, lekin ayrim islohotlari mahalliy konservativ guruhlarning qarshiligiga uchragan. 1929-yilda Qo‘qonda qatl etilgan. Uning ijodi o‘zbek adabiyoti va madaniyatining muhim qismi sifatida e’tirof etiladi.
                </p>
            `;
      break;
    case "abdulhamid":
      title = "Abdulhamid Cho'lpon";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1893</p>
                <p><strong>Vafot etgan yili:</strong> 1938</p>
                <p><strong>Asosiy ishlari:</strong> "Kecha va kunduz", "Tanlangan asarlar".</p>
                <p><strong>Qisqacha ma'lumot:</strong> Abdulhamid Cho'lpon o'zbek adabiyotining yorqin namoyandalaridan biri.
                Asosiy faoliyati:
She’riyat: “Buloqlar”, “Tong sirlari” kabi she’riy to‘plamlarida erkinlik, vatanparvarlik va ma’rifat g‘oyalarini kuylagan.
Nasr: “Kecha va kunduz” romani orqali Turkiston xalqlarining jadidchilik harakatidagi hayotini tasvirlagan.
Teatr: “Yorqinoy” dramasini yozib, milliy sahna san’atining rivojiga hissa qo‘shgan.
Tarjima: Rus va jahon adabiyotidan Pushkin, Lermontov, G‘orkiy asarlarini o‘zbek tiliga tarjima qilgan.
                .</p>
            `;
      break;
    case "ibrat":
      title = "Ishoqxon Ibrat";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1896</p>
                <p><strong>Vafot etgan yili:</strong> 1937</p>
                <p><strong>Asosiy ishlari:</strong> She’rlari va ilmiy asarlarida ilm-ma’rifat, milliy uyg‘onish va vatanparvarlik g‘oyalarini ilgari surgan.</p>
                <p><strong>Qisqacha ma'lumot:</strong>Asosiy faoliyati:
1. Maorif va ta’lim:
1896-yilda o‘z qishlog‘i To‘raqorgon (Namangan viloyati)da yangi usul maktabi ochgan.
O‘quvchilarga arab, fors, rus va ingliz tillarini o‘rgatgan.
Yangi darsliklar yozib, ta’limni rivojlantirishga katta hissa qo‘shgan.
Qatag‘on va merosi:
Sovet davrida “millatchilik” va “jadidchilik”da ayblanib, 1937-yilda qatag‘on qilingan. Uning merosi mustaqillikdan keyin qayta tiklanib, O‘zbekiston ilm-fan va ta’lim sohasida katta hurmat bilan eslanadi.
Xulosa:
Ibrat – o‘zbek tilshunosligi, matbaachilik va maorif rivojiga katta hissa qo‘shgan alloma. Uning islohotlari bugungi o‘zbek ta’lim tizimi va madaniyatida muhim o‘rin tutadi.
                </p>
            `;
      break;
    case "abdurrauf":
      title = "Abdurrauf Fitrat";
      description = `
                <p><strong>Tug'ilgan yili:</strong> 1886</p>
                <p><strong>Vafot etgan yili:</strong> 1938</p>
                <p><strong>Asosiy ishlari:</strong> "Munozara", "Qiyomat".</p>
                <p><strong>Qisqacha ma'lumot:</strong>Abdulhamid Sulaymon o‘g‘li Fitrat(1886–1938) – o‘zbek jadidchilik harakatining eng yetuk namoyandalaridan biri, adib, dramaturg, tilshunos, tarixchi va siyosiy arbob. U O‘zbekistonda milliy uyg‘onish, ilm-fan va adabiyot rivojiga ulkan hissa qo‘shgan.  

Asosiy faoliyati:
Adabiyot:“Hind ixtilochilari”, “Abulfayzxon”, “Temurning sog‘onasi” kabi dramatik asarlar yozgan.  
She’riyat:“Sayha” she’riy to‘plamida xalqning uyg‘onishi va ozodlik g‘oyalarini ilgari surgan.  
Tilshunoslik:O‘zbek tili grammatikasi va islohoti bo‘yicha tadqiqotlar olib borgan.  
Tarix va falsafa:Turkiston tarixi va madaniyati haqida ilmiy ishlar yozgan.  
Siyosiy faoliyat:Buxoro Xalq Sovet Respublikasida faoliyat yuritgan, lekin keyinchalik Sovet hokimiyati tomonidan ta’qib qilingan.  

Qatag‘on va meros:1937-yilda “xalq dushmani” sifatida hibsga olinib, 1938-yilda qatl etilgan. Mustaqillikdan keyin uning nomi oqlanib, adabiy va ilmiy merosi yana xalqga qaytarildi. Fitratning ijodi bugungi o‘zbek madaniyati va adabiyoti uchun bebaho boylik hisoblanadi.
 </p>   `;
      break;
    default:
      title = "Ma'lumot topilmadi";
      description = "Uzr, bu jadid haqida ma'lumot mavjud emas.";
  }

  detailTitle.textContent = title;
  detailDescription.innerHTML = description;
  detailsSection.classList.remove("hidden");
}

function hideDetails() {
  const detailsSection = document.getElementById("details");
  detailsSection.classList.add("hidden");
}
