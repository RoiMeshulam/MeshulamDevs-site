export const en = {
    nav: { services: "Services", projects: "Projects", contact: "Contact" },
  
    hero: {
      title: "I build real-world systems",
      subtitle: "Backend, Real-Time, Automation & Cloud",
      desc:
        "APIs, real-time apps, automation pipelines and production-ready systems for startups, businesses and internal tools.",
      ctaPrimary: "Let’s work together",
      ctaSecondary: "View projects",
    },
  
    trust: [
      "End-to-end ownership",
      "Production mindset",
      "Real clients & real systems",
      "Cloud & automation expertise",
    ],
  
    services: {
      title: "What I help you build",
      items: [
        {
          title: "Backend & Cloud Systems",
          desc:
            "Design and development of reliable backend systems built to scale and operate in production.",
          bullets: [
            "REST APIs & system architecture",
            "Authentication & security flows",
            "Relational & NoSQL databases",
            "Cloud deployment & CI/CD",
          ],
        },
        {
          title: "Real-Time & Integrations",
          desc:
            "When systems need to communicate fast and reliably across services and platforms.",
          bullets: [
            "WebSockets & real-time flows",
            "Webhooks & external APIs",
            "Async workers & background jobs",
            "OCR & data ingestion pipelines",
          ],
        },
        {
          title: "Automation & AI",
          desc:
            "Reduce manual work and unlock leverage using automation and AI-driven workflows.",
          bullets: [
            "Business process automation (n8n)",
            "AI-powered workflows (OpenAI APIs)",
            "Internal tools & dashboards",
            "Data-driven decision systems",
          ],
        },
        {
          title: "Full-Stack Products",
          desc:
            "From idea to production — full end-to-end ownership of web and mobile products.",
          bullets: [
            "Web & mobile applications",
            "React & React Native",
            "Backend, frontend & infrastructure",
            "Complete delivery ownership",
          ],
        },
      ],
    },
  
    projects: {
        title: "Selected Projects",
        subtitle: "Real-world systems with production mindset and end-to-end ownership.",
        items: [
          {
            name: "KASA – Smart Recycling System",
            tag: "Featured · Real-time · Client",
            oneLiner: "Real-time platform connecting users, machines and backend services.",
            bullets: [
              "React Native apps (User & Machine)",
              "WebSocket-based real-time communication",
              "Backend session & state management",
              "Cloud infrastructure & databases",
            ],
            tech: ["React Native", "Node.js", "Socket.IO", "Firebase"],
            image: "/projects/kasa.png",
            links: {
              github: "https://github.com/RoiMeshulam/Kasa-prototype",
            //   live: "https://kasa-demo.example.com",
            },
          },
          {
            name: "Deliveries System",
            tag: "Automation · Integrations",
            oneLiner:
              "Automation platform for managing 100–200 daily deliveries across multiple WhatsApp groups.",
            bullets: ["WhatsApp integrations", "OCR pipelines", "Backend services"],
            tech: ["Node.js", "Express", "PostgreSQL", "Azure Computer Vision"],
            image: "/projects/deliveries.png",
            links: {
              github: "https://github.com/RoiMeshulam/DeliveriesProject",
            //   live: "https://deliveries.example.com",
            },
          },
          {
            name: "HrBusterAI",
            tag: "AI · Automation",
            oneLiner: "AI-powered automation for managing and analyzing job applications.",
            bullets: ["Automation pipelines", "AI integrations", "Scalable design"],
            tech: ["n8n", "OpenAI API", "Google Sheets", "Node.js"],
            image: "/projects/hrbuster.png",
            links: {
            //   github: "https://github.com/your-username/hrbusterai",
            //   live: "https://hrbuster.example.com",
            },
          },
          {
            name: "MelamedLaw – Client Portal (Web + Mobile)",
            tag: "Client · Full-Stack",
            oneLiner:
              "Web app + mobile experience for a law firm client portal: authentication, data layer, and backend APIs.",
            bullets: [
              "React web app (client portal UI)",
              "REST API + authentication flow",
              "Database design & data management",
              "End-to-end ownership (web + server + DB)",
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
      title: "How I work",
      steps: [
        "Understand the real business problem",
        "Design a scalable technical solution",
        "Build production-ready systems",
        "Deliver with ownership and clarity",
      ],
      note: "No buzzwords. No over-engineering. Just systems that work.",
    },
  
    contact: {
      title: "Let’s build something real",
      phone: "Phone",
      phonePlaceholder: "+972 50-123-4567",
      note: "I usually reply within 24 hours.",
      desc: "Have a project in mind? Need backend, automation or a full product?",
      name: "Name",
      email: "Email",
      message: "Tell me about your project",
      send: "Send message",
      success: "Thanks! I’ll get back to you soon.",
      sending: "Sending...",
      error: "Something went wrong. Please try again.",
    },
  
    footer: "MeshulamDev · Backend · Real-Time · Automation · Cloud",
  };
  