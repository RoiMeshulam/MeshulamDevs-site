export const he = {
    nav: { services: "מומחיות", projects: "פרויקטים", contact: "צור קשר" },

    hero: {
      title: "מהנדס תוכנה — מערכות Real-Time ואינטגרציית AI",
      subtitle: "Node.js · React · React Native · ארכיטקטורת Event-Driven",
    desc:
      "אני רועי משולם, מהנדס תוכנה ב-OMW שבונה מערכות פעילות בפרודקשן. לצד זה אני לוקח פרויקטי פרילנס נבחרים שבהם אני אחראי על המערכת מקצה לקצה.",
    ctaPrimary: "בואו נדבר",
    ctaSecondary: "לצפייה בעבודות",
    },

    trust: [
      "מהנדס תוכנה ב-OMW",
      "מערכות בפרודקשן, לא דמו",
      "פרויקטי פרילנס בצד",
      "אינטגרציית AI ואוטומציה",
    ],

    services: {
        title: "מומחיות טכנית",
        items: [
          {
            title: "פיתוח Backend וארכיטקטורה",
            desc: "בניית היסודות הטכנולוגיים שעליהם המערכת עומדת.",
            bullets: [
              "תכנון ופיתוח REST APIs מורכבים",
              "אבטחת מידע וניהול זהויות",
              "אופטימיזציה של מסדי נתונים",
              "CI/CD וניהול סביבות ענן",
            ],
          },
          {
            title: "מערכות Real-Time",
            desc: "פתרונות לתקשורת מיידית וסנכרון נתונים מהיר.",
            bullets: [
              "תשתיות WebSockets ו-Socket.IO",
              "ניהול תורים ואירועים (Event-Driven)",
              "עבודות רקע ועיבוד אסינכרוני",
              "ממשקים למכונות ו-IoT",
            ],
          },
          {
            title: "אוטומציה ובינה מלאכותית",
            desc: "התייעלות תפעולית באמצעות חיבור חכם בין מערכות.",
            bullets: [
              "בניית תהליכי אוטומציה (n8n)",
              "שילוב סוכני AI ומודלי שפה (MCP)",
              "בניית כלים פנימיים ודשבורדים",
              "מערכות קבלת החלטות אוטונומיות",
            ],
          },
          {
            title: "פיתוח מוצר מלא (Full Stack)",
            desc: "לקיחת אחריות טכנולוגית משלב האפיון ועד להשקה.",
            bullets: [
              "אפליקציות Web ו-Mobile מתקדמות",
              "פיתוח ב-React ו-React Native",
              "חיבור מלא בין Client ל-Server",
              "תחזוקה וניטור שוטף",
            ],
          },
        ],
      },

    projects: {
        title: "פרויקטים נבחרים",
        subtitle: "מערכות שתכננתי ובניתי, בעבודה ובזמני הפנוי.",
        items: [
          {
            name: "KASA – פלטפורמת IoT למיחזור",
            tag: "פרילנס · Real-time · IoT",
            oneLiner: "מערכת אקולוגית מלאה המחברת בזמן אמת בין משתמשים, מכונות מיחזור חכמות וענן.",
            bullets: [
              "שתי אפליקציות React Native (לקוח ותפעול)",
              "תקשורת דו-כיוונית בזמן אמת (WebSockets)",
              "ניהול State וסשנים מורכב",
              "תשתית Serverless וניהול דאטה",
            ],
            tech: ["React Native", "Node.js", "Socket.IO", "Firebase"],
            image: "/projects/kasa.png",
            links: {
              github: "https://github.com/RoiMeshulam/kasa-smart-case-study",
            //   live: "https://kasa-demo.example.com",
            },
          },
          {
            name: "HrBusterAI",
            tag: "פרויקט אישי · AI · HR Tech",
            oneLiner: "אוטומציה חכמה לסינון וניהול מועמדים המבוססת על מודלי שפה (LLMs).",
            bullets: ["תהליכי סינון אוטונומיים", "ניתוח טקסט מתקדם (OpenAI)", "עיבוד נתונים בנפח גבוה"],
            tech: ["n8n", "OpenAI API", "Google Sheets", "Node.js"],
            image: "/projects/hrbuster.png",
            links: {
            //   github: "https://github.com/your-username/hrbusterai",
            //   live: "https://hrbuster.example.com",
            },
          },
          {
            name: "מערכת לוגיסטיקה ואוטומציה",
        tag: "פרויקט אישי · אוטומציה · לוגיסטיקה",
        oneLiner:
          "פלטפורמה מוקדמת שניהלה וניתבה באופן אוטומטי משלוחים דרך WhatsApp.",
        bullets: ["אינטגרציה עמוקה ל-WhatsApp API", "פענוח תמונה לטקסט (OCR)", "דשבורד ניהול ובקרה"],
            tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
            image: "/projects/deliveries.png",
            links: {
              github: "https://github.com/RoiMeshulam/DeliveriesProject",
            //   live: "https://deliveries.example.com",
            },
          },
          {
            name: "MelamedLaw – פורטל לקוחות מאובטח",
            tag: "תפקיד סטודנט · FinTech · אבטחת מידע",
            oneLiner:
              "מערכת לניהול קשרי לקוחות המאפשרת גישה מאובטחת למסמכים ומידע אישי.",
            bullets: [
              "ממשק React מתקדם ומותאם אישית",
              "מנגנוני אבטחה והרשאות קפדניים",
              "ניהול בסיס נתונים רלציוני",
              "פיתוח Full Stack מקצה לקצה",
            ],
            tech: ["React", "Node.js", "Express", "PostgreSQL"],
            image: "/projects/melamedlaw.png",
            links: {
            //   github: "https://github.com/your-username/melamedlaw",
              live: "https://client.melamedlaw.co.il/LoginStack/LoginScreen",
            },
          },

        ],
      },


    how: {
      title: "תהליך העבודה שלי",
      steps: [
        "ניתוח עמוק של הצורך",
        "תכנון ארכיטקטורה יציבה",
        "פיתוח בסטנדרט Production",
        "מסירה, הטמעה ותמיכה",
      ],
      note: "קוד נקי. ארכיטקטורה סקיילבילית. תוצאות אמיתיות.",
    },

    contact: {
      title: "בואו נדבר",
      desc: "יש לך פרויקט מעניין, או סתם בא לך לדבר על מערכות Backend ו-AI? אשמח לשמוע.",
      name: "שם",
      phone: "טלפון",
      phonePlaceholder: "05X-XXXXXXX",
      note: "אחזור אליך בקרוב.",
      email: "אימייל",
      message: "ספר לי בקצרה על הפרויקט",
      send: "שליחה",
      success: "תודה! אחזור אליך בהקדם.",
      sending: "שולח...",
      error: "אירעה שגיאה. נסה שוב.",
    },

    footer: "רועי משולם · מהנדס תוכנה · Node.js · React · אינטגרציית AI",
  };
  
