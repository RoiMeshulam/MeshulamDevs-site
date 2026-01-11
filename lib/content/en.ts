export const en = {
    nav: { services: "Services", projects: "Projects", contact: "Contact" },

    hero: {
        title: "Robust Backend & Automation Architecture",
        subtitle: "Scalable Solutions • Real-Time Systems • Cloud Infrastructure",
        desc:
            "Transforming complex business logic into reliable, production-grade systems. Specializing in high-performance APIs, automation pipelines, and end-to-end product delivery.",
        ctaPrimary: "Discuss Your Project",
        ctaSecondary: "Explore Portfolio",
    },

    trust: [
        "End-to-end ownership",
        "Production mindset",
        "Real clients & real systems",
        "Cloud & automation expertise",
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
                    "LLM & AI Agent Integration",
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
        subtitle: "A selection of mission-critical systems and automated solutions.",
        items: [
            {
                name: "KASA – IoT Recycling Platform",
                tag: "Real-time · IoT · Full System",
                oneLiner: "A comprehensive real-time ecosystem connecting users, smart machines, and cloud services.",
                bullets: [
                    "Dual React Native Applications",
                    "Bi-directional WebSocket Communication",
                    "Robust State Management",
                    "Scalable Cloud Infrastructure",
                ],
                tech: ["React Native", "Node.js", "Socket.IO", "Firebase"],
                image: "/projects/kasa.png",
                links: {
                    github: "https://github.com/RoiMeshulam/Kasa-prototype",
                    //   live: "https://kasa-demo.example.com",
                },
            },
            {
                name: "Deliveries Operations System",
                tag: "Automation · Logistic",
                oneLiner:
                    "An automated logistics platform orchestrating 100+ daily deliveries via WhatsApp integration.",
                bullets: ["WhatsApp API Integration", "Intelligent OCR Pipelines", "Centralized Backend Dashboard"],
                tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
                image: "/projects/deliveries.png",
                links: {
                    github: "https://github.com/RoiMeshulam/DeliveriesProject",
                    //   live: "https://deliveries.example.com",
                },
            },
            {
                name: "HrBusterAI",
                tag: "AI Agents · HR Tech",
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
                name: "MelamedLaw Client Portal",
                tag: "FinTech · Secure Portal",
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
        note: "Clean code. Scalable architecture. Business results.",
    },

    contact: {
        title: "Ready to Scale?",
        phone: "Phone",
        phonePlaceholder: "+972 50-123-4567",
        note: "Response within 24 hours guaranteed.",
        desc: "Looking for a partner to build your next system? Let's talk technical.",
        name: "Name",
        email: "Email",
        message: "Tell me about your project",
        send: "Send message",
        success: "Received. I'll be in touch shortly.",
        sending: "Transmitting...",
        error: "Transmission failed. Please retry.",
    },

    footer: "MeshulamDev · Backend · Real-Time · Automation · Cloud",
};
