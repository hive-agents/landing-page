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
  v4: {
    hero: {
      headline: "Your AI agent needs a home.",
      subheadline: "A place to run, persist, and build, without starting over every session.",
      cta: "Join the waitlist"
    },
    problem: {
      headline: "",
      body: ""
    },
    solution: {
      headline: "",
      features: []
    },
    twoOptions: {
      headline: "",
      managed: {
        title: "Managed",
        subtitle: "We handle infrastructure. One-click setup.",
        features: []
      },
      selfHosted: {
        title: "Self-hosted",
        subtitle: "Open source. Run anywhere. Free forever.",
        features: []
      }
    },
    howItWorks: {
      headline: "",
      managed: [],
      selfHosted: []
    },
    capabilities: {
      headline: "",
      subheadline: "",
      features: []
    },
    whoItsFor: {
      headline: "",
      personas: []
    },
    faq: {
      headline: "",
      items: []
    },
    finalCta: {
      headline: "",
      subheadline: "",
      cta: ""
    }
  }
};

export const defaultVariant = 'v4';
export const minimalVariants = ['v4'];
