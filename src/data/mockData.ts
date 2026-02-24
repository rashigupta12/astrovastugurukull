// Mock data for Astrovastu Gurukull clone

export const navCategories = [
  {
    name: "Development",
    subcategories: ["Web Development", "Data Science", "Mobile Development", "Programming Languages", "Game Development", "Database Design", "Software Testing"]
  },
  {
    name: "Business",
    subcategories: ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy", "Operations", "Project Management"]
  },
  {
    name: "Finance & Accounting",
    subcategories: ["Accounting & Bookkeeping", "Compliance", "Cryptocurrency & Blockchain", "Economics", "Finance", "Financial Modeling"]
  },
  {
    name: "IT & Software",
    subcategories: ["IT Certifications", "Network & Security", "Hardware", "Operating Systems", "Other IT & Software"]
  },
  {
    name: "Office Productivity",
    subcategories: ["Microsoft", "Apple", "Google", "SAP", "Oracle", "Other"]
  },
  {
    name: "Personal Development",
    subcategories: ["Personal Transformation", "Personal Productivity", "Leadership", "Career Development", "Parenting & Relationships"]
  },
  {
    name: "Design",
    subcategories: ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D & Animation"]
  },
  {
    name: "Marketing",
    subcategories: ["Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals"]
  },
  {
    name: "Health & Fitness",
    subcategories: ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health"]
  },
  {
    name: "Music",
    subcategories: ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques", "Music Software"]
  }
];

export const heroBanners = [
  {
    id: 1,
    title: "Learning that gets you",
    subtitle: "Skills for your present (and your future). Get started with us.",
    bgColor: "#f7f9fa",
    image: "https://s.udemycdn.com/browse_components/billboard/fallback-banner-image.jpg"
  },
  {
    id: 2,
    title: "Courses from $10.99",
    subtitle: "Level up your skills for today and tomorrow.",
    bgColor: "#f7f9fa",
    image: "https://img-c.udemycdn.com/notices/home_carousel_slide/image/2e0b6e29-a92f-485c-a1fb-a8b266242de3.png"
  },
  {
    id: 3,
    title: "Learn AI with experts",
    subtitle: "Get the skills employers need now and earn a professional certificate.",
    bgColor: "#f7f9fa",
    image: "https://img-c.udemycdn.com/notices/home_carousel_slide/image/a1e5c6ac-9187-4ced-bae9-87626f9de771.png"
  }
];

export const skillTabs = [
  { id: "generative-ai", label: "Generative AI" },
  { id: "data-science", label: "Data Science" },
  { id: "web-development", label: "Web Development" },
  { id: "python", label: "Python" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "java", label: "Java" },
  { id: "it-certifications", label: "IT Certifications" },
  { id: "aws-certification", label: "AWS Certification" }
];

export const skillCourses = {
  "generative-ai": [
    {
      id: 1,
      title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
      instructor: "Julian Melanson, Benza Maman",
      rating: 4.5,
      reviews: 42891,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 38.5,
      lectures: 345,
      level: "All Levels"
    },
    {
      id: 2,
      title: "The Complete AI Guide: Learn AI, Generative AI & More",
      instructor: "Julian Melanson",
      rating: 4.4,
      reviews: 18234,
      price: 12.99,
      originalPrice: 74.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 25,
      lectures: 198,
      level: "Beginner"
    },
    {
      id: 3,
      title: "Generative AI for Business Leaders",
      instructor: "Ravi Kumar, AI Institute",
      rating: 4.6,
      reviews: 8745,
      price: 14.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 12,
      lectures: 88,
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Prompt Engineering for ChatGPT & AI Tools",
      instructor: "Dr. Jules White",
      rating: 4.7,
      reviews: 23456,
      price: 11.99,
      originalPrice: 59.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 18,
      lectures: 145,
      level: "All Levels"
    },
    {
      id: 5,
      title: "LangChain & Vector Databases in Production",
      instructor: "Activeloop, Intel",
      rating: 4.3,
      reviews: 5621,
      price: 13.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 22,
      lectures: 176,
      level: "Advanced"
    }
  ],
  "data-science": [
    {
      id: 6,
      title: "The Data Science Course: Complete Data Science Bootcamp",
      instructor: "365 Careers",
      rating: 4.6,
      reviews: 135421,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 29,
      lectures: 488,
      level: "All Levels"
    },
    {
      id: 7,
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructor: "Jose Portilla",
      rating: 4.6,
      reviews: 112345,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 25,
      lectures: 165,
      level: "Intermediate"
    },
    {
      id: 8,
      title: "Machine Learning A-Z: AI, Python & R",
      instructor: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.5,
      reviews: 178902,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 44,
      lectures: 382,
      level: "All Levels"
    },
    {
      id: 9,
      title: "Statistics for Data Science and Business Analysis",
      instructor: "365 Careers",
      rating: 4.5,
      reviews: 29567,
      price: 11.99,
      originalPrice: 64.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 6,
      lectures: 78,
      level: "Beginner"
    },
    {
      id: 10,
      title: "R Programming A-Z: R For Data Science",
      instructor: "Kirill Eremenko",
      rating: 4.6,
      reviews: 48123,
      price: 12.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 10.5,
      lectures: 80,
      level: "Beginner"
    }
  ],
  "web-development": [
    {
      id: 11,
      title: "The Complete 2024 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: 345678,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 62,
      lectures: 490,
      level: "All Levels"
    },
    {
      id: 12,
      title: "The Web Developer Bootcamp 2024",
      instructor: "Colt Steele",
      rating: 4.7,
      reviews: 267890,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 74,
      lectures: 615,
      level: "All Levels"
    },
    {
      id: 13,
      title: "JavaScript: The Complete Guide 2024",
      instructor: "Maximilian Schwarzmuller",
      rating: 4.6,
      reviews: 45678,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 52,
      lectures: 614,
      level: "All Levels"
    },
    {
      id: 14,
      title: "React - The Complete Guide 2024",
      instructor: "Maximilian Schwarzmuller",
      rating: 4.6,
      reviews: 198765,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 68,
      lectures: 731,
      level: "All Levels"
    },
    {
      id: 15,
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      instructor: "Jonas Schmedtmann",
      rating: 4.7,
      reviews: 23456,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 42,
      lectures: 435,
      level: "All Levels"
    }
  ],
  "python": [
    {
      id: 16,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: 312456,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 58,
      lectures: 636,
      level: "All Levels"
    },
    {
      id: 17,
      title: "Automate the Boring Stuff with Python Programming",
      instructor: "Al Sweigart",
      rating: 4.6,
      reviews: 112345,
      price: 12.99,
      originalPrice: 59.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 9.5,
      lectures: 51,
      level: "Beginner"
    },
    {
      id: 18,
      title: "The Python Mega Course: Build 10 Real World Applications",
      instructor: "Ardit Sulce",
      rating: 4.5,
      reviews: 34567,
      price: 12.99,
      originalPrice: 74.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 32,
      lectures: 282,
      level: "All Levels"
    },
    {
      id: 19,
      title: "Python for Beginners - Learn Python in 1 Hour",
      instructor: "Mosh Hamedani",
      rating: 4.5,
      reviews: 23456,
      price: 0,
      originalPrice: 0,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 1,
      lectures: 12,
      level: "Beginner"
    },
    {
      id: 20,
      title: "Complete Python Developer in 2024: Zero to Mastery",
      instructor: "Andrei Neagoie",
      rating: 4.6,
      reviews: 56789,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 31,
      lectures: 323,
      level: "All Levels"
    }
  ],
  "machine-learning": [
    {
      id: 21,
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
      instructor: "Kirill Eremenko",
      rating: 4.5,
      reviews: 178902,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 44,
      lectures: 382,
      level: "All Levels"
    },
    {
      id: 22,
      title: "Deep Learning A-Z 2024: Neural Networks, AI & ChatGPT Prize",
      instructor: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.5,
      reviews: 34567,
      price: 12.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 23,
      lectures: 197,
      level: "Intermediate"
    },
    {
      id: 23,
      title: "TensorFlow Developer Certificate in 2024: Zero to Mastery",
      instructor: "Andrei Neagoie, Daniel Bourke",
      rating: 4.7,
      reviews: 12345,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 64,
      lectures: 555,
      level: "All Levels"
    },
    {
      id: 24,
      title: "PyTorch for Deep Learning in 2024: Zero to Mastery",
      instructor: "Andrei Neagoie, Daniel Bourke",
      rating: 4.7,
      reviews: 8901,
      price: 14.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 47,
      lectures: 342,
      level: "Intermediate"
    },
    {
      id: 25,
      title: "Complete Machine Learning & Data Science Bootcamp 2024",
      instructor: "Andrei Neagoie, Daniel Bourke",
      rating: 4.6,
      reviews: 23456,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 44,
      lectures: 392,
      level: "All Levels"
    }
  ],
  "java": [
    {
      id: 26,
      title: "Java Programming Masterclass covering Java 11 & Java 17",
      instructor: "Tim Buchalka",
      rating: 4.6,
      reviews: 178234,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 80,
      lectures: 401,
      level: "All Levels"
    },
    {
      id: 27,
      title: "Java 17 Masterclass: Start Coding in 2024",
      instructor: "Tim Buchalka",
      rating: 4.6,
      reviews: 45678,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 118,
      lectures: 903,
      level: "All Levels"
    },
    {
      id: 28,
      title: "Spring & Hibernate for Beginners (includes Spring Boot)",
      instructor: "Chad Darby",
      rating: 4.7,
      reviews: 56789,
      price: 12.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 35,
      lectures: 511,
      level: "Beginner"
    },
    {
      id: 29,
      title: "Java Design Patterns & SOLID Design Principles",
      instructor: "Coffee Powered Crew",
      rating: 4.4,
      reviews: 12345,
      price: 11.99,
      originalPrice: 64.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 12,
      lectures: 83,
      level: "Intermediate"
    },
    {
      id: 30,
      title: "Java Programming for Complete Beginners",
      instructor: "in28Minutes Official",
      rating: 4.5,
      reviews: 34567,
      price: 12.99,
      originalPrice: 74.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 30,
      lectures: 263,
      level: "Beginner"
    }
  ],
  "it-certifications": [
    {
      id: 31,
      title: "CompTIA Security+ (SY0-701) Complete Course & Exam",
      instructor: "Jason Dion",
      rating: 4.7,
      reviews: 56789,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 25,
      lectures: 348,
      level: "All Levels"
    },
    {
      id: 32,
      title: "CompTIA A+ Core 1 (220-1101) Complete Course",
      instructor: "Jason Dion, Total Seminars",
      rating: 4.7,
      reviews: 34567,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 18,
      lectures: 201,
      level: "Beginner"
    },
    {
      id: 33,
      title: "AWS Certified Solutions Architect Associate SAA-C03",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: 198765,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 27,
      lectures: 389,
      level: "All Levels"
    },
    {
      id: 34,
      title: "Microsoft Azure Fundamentals AZ-900 Exam Prep",
      instructor: "Scott Duffy",
      rating: 4.6,
      reviews: 45678,
      price: 12.99,
      originalPrice: 74.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 10,
      lectures: 120,
      level: "Beginner"
    },
    {
      id: 35,
      title: "CCNA 200-301 Complete Course",
      instructor: "Neil Anderson",
      rating: 4.7,
      reviews: 23456,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 52,
      lectures: 421,
      level: "All Levels"
    }
  ],
  "aws-certification": [
    {
      id: 36,
      title: "Ultimate AWS Certified Solutions Architect Associate 2024",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: 198765,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 27,
      lectures: 389,
      level: "All Levels"
    },
    {
      id: 37,
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: 156789,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 15,
      lectures: 234,
      level: "Beginner"
    },
    {
      id: 38,
      title: "AWS Certified Developer Associate 2024",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: 67890,
      price: 12.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: true,
      hours: 33,
      lectures: 400,
      level: "Intermediate"
    },
    {
      id: 39,
      title: "AWS Certified SysOps Administrator Associate 2024",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: 12345,
      price: 12.99,
      originalPrice: 84.99,
      image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 19,
      lectures: 263,
      level: "Intermediate"
    },
    {
      id: 40,
      title: "AWS Certified Solutions Architect Professional SAP-C02",
      instructor: "Stephane Maarek",
      rating: 4.6,
      reviews: 8901,
      price: 14.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzcxODU0MzE5fDA&ixlib=rb-4.1.0&q=85&w=400&h=260&fit=crop",
      bestseller: false,
      hours: 13,
      lectures: 180,
      level: "Advanced"
    }
  ]
};

export const trustedCompanies = [
  { name: "Volkswagen", logo: "https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" },
  { name: "Samsung", logo: "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" },
  { name: "Cisco", logo: "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" },
  { name: "Vimeo", logo: "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg" },
  { name: "Procter & Gamble", logo: "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg" },
  { name: "Hewlett Packard", logo: "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" },
  { name: "Citi", logo: "https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" },
  { name: "Ericsson", logo: "https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg" }
];

export const testimonials = [
  {
    id: 1,
    quote: "Astrovastu Gurukull was rated the most popular online course or certification program for learning how to code according to StackOverflow's 2023 Developer survey.",
    boldPart: "most popular online course or certification program",
    source: "37,076 responses collected",
    logo: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
    ctaText: "View Web Development courses",
    ctaLink: "#"
  },
  {
    id: 2,
    quote: "Astrovastu Gurukull was truly a game-changer and a great guide for me as we brought Dimensional to life.",
    boldPart: "a game-changer and a great guide",
    name: "Alvin Lim",
    title: "Technical Co-Founder, CTO at Dimensional",
    avatar: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzE4NDMzNzh8MA&ixlib=rb-4.1.0&q=85&w=80&h=80&fit=crop",
    ctaText: "View this iOS & Swift course",
    ctaLink: "#"
  },
  {
    id: 3,
    quote: "Astrovastu Gurukull gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    boldPart: "get a new role.",
    name: "William A. Wachlin",
    title: "Partner Account Manager at Amazon Web Services",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzE4NDMzNzh8MA&ixlib=rb-4.1.0&q=85&w=80&h=80&fit=crop",
    ctaText: "View this AWS course",
    ctaLink: "#"
  },
  {
    id: 4,
    quote: "With Astrovastu Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
    boldPart: "drive their careers forward.",
    name: "Ian Stevens",
    title: "Head of Capability Development, North America at Publicis Sapient",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzE4NDMzNzh8MA&ixlib=rb-4.1.0&q=85&w=80&h=80&fit=crop",
    ctaText: "Read full story",
    ctaLink: "#"
  }
];

export const certifications = [
  {
    id: 1,
    name: "CompTIA",
    description: "Cloud, Networking, Cybersecurity",
    image: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/comptia-thumbnail.png"
  },
  {
    id: 2,
    name: "AWS",
    description: "Cloud, AI, Coding, Networking",
    image: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/aws-thumbnail.png"
  },
  {
    id: 3,
    name: "PMI",
    description: "Project & Program Management",
    image: "https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/cert-prep/pmi-thumbnail.png"
  }
];

export const careerPaths = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    salary: "$127,005 average salary (US)",
    roles: "16,500 open roles (US)",
    rating: 4.7,
    reviews: 470000,
    hours: 88,
    image: "https://s.udemycdn.com/career-academies/product-cards/career-card-fswd.png"
  },
  {
    id: 2,
    title: "Digital Marketer",
    salary: "$61,126 average salary (US)",
    roles: "36,600 open roles (US)",
    rating: 4.3,
    reviews: 3800,
    hours: 28.4,
    image: "https://s.udemycdn.com/career-academies/product-cards/career-card-digitalmarketer.png"
  },
  {
    id: 3,
    title: "Data Scientist",
    salary: "$126,629 average salary (US)",
    roles: "20,800 open roles (US)",
    rating: 4.6,
    reviews: 225000,
    hours: 47.1,
    image: "https://s.udemycdn.com/career-academies/product-cards/career-card-data-scientist.png"
  }
];

export const popularSkills = {
  "ChatGPT": { learners: "5,520,785", link: "#" },
  Development: [
    { name: "Python", learners: "50,315,794" },
    { name: "Web Development", learners: "14,497,908" },
    { name: "Data Science", learners: "8,368,629" }
  ],
  Design: [
    { name: "Blender", learners: "3,117,281" },
    { name: "Graphic Design", learners: "4,696,120" },
    { name: "User Experience (UX) Design", learners: "2,155,229" }
  ],
  Business: [
    { name: "PMI Project Management Professional (PMP)", learners: "2,881,721" },
    { name: "Microsoft Power BI", learners: "5,164,697" },
    { name: "PMI CAPM", learners: "489,425" }
  ]
};

export const footerLinks = {
  column1: [
    "Astrovastu Business",
    "Teach on Astrovastu Gurukull",
    "Get the app",
    "About us",
    "Contact us"
  ],
  column2: [
    "Careers",
    "Blog",
    "Help and Support",
    "Affiliate",
    "Investors"
  ],
  column3: [
    "Terms",
    "Privacy policy",
    "Cookie settings",
    "Sitemap",
    "Accessibility statement"
  ]
};
