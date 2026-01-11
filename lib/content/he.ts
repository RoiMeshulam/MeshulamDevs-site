export const he = {
    nav: { services: "שירותים", projects: "פרויקטים", contact: "צור קשר" },
  
    hero: {
      title: "ארכיטקטורת תוכנה, אוטומציה ומערכות Backend",
      subtitle: "פיתוח סקיילבילי · מערכות Real-Time · תשתית ענן",
    desc:
      "הופך לוגיקה עסקית מורכבת למערכות יציבות. מומחה בפיתוח צד-שרת, אינטגרציות מתקדמות, אוטומציות ומוצרים טכנולוגיים מקצה לקצה.",
    ctaPrimary: "בוא נדבר על הפרויקט",
    ctaSecondary: "לצפייה בעבודות",
    },
  
    trust: [
      "אחריות מלאה מקצה לקצה",
      "חשיבה פרודקשנית",
      "לקוחות אמיתיים ומערכות חיות",
      "מומחיות בענן ואוטומציות",
    ],
  
    services: {
        title: "הערך שאני מביא",
        items: [
          {
            title: "פיתוח Backend וארכיטקטורה",
            desc: "בניית היסודות הטכנולוגיים שעליהם העסק שלך עומד.",
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
              "שילוב מודלים של AI (OpenAI/LLMs)",
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
        subtitle: "מערכות שנבנו עם דגש על ביצועים, יציבות וחווית משתמש.",
        items: [
          {
            name: "KASA – פלטפורמת IoT למיחזור",
            tag: "Real-time · חומרה ותוכנה",
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
              github: "https://github.com/RoiMeshulam/Kasa-prototype",
            //   live: "https://kasa-demo.example.com",
            },
          },
          {
            name: "מערכת לוגיסטיקה ואוטומציה",
        tag: "אוטומציה עסקית · אינטגרציות",
        oneLiner:
          "פלטפורמה המנהלת ומנתבת באופן אוטומטי מאות משלוחים יומיים דרך WhatsApp.",
        bullets: ["אינטגרציה עמוקה ל-WhatsApp API", "פענוח תמונה לטקסט (OCR)", "דשבורד ניהול ובקרה"],
            tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
            image: "/projects/deliveries.png",
            links: {
              github: "https://github.com/RoiMeshulam/DeliveriesProject",
            //   live: "https://deliveries.example.com",
            },
          },
          {
            name: "HrBusterAI",
            tag: "AI · HR Tech",
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
            name: "MelamedLaw – פורטל לקוחות מאובטח",
            tag: "FinTech · אבטחת מידע",
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
        "ניתוח עמוק של הצורך העסקי",
        "תכנון ארכיטקטורה יציבה",
        "פיתוח בסטנדרט Production",
        "מסירה, הטמעה ותמיכה",
      ],
      note: "בלי סיבוכים מיותרים. קוד נקי שפותר בעיות אמיתיות.",
    },
  
    contact: {
      title: "בואו נבנה משהו אמיתי",
      desc: "יש לכם פרויקט? צריכים Backend, אוטומציה או מוצר שלם?",
      name: "שם",
      phone: "טלפון",
      phonePlaceholder: "05X-XXXXXXX",
      note: "זמין לפרויקטים חדשים. מענה תוך 24 שעות.",
      email: "אימייל",
      message: "ספרו לי בקצרה על הפרויקט",
      send: "שליחה",
      success: "תודה! אחזור אליכם בהקדם.",
      sending: "שולח...",
      error: "אירעה שגיאה. נסה שוב.",
    },
  
    footer: "MeshulamDev · Backend · Real-Time · אוטומציות · Cloud",
  };
  