export const he = {
    nav: { services: "שירותים", projects: "פרויקטים", contact: "צור קשר" },
  
    hero: {
      title: "אני בונה מערכות שעובדות בעולם האמיתי",
      subtitle: "Backend · Real-Time · אוטומציות · Cloud",
      desc:
        "פיתוח מערכות backend, אפליקציות בזמן אמת, אוטומציות חכמות ומערכות מוכנות לפרודקשן לעסקים, סטארטאפים וכלים פנימיים.",
      ctaPrimary: "דברו איתי",
      ctaSecondary: "צפו בפרויקטים",
    },
  
    trust: [
      "אחריות מלאה מקצה לקצה",
      "חשיבה פרודקשנית",
      "לקוחות אמיתיים ומערכות חיות",
      "מומחיות בענן ואוטומציות",
    ],
  
    services: {
      title: "מה אני בונה בשבילך",
      items: [
        {
          title: "Backend & Cloud",
          desc: "פיתוח מערכות צד־שרת יציבות, מאובטחות וסקיילביליות.",
          bullets: [
            "פיתוח REST APIs וארכיטקטורה",
            "מנגנוני התחברות ואבטחה",
            "עבודה עם מסדי נתונים",
            "פריסה לענן, Docker ו־CI/CD",
          ],
        },
        {
          title: "Real-Time ואינטגרציות",
          desc: "כשמערכות צריכות לתקשר בזמן אמת ובצורה אמינה.",
          bullets: [
            "WebSockets וזרימות בזמן אמת",
            "Webhooks ואינטגרציות חיצוניות",
            "עבודות רקע ו־Async workers",
            "OCR וקליטת נתונים",
          ],
        },
        {
          title: "אוטומציות ו־AI",
          desc: "פחות עבודה ידנית, יותר מינוף עסקי.",
          bullets: [
            "אוטומציות תהליכים (n8n)",
            "תהליכים מבוססי AI (OpenAI)",
            "כלים פנימיים ודשבורדים",
            "מערכות החלטה מבוססות נתונים",
          ],
        },
        {
          title: "מוצרי Full Stack",
          desc: "מהרעיון ועד מערכת חיה בפרודקשן.",
          bullets: [
            "אפליקציות Web ו־Mobile",
            "React ו־React Native",
            "Backend, Frontend ותשתיות",
            "אחריות מלאה על המוצר",
          ],
        },
      ],
    },
  
    projects: {
        title: "פרויקטים נבחרים",
        subtitle: "מערכות אמיתיות עם חשיבה פרודקשנית ובעלות End-to-End.",
        items: [
          {
            name: "KASA – מערכת מיחזור חכמה",
            tag: "מוביל · Real-time · לקוח",
            oneLiner: "פלטפורמה בזמן אמת שמחברת משתמשים, מכונות ושירותי Backend.",
            bullets: [
              "אפליקציות React Native (משתמש + מכונה)",
              "תקשורת בזמן אמת מבוססת WebSocket",
              "ניהול סשנים וסטייט בצד השרת",
              "תשתית ענן ומסדי נתונים",
            ],
            tech: ["React Native", "Node.js", "Socket.IO", "Firebase"],
            image: "/projects/kasa.png",
            links: {
              github: "https://github.com/your-username/kasa",
              live: "https://kasa-demo.example.com",
            },
          },
          {
            name: "Deliveries System",
            tag: "אוטומציות · אינטגרציות",
            oneLiner:
              "פלטפורמת אוטומציה לניהול 100–200 משלוחים ביום במספר קבוצות WhatsApp.",
            bullets: ["אינטגרציות WhatsApp", "Pipeline OCR", "שירותי Backend"],
            tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
            image: "/projects/deliveries.png",
            links: {
              github: "https://github.com/your-username/deliveries-system",
              live: "https://deliveries.example.com",
            },
          },
          {
            name: "HrBusterAI",
            tag: "AI · אוטומציה",
            oneLiner: "אוטומציה מבוססת AI לניהול, ניתוח ומעקב אחר מועמדויות עבודה.",
            bullets: ["פייפליינים לאוטומציה", "אינטגרציות AI", "ארכיטקטורה סקיילבילית"],
            tech: ["n8n", "OpenAI API", "Google Sheets", "Node.js"],
            image: "/projects/hrbuster.png",
            links: {
              github: "https://github.com/your-username/hrbusterai",
              live: "https://hrbuster.example.com",
            },
          },
          {
            name: "MelamedLaw – פורטל לקוח (ווב + מובייל)",
            tag: "לקוח · Full-Stack",
            oneLiner:
              "אפליקציית ווב וחוויית מובייל לפורטל לקוחות למשרד עורכי דין: התחברות, שכבת נתונים ו־API בצד השרת.",
            bullets: [
              "אפליקציית React לווב (פורטל לקוח)",
              "REST API + תהליך Authentication",
              "תכנון DB וניהול נתונים",
              "בעלות End-to-End (ווב + שרת + DB)",
            ],
            tech: ["React", "Node.js", "Express", "PostgreSQL"],
            image: "/projects/melamedlaw.png",
            links: {
              github: "https://github.com/your-username/melamedlaw",
              live: "https://client.melamedlaw.co.il/LoginStack/LoginScreen",
            },
          },
          
        ],
      },
      
  
    how: {
      title: "איך אני עובד",
      steps: [
        "הבנת הבעיה העסקית האמיתית",
        "תכנון פתרון טכנולוגי סקיילבילי",
        "פיתוח מערכת מוכנה לפרודקשן",
        "מסירה עם אחריות ובהירות",
      ],
      note: "בלי באזוורדס. בלי סיבוך מיותר. רק מערכות שעובדות.",
    },
  
    contact: {
      title: "בואו נבנה משהו אמיתי",
      desc: "יש לכם פרויקט? צריכים Backend, אוטומציה או מוצר שלם?",
      name: "שם",
      phone: "טלפון",
      phonePlaceholder: "05X-XXXXXXX",
      note: "בדרך כלל אני חוזר תוך 24 שעות.",
      email: "אימייל",
      message: "ספרו לי בקצרה על הפרויקט",
      send: "שליחה",
      success: "תודה! אחזור אליכם בהקדם.",
      sending: "שולח...",
      error: "אירעה שגיאה. נסה שוב.",
    },
  
    footer: "MeshulamDev · Backend · Real-Time · אוטומציות · Cloud",
  };
  