export const personalInfo = {
  name: "Abdalrhman Mohmed",
  title: "Flutter Developer",
  location: "Egypt",
  tagline: "I build cross-platform mobile apps with Flutter: clean architecture, smooth interfaces, and code that stays easy to change.",
  email: "abdalrhmanmohmedfarouk@gmail.com",
  phone: "+20 155 116 7826",
  phoneDisplay: "01551167826",
  linkedin: "https://www.linkedin.com/in/abdalrhmanmohmedmobildev/",
  github: "https://github.com/AbdalrhmanMohmedFarouk",
  cvPath: "assets/CV.pdf",
  stats: [
    { number: "10+", label: "Projects Built" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Clean Code & BLoC" }
  ]
};

export const aboutHighlights = [
  {
    title: "Clean Architecture & BLoC",
    desc: "Separation of concerns with clean data, domain, and presentation layers for robust, testable apps.",
    tags: ["BLoC", "Cubit", "Repository Pattern", "Dependency Injection", "GetIt"]
  },
  {
    title: "REST APIs & Networking",
    desc: "Seamless integration with backend services using Dio/Http, caching, error interceptors, and JSON serialization.",
    tags: ["Dio", "Retrofit", "REST API", "Offline Caching", "Hive / SharedPref"]
  },
  {
    title: "Pixel-Perfect Responsive UI",
    desc: "Smooth 60/120 FPS animations, adaptive layouts, light/dark themes, and intuitive user experiences.",
    tags: ["Custom Painters", "Hero Animations", "Responsive Layout", "Material 3"]
  }
];

export const projects = [
  {
    id: "tasky",
    num: "01",
    type: "Task Management App",
    title: "Tasky",
    desc: "A sleek, feature-rich task and project management mobile application built with Flutter. Helps users organize daily routines, track deadlines, and manage tasks with priority tags, real-time sync, and smooth animations.",
    features: [
      "Task creation, categorization, and priority scheduling",
      "Clean Architecture with BLoC state management",
      "Offline-first architecture with local persistence",
      "Intuitive dark mode UI with fluid touch feedback"
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "Hive"],
    github: "https://github.com/AbdalrhmanMohmedFarouk",
    screenshots: [
      "/images/tasky-1.jpg",
      "/images/tasky-2.jpg",
      "/images/tasky-3.jpg",
      "/images/tasky-4.jpg"
    ]
  },
  {
    id: "newst",
    num: "02",
    type: "News & Media App",
    title: "NewsT",
    desc: "A modern breaking-news reader app delivering live headlines, categorized feeds, and bookmarking. Designed for seamless reading with custom article views, search, and instant updates.",
    features: [
      "Real-time news feeds across diverse categories and regions",
      "Instant search with debouncing and keyword filtering",
      "Offline bookmarking and reading list support",
      "Elegant typography and smooth card transitions"
    ],
    tech: ["Flutter", "REST API", "Dio", "State Management", "Shared Preferences"],
    github: "https://github.com/AbdalrhmanMohmedFarouk",
    screenshots: [
      "/images/newst-1.jpg",
      "/images/newst-2.jpg",
      "/images/newst-3.jpg",
      "/images/newst-4.jpg"
    ]
  },
  {
    id: "moovy",
    num: "03",
    type: "Movies & Entertainment App",
    title: "MooVy",
    desc: "A cinema discovery platform showcasing trending movies, cast details, trailers, and ratings. Features immersive poster galleries, watchlist management, and rich media details.",
    features: [
      "Dynamic movie discovery: trending, top rated, and upcoming",
      "Detailed film pages with cast, ratings, and video trailers",
      "Personalized watchlist and favorites stored locally",
      "Dynamic gradients adapting to movie poster artwork"
    ],
    tech: ["Flutter", "TMDB API", "BLoC", "CachedNetworkImage", "Clean Architecture"],
    github: "https://github.com/AbdalrhmanMohmedFarouk",
    screenshots: [
      "/images/moovy-1.jpg",
      "/images/moovy-2.jpg",
      "/images/moovy-3.jpg",
      "/images/moovy-4.jpg"
    ]
  }
];

export const skillsData = [
  {
    category: "Core & Frameworks",
    skills: ["Flutter", "Dart", "Android (Java/Kotlin Basics)", "iOS (Swift Basics)", "Cross-Platform"]
  },
  {
    category: "State Management",
    skills: ["BLoC", "Cubit", "Provider", "Riverpod (familiar)", "Stateful Lifecycle"]
  },
  {
    category: "Architecture & Patterns",
    skills: ["Clean Architecture", "MVVM", "Repository Pattern", "SOLID Principles", "OOP"]
  },
  {
    category: "Networking & APIs",
    skills: ["RESTful APIs", "Dio", "HTTP", "JSON Serialization", "Interceptor Handling", "WebSocket"]
  },
  {
    category: "Local Storage & Databases",
    skills: ["Hive", "SQLite / sqflite", "SharedPreferences", "Offline Sync"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git & GitHub", "Postman", "Android Studio", "VS Code", "Figma to Flutter", "CI/CD"]
  }
];
