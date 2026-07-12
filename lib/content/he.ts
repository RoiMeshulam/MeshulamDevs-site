export const he = {
    nav: { services: "מומחיות", projects: "פרויקטים", contact: "צור קשר" },

    hero: {
        title: "מהנדס תוכנה — מערכות Real-Time ומשולבות AI",
        subtitle: "Node.js · React · React Native · ארכיטקטורת Event-Driven",
        desc:
            "אני רועי משולם, מהנדס תוכנה ב-OMW שבונה מערכות אספקה בפרודקשן. לצד זה אני לוקח פרויקטי פרילנס נבחרים שבהם אני הבעלים של המערכת מקצה לקצה.",
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
                title: "הנדסת Backend",
                desc:
                    "תכנון ארכיטקטורה של מערכות צד-שרת מאובטחות וסקיילביליות, המיועדות לזמינות גבוהה.",
                bullets: [
                    "ארכיטקטורת REST API מתקדמת",
                    "אימות מאובטח (OAuth/JWT)",
                    "מידול מסדי נתונים מורכבים (SQL/NoSQL)",
                    "צנרות CI/CD ופריסה בענן",
                ],
            },
            {
                title: "תקשורת Real-Time",
                desc:
                    "בניית מערכות מסונכרנות שמעבירות נתונים באופן מיידי בין פלטפורמות.",
                bullets: [
                    "תשתית WebSocket",
                    "ארכיטקטורת Event-Driven",
                    "עיבוד אסינכרוני ותורים",
                    "קליטת נתונים בנפח גבוה",
                ],
            },
            {
                title: "אוטומציית תהליכי עבודה",
                desc:
                    "שיפור היעילות התפעולית באמצעות אינטגרציה חכמה ובינה מלאכותית.",
                bullets: [
                    "תהליכי אוטומציה מותאמים אישית (n8n)",
                    "שילוב מודלי שפה וסוכנים (MCP)",
                    "כלים פנימיים ופאנלי ניהול",
                    "מערכות בינה עסקית",
                ],
            },
            {
                title: "פיתוח מוצר מקצה לקצה",
                desc:
                    "מסירת מוצרים דיגיטליים שלמים, מתכנון ארכיטקטוני ועד פריסה.",
                bullets: [
                    "אפליקציות Mobile ו-Web חוצות פלטפורמות",
                    "אקוסיסטם React ו-React Native",
                    "הקמת תשתית מלאה",
                    "ניטור ותחזוקה בסביבת Production",
                ],
            },
        ],
    },

    projects: {
        title: "פרויקטים נבחרים",
        subtitle: "מבחר מערכות שתכננתי ומסרתי, בעבודה ובזמני הפנוי.",
        items: [
            {
                name: "KASA – פלטפורמת IoT למיחזור",
                tag: "פרילנס · Real-time · IoT",
                oneLiner: "מערכת אקולוגית מלאה המחברת בזמן אמת בין משתמשים, מכונות מיחזור חכמות וענן.",
                bullets: [
                    "שתי אפליקציות React Native (משתמש + קיוסק)",
                    "זרימת סשן מקצה לקצה בפחות מ-1.5 שניות",
                    "60 שניות זמן חסד לחיבור מחדש בעת ניתוק",
                    "שלמות פיננסית של 100% באמצעות טרנזקציות אטומיות",
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
                tag: "פרויקט אישי · סוכני AI · HR Tech",
                oneLiner: "שימוש בבינה מלאכותית להפיכת סינון מועמדים וניהול בקשות לתהליך אוטומטי.",
                bullets: ["תהליכי עבודה אוטונומיים", "שילוב לוגיקת OpenAI", "עיבוד נתונים בקנה מידה גדול"],
                tech: ["n8n", "OpenAI API", "Google Sheets", "Node.js"],
                image: "/projects/hrbuster.png",
                links: {
                    //   github: "https://github.com/your-username/hrbusterai",
                    //   live: "https://hrbuster.example.com",
                },
            },
            {
                name: "מערכת תפעול משלוחים",
                tag: "פרויקט אישי · אוטומציה · לוגיסטיקה",
                oneLiner:
                    "פלטפורמת לוגיסטיקה מוקדמת שניהלה משלוחים בזמן אמת על פני 13 קבוצות WhatsApp עסקיות.",
                bullets: ["אינטגרציית WhatsApp על פני 13 קבוצות עסקיות", "ניתוח תמונות מבוסס בינה מלאכותית (Azure Computer Vision)", "דשבורד Backend מרכזי"],
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
                    "פורטל מאובטח ללקוחות המבטיח פרטיות נתונים וגישה חלקה למסמכים.",
                bullets: [
                    "דשבורד React מאובטח",
                    "בקרת גישה מבוססת תפקידים",
                    "קשרי נתונים מורכבים",
                    "מימוש Full Stack",
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
            "ניתוח דרישות הליבה",
            "ארכיטקטורת פתרונות סקיילביליים",
            "פיתוח בסטנדרט Production",
            "פריסה וניטור",
        ],
        note: "קוד נקי. ארכיטקטורה סקיילבילית. תוצאות אמיתיות.",
    },

    contact: {
        title: "בואו נדבר",
        phone: "טלפון",
        phonePlaceholder: "05X-XXXXXXX",
        note: "אחזור אליך בקרוב.",
        desc: "יש לך פרויקט מעניין, או סתם בא לך לדבר על מערכות Backend ו-AI? אשמח לשמוע.",
        name: "שם",
        email: "אימייל",
        message: "ספר לי בקצרה על הפרויקט",
        send: "שליחה",
        success: "תודה! אחזור אליך בהקדם.",
        sending: "שולח...",
        error: "אירעה שגיאה. נסה שוב.",
    },

    footer: "רועי משולם · מהנדס תוכנה · Node.js · React · אינטגרציית AI",
};
