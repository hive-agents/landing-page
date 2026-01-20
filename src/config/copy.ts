export interface CopyVariant {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  problem: {
    headline: string;
    body: string;
  };
  solution: {
    headline: string;
    features: string[];
  };
  twoOptions: {
    headline: string;
    managed: {
      title: string;
      subtitle: string;
      features: string[];
    };
    selfHosted: {
      title: string;
      subtitle: string;
      features: string[];
    };
  };
  howItWorks: {
    headline: string;
    managed: { step: string; description: string }[];
    selfHosted: { step: string; description: string }[];
  };
  capabilities: {
    headline: string;
    subheadline: string;
    features: { title: string; description: string }[];
  };
  whoItsFor: {
    headline: string;
    personas: { title: string; description: string }[];
  };
  faq: {
    headline: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    cta: string;
  };
}

export const copyVariants: Record<string, CopyVariant> = {
  v2: {
    hero: {
      headline: "Get your own AI agent. No setup required.",
      subheadline: "A personal server for your AI agents—ready to use in minutes. Run persistent processes, share files across sessions, and deploy webapps without the infrastructure headaches.",
      cta: "Join the waitlist"
    },
    problem: {
      headline: "Setting up agents shouldn't require a CS degree",
      body: "You've got an AI agent that could change how you work. But instead of using it, you're debugging Docker configs, wrestling with cloud permissions, and wondering why your files disappeared between sessions. The barrier between 'I have an agent' and 'I'm using an agent' is way too high."
    },
    solution: {
      headline: "One place for all of it",
      features: [
        "Run processes persistently—your agents don't stop when you close your laptop",
        "Shared files that survive across sessions and agent restarts",
        "Deploy webapps and services your agents create",
        "Works with Claude Code, Cursor, Windsurf, and any MCP-compatible agent",
        "Connect external tools via MCP for expanded capabilities"
      ]
    },
    twoOptions: {
      headline: "Your infrastructure, your rules",
      managed: {
        title: "Managed (apiary)",
        subtitle: "We handle everything",
        features: [
          "One-click setup",
          "Automatic updates & security",
          "24/7 monitoring",
          "Pay-as-you-go pricing"
        ]
      },
      selfHosted: {
        title: "Self-hosted (hive-core)",
        subtitle: "Full control on your infrastructure",
        features: [
          "Run on any cloud or local machine",
          "Complete data ownership",
          "Open source",
          "Free forever"
        ]
      }
    },
    howItWorks: {
      headline: "Running in minutes",
      managed: [
        { step: "Sign up", description: "Create an account and connect your agent" },
        { step: "Configure", description: "Choose your resources and preferences" },
        { step: "Go", description: "Your agent is live and running" }
      ],
      selfHosted: [
        { step: "Clone", description: "Get hive-core from GitHub" },
        { step: "Deploy", description: "Run on your preferred infrastructure" },
        { step: "Connect", description: "Point your agents to your hive" }
      ]
    },
    capabilities: {
      headline: "A launchpad, not just a folder",
      subheadline: "Everything your agents need to go from idea to running application",
      features: [
        { title: "Run any framework", description: "Node, Python, Go, Rust—whatever your agent builds, hive runs it" },
        { title: "Deploy webapps", description: "Agents can create and deploy web applications that persist and scale" },
        { title: "Persistent storage", description: "Files, databases, and state that survive restarts and session changes" },
        { title: "Network access", description: "Your agents can reach external APIs and services when needed" },
        { title: "MCP integration", description: "Connect to any MCP-compatible tool for expanded capabilities" },
        { title: "Secure by default", description: "Sandboxed execution with proper isolation between workloads" }
      ]
    },
    whoItsFor: {
      headline: "Built for anyone who wants an AI agent",
      personas: [
        { title: "Developers", description: "Skip the infrastructure setup. Focus on what your agents actually do, not where they run." },
        { title: "Teams", description: "Share agent environments across your team. Consistent tooling, shared files, collaborative debugging." },
        { title: "Hobbyists", description: "Experiment with AI agents without a cloud computing degree. Just connect and start building." }
      ]
    },
    faq: {
      headline: "Questions",
      items: [
        { question: "What agents work with hive?", answer: "Any MCP-compatible agent including Claude Code, Cursor, Windsurf, and others. If it speaks MCP, it works with hive." },
        { question: "Is hive-core really free?", answer: "Yes. Hive-core is open source and free forever. You pay only for the infrastructure you run it on." },
        { question: "How is this different from just using a VPS?", answer: "Hive handles the boring parts—persistent processes, file management, webapp deployment, MCP integration—so you can focus on your agents, not your infrastructure." },
        { question: "What about security?", answer: "All workloads run in isolated containers. The managed service includes automatic security updates and monitoring. Self-hosted gives you full control over your security posture." },
        { question: "Can I migrate between managed and self-hosted?", answer: "Yes. Your agent configurations and data are portable. Move between managed and self-hosted whenever you want." }
      ]
    },
    finalCta: {
      headline: "Stop setting up. Start using.",
      subheadline: "Join the waitlist for early access to hive.",
      cta: "Join the waitlist"
    }
  },
  v3: {
    hero: {
      headline: "Your agents. Your hive. Your rules.",
      subheadline: "A home base for your AI agents—where they can run, persist, and build without limits. Your personal cloud, designed for AI-first workflows.",
      cta: "Join the colony"
    },
    problem: {
      headline: "AI agents deserve better infrastructure",
      body: "Your agents are capable of incredible things. But they're stuck in temporary sessions, losing context, unable to persist their work. Every time you close your laptop, they start from scratch. There has to be a better way."
    },
    solution: {
      headline: "Give your agents a permanent home",
      features: [
        "Persistent runtime—agents keep working even when you're away",
        "Shared memory across all sessions and interactions",
        "Full-stack deployment for apps your agents create",
        "Universal MCP support for any compatible agent",
        "Extensible through external tool integrations"
      ]
    },
    twoOptions: {
      headline: "Choose your path",
      managed: {
        title: "Apiary (Managed)",
        subtitle: "Zero maintenance, instant setup",
        features: [
          "Deploy in seconds",
          "Auto-scaling resources",
          "Enterprise security",
          "Simple pricing"
        ]
      },
      selfHosted: {
        title: "Hive-core (Self-hosted)",
        subtitle: "Maximum control, no limits",
        features: [
          "Any infrastructure",
          "Air-gapped option",
          "MIT licensed",
          "Community supported"
        ]
      }
    },
    howItWorks: {
      headline: "From zero to running",
      managed: [
        { step: "Join", description: "Create your hive in the cloud" },
        { step: "Connect", description: "Link your favorite agent" },
        { step: "Build", description: "Let your agents do their thing" }
      ],
      selfHosted: [
        { step: "Install", description: "One command deployment" },
        { step: "Configure", description: "Set up your environment" },
        { step: "Launch", description: "Start building immediately" }
      ]
    },
    capabilities: {
      headline: "More than infrastructure",
      subheadline: "A complete platform for AI-native development",
      features: [
        { title: "Polyglot runtime", description: "Support for every major language and framework out of the box" },
        { title: "App deployment", description: "Full webapp hosting with automatic SSL and routing" },
        { title: "Durable storage", description: "Data that persists, syncs, and scales with your needs" },
        { title: "External connectivity", description: "Secure access to the broader internet and APIs" },
        { title: "Tool ecosystem", description: "Rich MCP marketplace for extended functionality" },
        { title: "Isolation first", description: "Strong security boundaries between all workloads" }
      ]
    },
    whoItsFor: {
      headline: "For builders, by builders",
      personas: [
        { title: "Solo developers", description: "Your personal AI infrastructure. No DevOps required." },
        { title: "Startups", description: "Move fast with AI. Ship features your competitors can't match." },
        { title: "Curious minds", description: "Explore what's possible when AI agents have a real home." }
      ]
    },
    faq: {
      headline: "FAQ",
      items: [
        { question: "Which AI agents are supported?", answer: "All MCP-compatible agents work seamlessly. This includes Claude Code, Cursor, Windsurf, and the growing MCP ecosystem." },
        { question: "What's the catch with hive-core?", answer: "No catch. It's MIT licensed, fully open source, and free to use forever. The managed service is how we sustain development." },
        { question: "Why not just use AWS/GCP/Azure?", answer: "You could. But you'd spend weeks on setup that hive handles in minutes. We're purpose-built for AI agents." },
        { question: "How do you handle data security?", answer: "Container isolation, encrypted storage, and regular security audits. Self-hosted users have complete control over their security configuration." },
        { question: "Can I start managed and move to self-hosted?", answer: "Absolutely. Full data portability is a core design principle." }
      ]
    },
    finalCta: {
      headline: "Ready to give your agents a home?",
      subheadline: "Be among the first to experience hive.",
      cta: "Join the colony"
    }
  }
};

export const defaultVariant = 'v2';
