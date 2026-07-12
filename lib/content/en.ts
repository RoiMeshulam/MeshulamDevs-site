export const en = {
    nav: { services: "Expertise", projects: "Projects", contact: "Contact" },

    hero: {
        title: "Software Engineer — Real-Time & AI-Integrated Systems",
        subtitle: "Node.js • React • React Native • Event-Driven Architecture",
        desc:
            "I'm Roi Meshulam, a software engineer at OMW building production delivery systems. I also take on select freelance projects where I own the system end to end.",
        ctaPrimary: "Get in Touch",
        ctaSecondary: "See My Work",
    },

    trust: [
        "Software Engineer @ OMW",
        "Production systems, not demos",
        "Freelance projects on the side",
        "AI & automation integration",
    ],

    services: {
        title: "Technical Expertise",
        items: [
            {
                title: "Backend Engineering",
                desc:
                    "Architecting secure and scalable server-side systems designed for high availability.",
                bullets: [
                    "Advanced REST API Architecture",
                    "Secure Authentication (OAuth/JWT)",
                    "Complex Database Modeling (SQL/NoSQL)",
                    "CI/CD Pipelines & Cloud Deployment",
                ],
            },
            {
                title: "Real-Time Communication",
                desc:
                    "Building synchronized systems that deliver data instantly across platforms.",
                bullets: [
                    "WebSocket Infrastructure",
                    "Event-Driven Architecture",
                    "Async Processing & Queues",
                    "High-Volume Data Ingestion",
                ],
            },
            {
                title: "Workflow Automation",
                desc:
                    "Optimizing operational efficiency through intelligent integration and AI.",
                bullets: [
                    "Custom Automation Workflows (n8n)",
                    "LLM & Agent Integration (MCP)",
                    "Internal Tooling & Admin Panels",
                    "Business Intelligence Systems",
                ],
            },
            {
                title: "End-to-End Product Dev",
                desc:
                    "Delivering complete digital products from architectural design to deployment.",
                bullets: [
                    "Cross-Platform Mobile & Web Apps",
                    "React & React Native Ecosystem",
                    "Full Infrastructure Setup",
                    "Production Monitoring & Maintenance",
                ],
            },
        ],
    },

    projects: {
        title: "Selected Projects",
        subtitle: "A selection of systems I've designed and shipped, at work and on my own time.",
        items: [
            {
                name: "KASA – IoT Recycling Platform",
                tag: "Freelance · Real-time · IoT",
                oneLiner: "A comprehensive real-time ecosystem connecting users, smart machines, and cloud services.",
                bullets: [
                    "Dual React Native Applications (User + Kiosk)",
                    "Sub-1.5s End-to-End Session Flow",
                    "60s Reconnect Grace Period on Disconnect",
                    "100% Financial Integrity via Atomic Transactions",
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
                tag: "Personal Project · AI Agents · HR Tech",
                oneLiner: "Leveraging AI to automate candidate screening and application management workflows.",
                bullets: ["Autonomous Workflows", "OpenAI Logic Integration", "Data Processing at Scale"],
                tech: ["n8n", "OpenAI API", "Google Sheets", "Node.js"],
                image: "/projects/hrbuster.png",
                links: {
                    //   github: "https://github.com/your-username/hrbusterai",
                    //   live: "https://hrbuster.example.com",
                },
            },
            {
                name: "Deliveries Operations System",
                tag: "Personal Project · Automation · Logistics",
                oneLiner:
                    "An earlier automated logistics platform that organized deliveries in real time across 13 WhatsApp business groups.",
                bullets: ["WhatsApp Integration Across 13 Business Groups", "AI-Powered Image Analysis (Azure Computer Vision)", "Centralized Backend Dashboard"],
                tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
                image: "/projects/deliveries.png",
                links: {
                    github: "https://github.com/RoiMeshulam/DeliveriesProject",
                    //   live: "https://deliveries.example.com",
                },
            },
            {
                name: "MelamedLaw Client Portal",
                tag: "Student Position · FinTech · Secure Portal",
                oneLiner:
                    "A secure client-facing portal ensuring data privacy and seamless document access.",
                bullets: [
                    "Secure React Dashboard",
                    "Role-Based Access Control",
                    "Complex Data Relationships",
                    "Full Stack Implementation",
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
        title: "My Process",
        steps: [
            "Analyze Core Requirements",
            "Architect Scalable Solutions",
            "Develop for Production",
            "Deploy & Monitor",
        ],
        note: "Clean code. Scalable architecture. Real outcomes.",
    },

    contact: {
        title: "Let's Talk",
        phone: "Phone",
        phonePlaceholder: "+972 50-123-4567",
        note: "I'll get back to you soon.",
        desc: "Have an interesting project, or want to talk shop about backend and AI systems? I'd love to hear from you.",
        name: "Name",
        email: "Email",
        message: "Tell me about your project",
        send: "Send message",
        success: "Received. I'll be in touch shortly.",
        sending: "Transmitting...",
        error: "Transmission failed. Please retry.",
    },

    footer: "Roi Meshulam · Software Engineer · Node.js · React · AI Integration",
};
