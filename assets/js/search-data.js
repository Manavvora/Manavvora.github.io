// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-received-the-uiuc-aerospace-engineering-department-fellowship",
          title: 'Received the UIUC Aerospace Engineering Department Fellowship.',
          description: "",
          section: "News",},{id: "news-welfare-maximization-algorithm-for-solving-budget-constrained-multi-component-pomdps-was-accepted-in-ieee-control-systems-letters-and-selected-for-presentation-at-cdc-2023",
          title: 'Welfare Maximization Algorithm for Solving Budget-Constrained Multi-Component POMDPs was accepted in IEEE Control...',
          description: "",
          section: "News",},{id: "news-received-an-ieee-cdc-2023-student-travel-award",
          title: 'Received an IEEE CDC 2023 Student Travel Award.',
          description: "",
          section: "News",},{id: "news-assured-collision-avoidance-for-learned-controllers-a-case-study-of-acas-xu-was-accepted-at-aiaa-scitech-2024",
          title: 'Assured Collision Avoidance for Learned Controllers: A Case Study of ACAS Xu was...',
          description: "",
          section: "News",},{id: "news-comtraq-mpc-was-accepted-at-iros-2024-for-an-oral-presentation",
          title: 'ComTraQ-MPC was accepted at IROS 2024 for an oral presentation.',
          description: "",
          section: "News",},{id: "news-cleared-the-ph-d-qualifying-examination",
          title: 'Cleared the Ph.D. Qualifying Examination.',
          description: "",
          section: "News",},{id: "news-belief-conditioned-one-step-diffusion-was-accepted-to-corl-2025-as-an-oral-presentation-top-5",
          title: 'Belief-Conditioned One-Step Diffusion was accepted to CoRL 2025 as an oral presentation (top...',
          description: "",
          section: "News",},{id: "news-joined-rivian-as-a-machine-learning-intern",
          title: 'Joined Rivian as a Machine Learning Intern.',
          description: "",
          section: "News",},{id: "news-motion-planning-and-control-with-unknown-nonlinear-dynamics-through-predicted-reachability-was-published-at-iros-2025",
          title: 'Motion Planning and Control with Unknown Nonlinear Dynamics through Predicted Reachability was published...',
          description: "",
          section: "News",},{id: "news-capacity-aware-planning-and-scheduling-in-budget-constrained-multi-agent-mdps-was-published-in-ieee-robotics-and-automation-letters",
          title: 'Capacity-Aware Planning and Scheduling in Budget-Constrained Multi-Agent MDPs was published in IEEE Robotics...',
          description: "",
          section: "News",},{id: "news-presented-research-at-the-office-of-naval-research-annual-review-meeting-at-iowa-state-university",
          title: 'Presented research at the Office of Naval Research Annual Review Meeting at Iowa...',
          description: "",
          section: "News",},{id: "news-uncertia-placed-third-at-the-2026-cozad-new-venture-challenge-securing-125k-in-funding-and-prizes-plus-5k-in-cooley-legal-support",
          title: 'UncertIA placed third at the 2026 Cozad New Venture Challenge, securing $125K in...',
          description: "",
          section: "News",},{id: "news-joined-nokia-bell-labs-as-an-ml-ai-research-intern",
          title: 'Joined Nokia Bell Labs as an ML/AI Research Intern.',
          description: "",
          section: "News",},{id: "news-solving-truly-massive-budgeted-monotonic-pomdps-with-oracle-guided-meta-reinforcement-learning-was-published-in-transactions-on-machine-learning-research",
          title: 'Solving Truly Massive Budgeted Monotonic POMDPs with Oracle-Guided Meta-Reinforcement Learning was published in...',
          description: "",
          section: "News",},{id: "news-virtual-force-based-routing-of-modular-agents-on-a-graph-was-published-at-ieee-ccta-2026",
          title: 'Virtual Force-Based Routing of Modular Agents on a Graph was published at IEEE...',
          description: "",
          section: "News",},{id: "news-presented-scout-at-rlc-2026-as-an-oral-presentation",
          title: 'Presented SCoUT at RLC 2026 as an oral presentation.',
          description: "",
          section: "News",},{id: "projects-deep-rl-for-intelligent-traffic-light-control",
          title: 'Deep RL for Intelligent Traffic Light Control',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-rl-based-control-of-a-lunar-lander",
          title: 'RL-based Control of a Lunar Lander',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-reachability-based-risk-aware-planner",
          title: 'Reachability Based Risk-Aware Planner',
          description: "A path planning algorithm that generates safe trajectories by minimizing risk around obstacles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-vision-based-spacecraft-trajectory-estimation-using-structure-from-motion",
          title: 'Vision-based Spacecraft Trajectory Estimation Using Structure from Motion',
          description: "3D reconstruction of asteroid Bennu&#39;s surface and spacecraft trajectory estimation using SfM techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-ros2-maze-solving-and-mapping",
          title: 'ROS2 Maze Solving and Mapping',
          description: "ROS2-based course project on localization, navigation, and path planning for a differential drive robot in a maze.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6B%76%6F%72%61%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Manavvora", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/manav-vora-10327a185", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hr48LoAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
