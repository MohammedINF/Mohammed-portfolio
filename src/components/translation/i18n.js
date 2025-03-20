import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      cards: [
        {
          "id": 1,
          "title": "Attendance System",
          "content": "A Responsive Attendance Website to Take Student Attendances and Student Can View There Attendance and Result.",
          "img": require("../../icons/attendance.jpg"),
          "languages": ["React JS", "Express Js", " MySQL", "Tailwind CSS"],
          "icon":require('../../icons/web1.png')
        },
        {
          "id": 2,
          "title": "Restaurant  System",
          "content": "A restaurant management system (RMS) is a software application designed to streamline and automate various aspects of restaurant operations.",
          "img": require("../../icons/db.JPG"),
          "languages": [" C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 3,
          "title": "Note Application",
          "content": "A Note-Taking App Is a Digital Tool For Creating, Organizing, And Managing Notes, And It Record Voices.",
          "img": require("../../icons/note.jpg"),
          "languages": ["React Native", "Express Js", "SQL Lite"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 4,
          "title": "Chat-Bot  Application",
          "content": "Mobile App Like Chat-GPT It Response Messages From User And Contain Imagining That Convert Text To Image.",
          "img": require("../../icons/chatapi.jpg"),
          "languages": ["React Native", "Express Js", "Chat-GPT API"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 5,
          "title": "Pharmacy  System",
          "content": "A Pharmacy Management System (PMS) is a software application specifically designed for use in pharmacies and other healthcare facilities.",
          "img": require("../../icons/pharma.jpg"),
          "languages": ["C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 6,
          "title": "klawen",
          "content": "Klawen is a traditional Kurdish game where a ring is hidden under cups. This website lets users create and join games online.",
          "img": require("../../icons/klawen.png"),
          "languages": ["Next Js", "Tailwind Css", "SupaBase"],
          "icon": require('../../icons/web1.png'),
          "url":"https://klawen.vercel.app/"
        }
      ],
      developerName:"Mohammed is a",
      position:" full-stack developer ",
      location:"from Iraq sulaymaniyah",
      created:"I developed responsive",
      typewriterWords: ['Telegram Bots','Websites', 'Mobile Applications', 'Database Systems'],
      speech:"I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients .What would you do if you had a software expert available at your fingertips?",
      buttonWriting: ['Hire Me !', 'Contact Me !', 'Get Started !'],
      myName:'Mohammed Othman',
      myName1: 'Mohammed Othman',
      cristianoSpeech:'Talent without work is nothing',
      speakerName:'Cristiano Ronaldo',
      hello:"Hello, i'm",
      description:'and I am a full-stack developer from Iraq. I currently reside in the beautiful city of Sulaymaniyah . Over the years, I have developed a dynamic skill set that enables me to create powerful and innovative solutions for my clients',
      downloadButton:'Download My CV !',
      contactInfo:'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.',
      messageContent:'Message me here',
      whatsapp:['WhatsApp'],
      telegram:['Telegram'],
      gmail:['Gmail'],
      contact:'Contact',
      about:'About',
      skill:'Skills',
      database:'Databases',
      projects:'Projects',
      LanguagesFrameworks:'Languages & Frameworks',
      Language: 'Languages',
      frameworks:'Frameworks',
      tool:'Tools',
      aboutTooltip:'About',
      projectTooltip:'Projects',
      skillTooltip:'Skills',
      topTooltip:'Top',
      contactTooltip:'Contact',
      languages :[
        { id: 1, Text: 'Java' },
        { id: 2, Text: 'C#' },
        { id: 3, Text: 'Node Js' },
        { id: 4, Text: 'Java Script' },
      ],
      FrameWorks :[
        { id: 1, Text: 'Express js',  },
        { id: 2, Text: 'React js & React Native', },
        { id: 3, Text: 'Next js', },
        { id: 4, Text: 'Guna 2 Ui', },
        { id: 5, Text: 'Tailwind Css',  },
      ],
      DataBases :[
        { id: 1, Text: 'MySQL' },
        { id: 2, Text: 'SQL-Lite' },
        { id: 3, Text: 'Microsoft SQL Server' },
        { id: 4, Text: 'Oracle' },
        { id: 5, Text: 'SupaBase' },
      ],
      Tools :[
        { id: 1, Text: 'Windows & Linux & MacOS' },
        { id: 2, Text: 'Git & Github' },
        { id: 3, Text: 'Postman & VsCode ' },
        { id: 4, Text: 'NetBeans & Intellij idea' },

      ]


    }
  },
  kr: {
    translation: {
      cards: [
        {
          "id": 1,
          "title": " سیستەمی ئامادەبوون",
          "content": "ماڵپەڕێکی ئامادەبوونی وەڵامدەرەوە بۆ وەرگرتنی ئامادەبوونی خوێندکار و خوێندکار دەتوانێت لەوێ تێکڕای ئامادەبوون و ئەنجام ببینێت.",
          "img": require("../../icons/attendance.jpg"),
          "languages": ["React JS", "Express Js", " MySQL", "Tailwind CSS"],
          "icon": require('../../icons/web1.png')
        },
        {
          "id": 2,
          "title": "سیستەمی بەڕێوەبردنی چێشتخانە ",
          "content": "سیستەمی بەڕێوەبردنی چێشتخانە (RMS) بەرنامەیەکی نەرمەکاڵایە کە بۆ ڕێکخستن و ئۆتۆماتیکیکردنی لایەنە جیاوازەکانی کارکردنی چێشتخانەکان داڕێژراوە.",
          "img": require("../../icons/db.JPG"),
          "languages": [" C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 3,
          "title": "ئەپی تیبینی وەرگرتن",
          "content": "ئەپی تێبینی وەرگرتن ئامرازێکی دیجیتاڵییە بۆ دروستکردن و ڕێکخستن و بەڕێوەبردنی تێبینیەکان وە دەنگەکان تۆمار دەکات.",
          "img": require("../../icons/note.jpg"),
          "languages": ["React Native", "Express Js", "SQL Lite"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 4,
          "title": "بەرنامەی چات-بۆت",
          "content": "ئەپی مۆبایل وەک چات-GPT وەڵامی پەیامەکانی بەکارهێنەر دەداتەوە و خەیاڵکردنی تێدایە کە دەق دەگۆڕێت بۆ وێنە.",
          "img": require("../../icons/chatapi.jpg"),
          "languages": ["React Native", "Express Js", "Chat-GPT API"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 5,
          "title": "سیستەمی دەرمانخانە",
          "content": "سیستەمی بەڕێوەبردنی دەرمانخانە (PMS) بەرنامەیەکی نەرمەکاڵایە کە بە تایبەتی بۆ بەکارهێنان لە دەرمانخانەکان و دامەزراوە تەندروستییەکانی تردا داڕێژراوە.",
          "img": require("../../icons/pharma.jpg"),
          "languages": ["C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 5,
          "title": "کڵاوێن",
          "content": "کلاوێن یارییەکی نەریتی کوردییە کە ئەڵقەیەک لە ژێر کوپەکاندا شاردراوەتەوە. ئەم وێبسایتە ڕێگە بە بەکارهێنەران دەدات یارییەکان بە شێوەی ئۆنلاین دروست بکەن و بەشداری بکەن",
          "img": require("../../icons/klawen.png"),
          "languages": ["Next JS", "Tailwind Css", "SupaBase"],
          "icon": require('../../icons/web1.png'),
          "url":"https://klawen.vercel.app/"

        }
      ],
       developerName: " محمد عوسمان ",
      position: " گەشەپێدەری فول ستاک",
      location: " لە عێراق، سلێمانی ",
      created: "نەرماکاڵای گونجاوم دروستکردوە وەک",
      typewriterWords: ['بۆتی تێلێگرام',' وێبسایتەکان ', ' ئەپەکانی مۆبایل ', ' سیستەمە داتابەیس '],
      speech: "من خولیای دروستکردنی نەرمەکاڵایەکی نایابم کە ژیانی دەوروبەرم باشتر بکات. من پسپۆڕم لە دروستکردنی نەرمەکاڵا بۆ کڕیارەکان .چی دەکەیت ئەگەر پسپۆڕێکی نەرمەکاڵا لەبەردەستتدا بێت؟",
      buttonWriting: ['دەست پێ بکە !','من دامەزرێنە ! ', ' پەیوەندیم پێوەبکە ! '],
      myName: 'محمد عوسمان',
      myName1: 'محمد عوسمانم',
      cristianoSpeech: 'بەهرە بەبێ کردار هیچ نییە',
      speakerName: 'کریستیانۆ ڕۆناڵدۆ',
      hello: "سڵاو، من",
      description: 'وە من گەشەپێدەرێکی فول ستاکم لە عێراقەوە. لە ئێستادا لە شاری جوانی سلێمانی نیشتەجێم . بەدرێژایی ساڵان، کۆمەڵە کارامەیییەکی داینامیکیم پەرەپێداوە کە توانام پێدەدات چارەسەری بەهێز و داهێنەرانە بۆ کڕیارەکانم دروست بکەم',
      downloadButton: ' سی ڤییەکەم دابگرە ! ',
      contactInfo: 'من ئارەزووی دەرفەتی فریلانس دەکەم. بەڵام ئەگەر داواکاری یان پرسیارێکی ترتان هەیە دوودڵ مەبن پەیوەندیم پێوە بکەن.',
      messageContent: 'لێرە نامەم بۆ بنێرە',
      whatsapp: ['واتس ئەپ'],
      telegram: ['تێلێگرام'],
      gmail: ['ئیمێڵ'],
      contact: 'پەیوەندی',
      about: 'دەربارە',
      skills: 'کارامەییەکان',
      projects: 'پرۆژەکان',
      LanguagesFrameworks: ' زمان و چوارچێوەکان',
      Language:'زمانەکان',
      frameworks:' چوارچێوەکان',
      database: ' داتابەیسەکان ',
      tool: 'تووڵەکان',
      aboutTooltip: 'دەربارە',
      projectTooltip: 'پرۆژەکان',
      skillTooltip: 'کاراماییەکان',
      topTooltip: 'سەرەتا',
      contactTooltip: 'پەیوەندی',
      languages :[
        { id: 1, Text: 'Java' },
        { id: 2, Text: 'C#' },
        { id: 3, Text: 'Node Js' },
        { id: 4, Text: 'Java Script' },
      ],
      FrameWorks :[
        { id: 1, Text: 'Express js',  },
        { id: 2, Text: 'React js & React Native', },
        { id: 3, Text: 'Next js', },
        { id: 4, Text: 'Guna 2 Ui', },
        { id: 5, Text: 'Tailwind Css',  },
      ],
      DataBases :[
        { id: 1, Text: 'MySQL' },
        { id: 2, Text: 'SQL-Lite' },
        { id: 3, Text: 'Microsoft SQL Server' },
        { id: 4, Text: 'Oracle' },
        { id: 5, Text: 'SupaBase' },
      ],
      Tools :[
        { id: 1, Text: 'Windows & Linux & MacOS' },
        { id: 2, Text: 'Git & Github' },
        { id: 3, Text: 'Postman & VsCode ' },
        { id: 4, Text: 'NetBeans & Intellij idea' },

      ]

    },
  },
  ar: {
    translation: {
      cards: [
        {
          "id": 1,
          "title": "نظام الحضور",
          "content": "موقع ويب متجاوب بشكل كامل لأخذ حضور الطلاب ويمكن للطلاب عرض حضورهم ونتائجهم.",
          "img": require("../../icons/attendance.jpg"),
          "languages": ["React JS", "Express Js", " MySQL", "Tailwind CSS"],
          "icon": require('../../icons/web1.png')
        },
        {
          "id": 2,
          "title": "نظام المطعم",
          "content": "نظام إدارة المطعم (RMS) هو تطبيق برمجي مصمم لتبسيط وتأتيف جوانب مختلفة من عمليات المطعم.",
          "img": require("../../icons/db.JPG"),
          "languages": [" C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 3,
          "title": "تطبيق الملاحظات",
          "content": "تطبيق ملاحظات هو أداة رقمية لإنشاء وتنظيم وإدارة الملاحظات، ويسجل الأصوات.",
          "img": require("../../icons/note.jpg"),
          "languages": ["React Native", "Express Js", "SQL Lite"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 4,
          "title": "تطبيق الدردشة الآلية",
          "content": "تطبيق الجوال مثل Chat-GPT يستجيب لرسائل المستخدم ويحتوي على صورة متخيلة تحول النص إلى صورة.",
          "img": require("../../icons/chatapi.jpg"),
          "languages": ["React Native", "Express Js", "Chat-GPT API"],
          "icon": require('../../icons/mob1.png')
        },
        {
          "id": 5,
          "title": "نظام الصيدلية",
          "content": "نظام إدارة الصيدلية (PMS) هو تطبيق برمجي مصمم خصيصًا للاستخدام في الصيدليات والمرافق الصحية الأخرى.",
          "img": require("../../icons/pharma.jpg"),
          "languages": ["C#", "Guna2 UI", "SQL Server"],
          "icon": require('../../icons/win1.png')
        },
        {
          "id": 6,
          "title": "کلاوین",
          "content": "كلاوين لعبة كردية تقليدية، حيث يُخبأ خاتم تحت أكواب. يتيح هذا الموقع للمستخدمين إنشاء ألعاب والانضمام إليها عبر الإنترنت.",
          "img": require("../../icons/klawen.png"),
          "languages": ["Next Js", "Tailwind Css", "SupaBase"],
          "icon": require('../../icons/web1.png'),
          "url":"https://klawen.vercel.app/"
        }
      ],
      developerName: "محمد عثمان",
      position: " مطور برامج متكامل ",
      location: "من العراق، السليمانية",
      created: "لقد قمت بتطوير",
      typewriterWords: ['بوتات تيليجرام',' المواقع الإلكترونية ', ' تطبيقات الهاتف المحمول ', ' أنظمة قواعد البيانات '],
      speech: "أنا متحمس لبناء برمجيات ممتازة تحسن حياة الأشخاص من حولي. أنا متخصص في إنشاء برامج للعملاء. ماذا ستفعل إذا كان لديك خبير برمجيات متاح بلمسة إصبع؟",
      buttonWriting: ['ابدأ الآن!','وظفني ! ', 'اتصل بي ! '],
      myName: 'محمد عثمان',
      myName1: 'محمد عثمان',
      cristianoSpeech: 'الموهبة بدون عمل لا شيء',
      speakerName: 'كريستيانو رونالدو',
      hello: "مرحبا، أنا",
      description: 'وأنا مطور برامج متكامل من العراق. أنا أعيش حاليًا في مدينة السليمانية الجميلة. على مر السنين، طورت مجموعة مهارات ديناميكية تمكنت من إنشاء حلول قوية ومبتكرة لعملائي',
      downloadButton: ' تحميل سيرتي الذاتية ! ',
      contactInfo: 'أنا مهتم بالفرص الحرة. ومع ذلك، إذا كان لديك طلب آخر أو سؤال، فلا تتردد في الاتصال بي.',
      messageContent: 'راسلني هنا',
      whatsapp: [' واتساب '],
      telegram: [' تيليجرام '],
      gmail: [' البريد الإلكتروني '],
      contact: 'اتصال',
      about: 'حول',
      skills: 'المهارات',
      projects: 'المشاريع',
      LanguagesFrameworks: 'اللغات و أطر عمل',
      Language: 'اللغات',
      frameworks: 'إطار أعمال',
      database: 'قواعد بيانات ',
      tool: 'أدوات',
      aboutTooltip: 'حول',
      projectTooltip: 'مشاريع',
      skillTooltip: 'مهارات',
      topTooltip: 'أعلى',
      contactTooltip: 'اتصال',
      languages :[
        { id: 1, Text: 'Java' },
        { id: 2, Text: 'C#' },
        { id: 3, Text: 'Node Js' },
        { id: 4, Text: 'Java Script' },
      ],
      FrameWorks :[
        { id: 1, Text: 'Express js',  },
        { id: 2, Text: 'React js & React Native', },
        { id: 3, Text: 'Next js', },
        { id: 4, Text: 'Guna 2 Ui', },
        { id: 5, Text: 'Tailwind Css',  },
      ],
      DataBases :[
        { id: 1, Text: 'MySQL' },
        { id: 2, Text: 'SQL-Lite' },
        { id: 3, Text: 'Microsoft SQL Server' },
        { id: 4, Text: 'Oracle' },
        { id: 5, Text: 'SupaBase' },
      ],
      Tools :[
        { id: 1, Text: 'Windows & Linux & MacOS' },
        { id: 2, Text: 'Git & Github' },
        { id: 3, Text: 'Postman & VsCode ' },
        { id: 4, Text: 'NetBeans & Intellij idea' },

      ]

    },
  },

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;