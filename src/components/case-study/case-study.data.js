export const CaseStudies = {
  othership: {
    hero: {
      eyebrow: "Know about",
      title: "Othership",
      meta: [
        { label: "Role", value: "Lead UX Designer" },
        { label: "Year", value: "2023–2024" },
        { label: "Platform", value: "iOS / Android" },
        { label: "Tools", value: "Figma, Notion" },
      ],
      overviewLabel: "Project Overview —",
      overview:
        "Redesigning the hybrid work experience for distributed teams — connecting people across offices, home environments and coworking spaces through a single, intuitive mobile platform.",
    },

    infoStrip: {
      headline: ["Find colleagues.", "Work anywhere."],
      cols: [
        {
          label: "The Challenge",
          body: "Hybrid teams struggled to coordinate who was in the office, when, and where — leading to missed connections and inefficient use of workspace.",
        },
        {
          label: "The Approach",
          body: "Research-driven design with weekly sprint cycles. Continuous user testing with remote and in-office employees across 5 organisations.",
        },
        {
          label: "The Outcome",
          body: "A streamlined planner-first experience with real-time colleague visibility, floor maps, and smart scheduling — reducing coordination overhead by 40%.",
        },
      ],
    },

    metrics: {
      title: "Numbers that moved — and held.",
      sub: "Outcomes measured against a baseline instrumented in week one. Each figure tracked for 90 days post-launch across active users.",
      items: [
        {
          label: "Booking Conversion",
          value: "+62",
          unit: "%",
          desc: "Lift in discovery-to-confirmed booking after consolidating the flow into three taps.",
        },
        {
          label: "Time to First Booking",
          value: "−41",
          unit: "%",
          desc: "Median time for new users to confirm their first desk, down from 6m 12s to 3m 38s.",
        },
        {
          label: "Weekly Active Teams",
          value: "3.4",
          unit: "×",
          desc: "Growth in teams coordinating office days together within one quarter of rollout.",
        },
      ],
    },

    features: {
      eyebrow: "Key Features",
      title: ["Built around", "your workday"],
      items: [
        {
          number: "01",
          name: "Onboarding in seconds",
          desc: "First-time users connect to their organisation and choose their working style in under 60 seconds. No configuration walls, no enterprise setup friction.",
          screen: { type: "image", src: "/case-study/othership-1.png" },
        },
        {
          number: "02",
          name: "Live colleague dashboard",
          desc: "See exactly where every team member plans to be this week — office, home, coworking — at a glance. The planner updates in real time as people set their days.",
          screen: {
            type: "video",
            src: "/case-study/item-video.mp4",
          },
        },
        {
          number: "03",
          name: "One-tap workspace booking",
          desc: "Reserve a desk, meeting room or coworking space directly from the schedule view. Smart suggestions surface the spots most used by your closest colleagues.",
          screen: { type: "image", src: "/case-study/othership-2.png" },
        },
        {
          number: "04",
          name: "Interest-based discovery",
          desc: "Filter colleagues by skill, interest or location to find the right person for an impromptu collaboration. Tags and cross-team visibility make serendipity intentional.",
          screen: {
            type: "video",
            src: "/case-study/item-video.mp4",
          },
        },
      ],
    },

    process: {
      label: "Design Process",
      heading: "How we got there",
      steps: [
        {
          num: "01",
          phase: "Discover",
          name: "User Research & Competitive Analysis",
          desc: "Conducted 18 interviews with hybrid workers across 5 industries. Mapped pain points around coordination, spontaneity, and workspace waste. Benchmarked 12 competitor apps across flexibility, social features, and booking UX.",
        },
        {
          num: "02",
          phase: "Define",
          name: "Synthesis & Problem Framing",
          desc: 'Distilled 380+ research notes into 6 core themes. Created an experience map revealing 3 critical decision moments in the hybrid workday. Defined the north star: "3 taps to see who\'s in, where, and why it matters."',
        },
        {
          num: "03",
          phase: "Ideate",
          name: "Concept Generation & Prioritisation",
          desc: "Two-day design sprint with stakeholders produced 40+ concepts. Dot-voted to 8 directions, refined to 3 prototype-ready concepts. Planner-first architecture emerged as the clear winner after early testing.",
        },
        {
          num: "04",
          phase: "Design",
          name: "High-Fidelity Prototyping",
          desc: "4 rounds of usability testing with 24 participants across 6 weeks. Iterated on navigation hierarchy, onboarding flow, and the booking confirmation pattern. Accessibility audit completed pre-handoff.",
        },
        {
          num: "05",
          phase: "Deliver",
          name: "Handoff & Impact Measurement",
          desc: "Component library delivered with 240+ documented tokens. Post-launch data showed 73% of users set their week plan on Monday morning — up from 31%. Office pre-booking increased 40% in 8 weeks.",
        },
      ],
    },

    marquee: {
      eyebrow: "A look inside",
      title: "The full product, in motion.",
      sub: "Five screens from the shipped flow — onboarding, planner, schedule edit, colleague dashboard, and discovery.",
      screens: [
        {
          src: "/case-study/othership-1.png",
          alt: "Othership onboarding screen",
        },
        {
          src: "/case-study/othership-2.png",
          alt: "Othership schedule screen",
        },
        {
          src: "/case-study/othership-3.png",
          alt: "Othership edit schedule screen",
        },
        {
          src: "/case-study/othership-4.png",
          alt: "Othership planner dashboard",
        },
        {
          src: "/case-study/othership-5.png",
          alt: "Othership search and filter",
        },
      ],
    },

    footer: { label: "Kanchon Sarker · 2024" },
  },
};
