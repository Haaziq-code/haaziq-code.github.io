type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Haaziq Aamir — 3D Portfolio",
    fullName: "Haaziq Aamir",
    email: "Haaziq.aamir8@gmail.com",
  },
  hero: {
    name: "Haaziq Aamir",
    p: ["System Engineer @ University of Guelph"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a second-year system engineer at the University of Guelph. I build robots,
      full-stack web apps, and AI tools. At Chartwell Retirement Residences I
      streamlined budget reporting with PowerShell and Excel automations (70% manual work saved),
      and at ConcelConnect I improved UI/UX and added features, increasing user engagement by 20%.
      Outside internships I built FeedMe (group dining via Yelp & Gemini APIs),
      Trender (room style recommender using Qloo API),
      ESV: Endangered Species Visualizer (React/Tailwind, Mapbox, 3D animal models),
      brainrotAI (slang-fluent chat bot), TutorAI, a University Management System (JavaFX) and several robotics projects (self-driving line follower, obstacle-avoidance wheelchair, ping-pong launcher).`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
