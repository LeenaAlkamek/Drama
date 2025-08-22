// src/data/actors.js
/** @type {import('../models/types').Actor[]} */

export const actors = [
  {
    id: 1,
    name: 'ابوبكر سالم',
    nameEn: 'Abobakr Salem',
    image: '/actors/ابوبكر.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1988-05-23',
    age: 37,
    worksCount: 45,
    rating: 4.8,
    followers: '5.2M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@abobakr_salem',
      twitter: '@abobakr_salem',
      facebook: 'AbobakrSalemOfficial'
    },
    bio: 'أبوبكر سالم ⚡ممثل تلفزيوني وكاتب سيناريو يمني ⚡شارك بالتمثيل والكتابة في عدد من الأعمال والبرامج الفنية⚡',
    works: [
       ]
  },
  
  {
    id: 2,
    name: 'عبدالمجيد الخديري',
    nameEn: 'Abdulmageed Alkadiry',
    image: '/actors/مجيد.webp',
    coverImage: '/actors/مجيد.webp',
    nationality: 'يمني',
    birthDate: '22-12-1999',
    age: 25,
    worksCount: 90,
    rating: 4.8,
    followers: '20.5M',
    genre: "اعلامي",
    awards: [],
    socialMedia: {
      instagram: '@mohamedramadanws',
      twitter: '@mohamedramadan',
      facebook: 'MohamedRamadanWS'
    },
    bio: 'معد ومقدم تلفزيوني يمني ⚡ومعلق صوتي Voice over ⚡محاضر جامعي ومدرب في الإلقاء والتقديم ⚡',
    works: [
      {id:1 ,type: 'movie'}
     
    ]
  },
  {
    id: 3,
    name: 'محمد الاموي',
    nameEn: 'Mohammed Alamawi',
    image: '/actors/محمد الاموي.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1998-01-15',
    age: 27,
    worksCount: 52,
    rating: 4.9,
    followers: '7.8M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@mohammed_alamawi',
      twitter: '@alamawi_official',
      facebook: 'MohammedAlamawi'
    },
    bio: 'محمد الاموي ⚡ممثل يمني⚡ من مواليد تعز ⚡شارك بالتمثيل في عدد من الأعمال الفنية⚡',
    works: [
     { id: 2 , type: 'series'},
       { id: 6 , type: 'series'}
    ]
  },
  {
    id: 4,
    name: 'محمد الزرقاوي',
    nameEn: 'Mohammed Alzarqawi',
    image: '/actors/محمد الزرقاوي.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1996-08-10',
    age: 29,
    worksCount: 41,
    rating: 4.8,
    followers: '3.6M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@alzarqawi_mohammed',
      twitter: '@mz_actor',
      facebook: 'MohammedAlzarqawi'
    },
    bio: 'محمد الزرقاوي ⚡ممثل يمني⚡ من مواليد تعز ⚡شارك بالتمثيل في عدد من الأعمال الفنية⚡',
    works: [
      { id: 2 , type: 'series'},
       { id: 6 , type: 'series'}
    ]
  },
  {
    id: 5,
    name: 'حسام الشراعي',
    nameEn: 'Hosam Alsherai',
    image: '/actors/حسام الشراعي.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1975-05-12',
    age: 50,
    worksCount: 47,
    rating: 4.7,
    followers: '1.2M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@hosam_alsherai',
      twitter: '@hosam_actor',
      facebook: 'HosamAlsherai'
    },
    bio: 'حسام الشراعي⚡ ممثل يمني ⚡ولد في تعز ويقيم فيها⚡ ومتزوج ⚡يدرس‏ في كليه الآدآب ⚡إعلام وعلوم إتصال في‏جامعة تعز ⚡',
    works: [
    { id: 2 , type: 'series'},
       { id: 6 , type: 'series'}
    ]
  },
  {
    id: 6,
    name: 'ابراهيم الابيض',
    nameEn: 'Ebrahim Alabiad',
    image: '/actors/ابراهيم الابيض.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1954-09-22',
    age: 71,
    worksCount: 39,
    rating: 4.8,
    followers: '800K',
    genre: "مخرج",
    awards: [],
    socialMedia: {
      instagram: '@ebrahim_alabiad',
      twitter: '@ealabiad',
      facebook: 'EbrahimAlabiad'
    },
    bio: 'إبراهيم علي غالب الابيض⚡ مخرج يمني ⚡من محافظة ذمار ⚡ اشتهر بإخراجه لعشرات المسلسلات اليمنية⚡',
    works: [
      ]
  },
  {
    id: 7,
    name: 'ادم سيف',
    nameEn: 'Adam Saif',
    image: '/actors/ادم سيف.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1957-03-14',
    age: 68,
    worksCount: 35,
    rating: 4.9,
    followers: '2.4M',
    genre: "مؤلف",
    awards: [],
    socialMedia: {
      instagram: '@adam_saif',
      twitter: '@adam_writer',
      facebook: 'AdamSaifOfficial'
    },
    bio: 'الفنان آدم سيف إسماعيل العزيبي ⚡فنان يمني كوميدي ومؤلف وكاتب ⚡اشتهر بشخصية دحباش⚡',
    works: [
      ]
  },
  {
    id: 8,
    name: 'اسامه الصالحي',
    nameEn: 'Osama Al-Salihi',
    image: '/actors/اسامة.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1980-06-19',
    age: 45,
    worksCount: 33,
    rating: 4.6,
    followers: '900K',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@osama_alsalihi',
      twitter: '@osama_actor',
      facebook: 'OsamaAlSalihi'
    },
    bio: 'ممثل يمني ⚡شارك في مسرحية الفضاء ⚡وعدة أعمال تلفزيونية⚡',
    works: [
      ]
  },
  {
    id: 9,
    name: 'هديل مانع',
    nameEn: 'Hadeel Manea',
    image: '/actors/هديل مانع.webp',
    coverImage: "",
    nationality: 'يمنية',
    birthDate: '1999-12-22',
    age: 25,
    worksCount: 38,
    rating: 4.7,
    followers: '1.5M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@hadeel_manea',
      twitter: '@hadeelm',
      facebook: 'HadeelManea'
    },
    bio: 'هديل عبدة مانع⚡ ممثلة يمنية⚡ مواليد محافظة إب⚡ شاركت في عدة اعمال فنية ⚡',
    works: [
     { id: 5 , type: 'series'},
     { id: 4 , type: 'series'},  ]
  },
  {
    id: 10,
    name: 'محمد قحطان',
    nameEn: 'Mohammed Qhtan',
    image: '/actors/محمد قحطان.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "ممثل",
    awards: [],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'محمد قاسم محمد قحطان المليكي ⚡ ممثل يمني ⚡من مواليد امانة العاصمة ⚡ بدأ التمثيل من المسرح المدرسي⚡',
    works: [
     { id: 5 , type: 'series'},
    { id: 1 , type: 'series'} ]
  },

   {
    id: 11,
    name: 'صدام حسن',
    nameEn: 'sadam hasan',
    image: '/actors/صدام حسن.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "اعلامي",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'صدام حسن اعلامي و مقدم برامج يمني ، مذيع تلفزيوني ، محرر اخبار ، ناشط مهتم في المجال الانساني ، رئيس منتدى اعلامي تهامه مواليد مدينه حيس و مقيم في صنعاء',
    works: [
     { id: 1 , type: 'programs'}
    ]
  }
,
  {
    id: 12,
    name: 'عبد الحكيم الحدي',
    nameEn: 'abdulhakim Alhadi',
    image: '/actors/عبد الحكيم.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "مخرج",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'مخرج تلفزيوني يمني ، مدير المركز الااعلامي بجامعه العلوم ، مدير عام ميديا للانتاج و التوزيع الفني',
    works: [
     { id: 1 , type: 'podcasts'}
    ]
  },

  {
    id: 13,
    name: 'نذير الحمادي',
    nameEn: 'nazeer alhamadi ',
    image: '/actors/نذير.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "اعلامي",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'اعلامي و مقدم برامج يمني ، نعد و مقدم برامج لدى راديو برق اف ام و مقدم برامج لدى قناة السعيدة ',
    works: [
     { id: 1 , type: 'podcasts'}
    ]
  },

  {
    id: 14,
    name: 'علاء الفردي',
    nameEn: 'Ala alfardi',
    image: '/actors/علاء.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "مخرج",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'علاء الفردي مصور و مخرج تلفزيوني يمني ، لدية اعنال كثيرة في مجال الاخراج و التصوير',
    works: [
     { id: 1 , type: 'kids'}
    ]
  },

  {
    id: 15,
    name: 'نور ناجي ',
    nameEn: 'Nour Nagee',
    image: '/actors/نور.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1979-04-10',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "مؤلف",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'نور ناجي ، روائيه و مؤلفه و كاتبه سيناريو يمنيه ، اصدرت اول رواياتها عام 2019 بعنوان تحت اللثام',
    works: [
     { id: 1 , type: 'kids'},
     { id: 1 , type: 'series'}
    ]
  }
,
  {
    id: 16,
    name: 'فهد القرني',
    nameEn: 'fahd alkarani',
    image: '/actors/فهد.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1975-5-5',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "ممثل",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'فهد سعيد ابراهيم القرني ، ممثل و مؤلف و مخرج يمني ، كوميدي شعبي، انتخب امين سر نقايه الفنانين في تعز ',
    works: [
     { id: 1 , type: 'plays'},
     { id: 1 , type: 'series'},
       { id: 6 , type: 'series'}
    ]
  },

    {
    id: 17,
    name: 'سيف الوافي',
    nameEn: 'saif alwafi',
    image: '/actors/سيف.webp',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1975-5-5',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "ممثل",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'سيف الدين غالب علي الوافي ، مخرج و ممثل مسرحي و تلفزيوني و مهندس صوتي ، من محافظه تعز',
    works: [
     { id: 1 , type: 'plays'},
     { id: 1 , type: 'series'},
       { id: 6 , type: 'series'}
    ]
  },

   {
    id: 18,
    name: 'رندا الحمادي',
    nameEn: 'randa alhamadi',
    image: '/actors/',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1995-5-5',
    age: 46,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "ممثل",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'رندا شرف الحمادي ، ممثله يمنيه ',
    works: [
     { id: 1 , type: 'plays'},
     { id: 1 , type: 'series'}
    ]
  },

   {
    id: 19,
    name: 'صالح طارق',
    nameEn: 'salh tariq',
    image: '/actors/',
    coverImage: "",
    nationality: 'يمني',
    birthDate: '1995-5-5',
    age: 36,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "مخرج",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: ' صالح طارق مخرج يمني شاب',
    works: [
     { id: 1 , type: 'movies'},
     { id: 2 , type: 'movies'}
    ]
  },

   {
    id: 20,
    name: 'اشواق علي',
    nameEn: 'Ashwaq Ali',
    image: '/actors/اشواق.webp',
    coverImage: "",
    nationality: 'هيمني',
    birthDate: '1999',
    age: 36,
    worksCount: 38,
    rating: 4.7,
    followers: '3.1M',
    genre: "ممثل",
    awards: [ ],
    socialMedia: {
      instagram: '@mohammed_qhtan',
      twitter: '@mqhtan',
      facebook: 'MohammedQhtanOfficial'
    },
    bio: 'اشولق علي   ، ممثله يمنيه ',
    works: [
     { id: 1 , type: 'series'},
     { id: 4 , type: 'series'},
    ]
  },


  
];
