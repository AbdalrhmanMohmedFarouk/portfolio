import profileImg from '../assets/images/profile.jpg';
import tasky1 from '../assets/images/tasky-1.jpg';
import tasky2 from '../assets/images/tasky-2.jpg';
import tasky3 from '../assets/images/tasky-3.jpg';
import tasky4 from '../assets/images/tasky-4.jpg';
import newst1 from '../assets/images/newst-1.jpg';
import newst2 from '../assets/images/newst-2.jpg';
import newst3 from '../assets/images/newst-3.jpg';
import newst4 from '../assets/images/newst-4.jpg';
import moovy1 from '../assets/images/moovy-1.jpg';
import moovy2 from '../assets/images/moovy-2.jpg';
import moovy3 from '../assets/images/moovy-3.jpg';
import moovy4 from '../assets/images/moovy-4.jpg';

export const personalInfo = {
  name: "Abdalrhman Mohmed",
  title: "Flutter Developer",
  location: "Egypt",
  tagline: "I build high-performance, cross-platform mobile apps with Flutter & Dart: clean architecture, fluid 60/120 FPS animations, and scalable state management.",
  email: "abdalrhmanmohmedfarouk@gmail.com",
  phone: "+20 155 116 7826",
  phoneDisplay: "01551167826",
  linkedin: "https://www.linkedin.com/in/abdalrhmanmohmedmobildev/",
  github: "https://github.com/AbdalrhmanMohmedFarouk",
  cvPath: "assets/CV.pdf",
  profileImage: profileImg,
  stats: [
    { number: "10+", label: "Mobile Apps Built" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Clean Code & BLoC" }
  ]
};

export const aboutHighlights = [
  {
    icon: "layers",
    title: "Clean Architecture & BLoC",
    desc: "Strict separation of concerns with Domain, Data, and Presentation layers. Enterprise-grade maintainability with BLoC and Cubit.",
    tags: ["BLoC", "Cubit", "Repository Pattern", "Dependency Injection", "GetIt"]
  },
  {
    icon: "network",
    title: "REST APIs & Offline-First",
    desc: "Robust networking using Dio with custom interceptors, automated token refresh, and persistent offline storage with Hive.",
    tags: ["Dio", "Retrofit", "REST API", "Offline Caching", "Hive / SharedPref"]
  },
  {
    icon: "sparkles",
    title: "Pixel-Perfect Responsive UI",
    desc: "Stunning, adaptive mobile interfaces supporting Dark/Light themes, fluid screen transitions, and custom gesture interactions.",
    tags: ["Custom Painters", "Hero Animations", "Responsive Layout", "Material 3"]
  }
];

export const projects = [
  {
    id: "tasky",
    num: "01",
    category: "Productivity",
    type: "Task Management App",
    title: "Tasky",
    desc: "A sleek, feature-rich task and project management mobile application built with Flutter. Helps users organize daily routines, track deadlines, and manage tasks with priority tags, real-time sync, and smooth animations.",
    features: [
      "Task creation, priority scheduling, and date reminders",
      "Clean Architecture with BLoC state management",
      "Offline-first architecture with local persistence",
      "Intuitive dark mode UI with fluid touch feedback"
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "Hive"],
    github: "https://github.com/AbdalrhmanMohmedFarouk",
    screenshots: [tasky1, tasky2, tasky3, tasky4]
  },
  {
    id: "newst",
    num: "02",
    category: "News & Media",
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
    screenshots: [newst1, newst2, newst3, newst4]
  },
  {
    id: "moovy",
    num: "03",
    category: "Entertainment",
    type: "Movies & Cinema App",
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
    screenshots: [moovy1, moovy2, moovy3, moovy4]
  }
];

export const skillsData = [
  {
    category: "Core & Frameworks",
    badge: "Primary",
    skills: ["Flutter", "Dart", "Android (Java/Kotlin Basics)", "iOS (Swift Basics)", "Cross-Platform"]
  },
  {
    category: "State Management",
    badge: "Expertise",
    skills: ["BLoC", "Cubit", "Provider", "Riverpod (familiar)", "Stateful Lifecycle"]
  },
  {
    category: "Architecture & Patterns",
    badge: "Core",
    skills: ["Clean Architecture", "MVVM", "Repository Pattern", "SOLID Principles", "OOP"]
  },
  {
    category: "Networking & APIs",
    badge: "Backend Integration",
    skills: ["RESTful APIs", "Dio", "HTTP", "JSON Serialization", "Interceptor Handling", "WebSocket"]
  },
  {
    category: "Local Storage & Databases",
    badge: "Persistence",
    skills: ["Hive", "SQLite / sqflite", "SharedPreferences", "Offline Sync"]
  },
  {
    category: "Tools & Workflow",
    badge: "Productivity",
    skills: ["Git & GitHub", "Postman", "Android Studio", "VS Code", "Figma to Flutter", "CI/CD"]
  }
];
