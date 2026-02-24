// Detailed course data for course pages
/*eslint-disable  @typescript-eslint/no-unused-vars  */
/*eslint-disable @typescript-eslint/no-explicit-any */

const generateCurriculum = (topic: any) => {
  const curriculumTemplates = {
    default: [
      {
        title: "Getting Started",
        lectures: [
          { title: "Welcome to the Course", duration: "3:04", preview: true },
          { title: "Course Overview & Resources", duration: "5:20", preview: true },
          { title: "Setting Up Your Environment", duration: "8:15", preview: false },
          { title: "Understanding the Fundamentals", duration: "12:30", preview: false }
        ]
      },
      {
        title: "Core Concepts",
        lectures: [
          { title: "Introduction to Key Principles", duration: "15:20", preview: true },
          { title: "Deep Dive: Theory & Practice", duration: "18:45", preview: false },
          { title: "Hands-On Exercise 1", duration: "22:10", preview: false },
          { title: "Common Patterns & Best Practices", duration: "14:30", preview: false },
          { title: "Quiz: Core Concepts", duration: "0:00", preview: false }
        ]
      },
      {
        title: "Intermediate Techniques",
        lectures: [
          { title: "Building on the Basics", duration: "16:40", preview: false },
          { title: "Working with Real-World Data", duration: "20:15", preview: false },
          { title: "Project: Building Your First Application", duration: "35:00", preview: false },
          { title: "Debugging & Troubleshooting", duration: "12:20", preview: false }
        ]
      },
      {
        title: "Advanced Topics",
        lectures: [
          { title: "Advanced Strategies", duration: "18:30", preview: false },
          { title: "Performance Optimization", duration: "22:45", preview: false },
          { title: "Industry Best Practices", duration: "15:10", preview: false },
          { title: "Hands-On Exercise 2", duration: "28:00", preview: false },
          { title: "Case Study Analysis", duration: "20:00", preview: false }
        ]
      },
      {
        title: "Real-World Projects",
        lectures: [
          { title: "Project Planning & Architecture", duration: "14:20", preview: false },
          { title: "Building the Complete Solution", duration: "45:00", preview: false },
          { title: "Testing & Deployment", duration: "18:30", preview: false },
          { title: "Final Project Review", duration: "10:00", preview: false }
        ]
      },
      {
        title: "Wrap Up & Next Steps",
        lectures: [
          { title: "Course Summary", duration: "8:00", preview: false },
          { title: "Career Advice & Resources", duration: "12:15", preview: false },
          { title: "Bonus: Additional Learning Paths", duration: "5:30", preview: true }
        ]
      }
    ]
  };
  return curriculumTemplates.default;
};

const generateReviews = (courseTitle: any) => [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment: `This is an excellent course! The instructor explains complex concepts in a very easy to understand manner. I've taken several courses on this topic and this one is by far the best. Highly recommended for anyone looking to level up their skills.`,
    helpful: 142
  },
  {
    id: 2,
    name: "James K.",
    rating: 4.5,
    date: "1 month ago",
    comment: "Great course with practical examples. The hands-on projects really helped solidify my understanding. I would have liked a bit more depth in some areas, but overall a fantastic learning experience.",
    helpful: 89
  },
  {
    id: 3,
    name: "Priya R.",
    rating: 5,
    date: "3 weeks ago",
    comment: "Absolutely loved this course! The pace is perfect and the instructor is very engaging. I went from knowing nothing to feeling confident in my abilities. The community support is also wonderful.",
    helpful: 67
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 4,
    date: "2 months ago",
    comment: "Solid course that covers all the fundamentals well. Some of the later sections could use more examples, but the core content is excellent. Good value for the price.",
    helpful: 45
  }
];

export const courseDetails: { [key: number]: any } = {
  1: {
    id: 1,
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    subtitle: "Master ChatGPT, Midjourney, DALL-E, and other AI tools. Build real projects, automate tasks, and boost your productivity with AI.",
    instructor: "Julian Melanson, Benza Maman",
    instructorTitle: "AI Expert & Online Educator",
    instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&w=200&h=200&fit=crop",
    instructorStudents: 385000,
    instructorCourses: 12,
    instructorRating: 4.5,
    instructorReviews: 85000,
    instructorBio: "Julian Melanson is a leading AI educator with over 385,000 students worldwide. He specializes in making complex AI concepts accessible to beginners and has been featured in Forbes, Business Insider, and TechCrunch for his innovative teaching methods.",
    rating: 4.5,
    reviews: 42891,
    students: 385421,
    price: 12.99,
    originalPrice: 84.99,
    image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&w=800&h=450&fit=crop",
    bestseller: true,
    hours: 38.5,
    lectures: 345,
    level: "All Levels",
    language: "English",
    lastUpdated: "6/2025",
    articles: 45,
    downloadableResources: 23,
    certificate: true,
    whatYouWillLearn: [
      "Master ChatGPT for content creation, coding, and professional tasks",
      "Use AI tools like DALL-E and Midjourney for image generation",
      "Build automated workflows using AI-powered tools",
      "Understand prompt engineering and get better AI outputs",
      "Create AI-powered applications without coding experience",
      "Leverage AI for business strategy and decision making",
      "Understand the ethics and limitations of AI technology",
      "Build a portfolio of AI-powered projects"
    ],
    requirements: [
      "No programming experience needed",
      "A computer with internet access",
      "Basic computer literacy",
      "Enthusiasm for learning about AI!"
    ],
    description: "Ready to master the most transformative technology of our time? This comprehensive course takes you from complete beginner to AI power user. You'll learn how to leverage ChatGPT, DALL-E, Midjourney, and other cutting-edge AI tools to supercharge your productivity, creativity, and career prospects.\n\nWhether you're a business professional, student, creative, or entrepreneur, this course gives you the practical skills to use AI effectively in your daily work and life.",
    whoIsThisFor: [
      "Anyone who wants to learn how to use AI tools effectively",
      "Business professionals looking to boost productivity",
      "Content creators wanting to leverage AI",
      "Entrepreneurs looking for AI-powered solutions",
      "Students exploring AI technology"
    ],
    relatedTopics: ["Generative AI", "Artificial Intelligence", "Machine Learning", "Prompt Engineering", "Productivity"]
  },
  2: {
    id: 2,
    title: "The Complete AI Guide: Learn AI, Generative AI & More",
    subtitle: "Comprehensive guide to understanding and using AI tools in your everyday work and creative projects.",
    instructor: "Julian Melanson",
    instructorTitle: "AI Educator & Tech Entrepreneur",
    instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&w=200&h=200&fit=crop",
    instructorStudents: 385000,
    instructorCourses: 12,
    instructorRating: 4.4,
    instructorReviews: 65000,
    instructorBio: "Julian Melanson is a renowned AI educator with extensive experience in making artificial intelligence accessible to everyone.",
    rating: 4.4,
    reviews: 18234,
    students: 125000,
    price: 12.99,
    originalPrice: 74.99,
    image: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    bestseller: false,
    hours: 25,
    lectures: 198,
    level: "Beginner",
    language: "English",
    lastUpdated: "5/2025",
    articles: 30,
    downloadableResources: 15,
    certificate: true,
    whatYouWillLearn: [
      "Understand core AI concepts and terminology",
      "Use generative AI tools for content creation",
      "Apply AI to real-world business scenarios",
      "Build AI-enhanced workflows and automations",
      "Evaluate and choose the right AI tools for any task",
      "Create compelling AI-generated images and text"
    ],
    requirements: ["No prior experience needed", "Computer with internet access"],
    description: "This comprehensive guide covers everything you need to know about AI, from fundamental concepts to practical applications. Perfect for beginners who want to understand and leverage AI technology.",
    whoIsThisFor: ["Complete beginners to AI", "Professionals wanting to integrate AI", "Students and lifelong learners"],
    relatedTopics: ["Generative AI", "Machine Learning", "ChatGPT", "AI Tools"]
  }
};

// Generate detail for any course ID that doesn't have explicit detail
export const getOrGenerateCourseDetail = (courseId: number, basicCourse: { id: number; title: string; instructor: string; rating: number; reviews: number; price: number; originalPrice: number; image: string; bestseller: boolean; hours: number; lectures: number; level: string; } | null) => {
  if (courseDetails[courseId]) {
    const detail = courseDetails[courseId];
    return {
      ...detail,
      curriculum: generateCurriculum(detail.title),
      reviewsList: generateReviews(detail.title)
    };
  }

  // Generate from basic course data
  if (basicCourse) {
    return {
      id: basicCourse.id,
      title: basicCourse.title,
      subtitle: `Master ${basicCourse.title.split(':')[0]} with hands-on projects and real-world examples. Learn from industry experts and build job-ready skills.`,
      instructor: basicCourse.instructor,
      instructorTitle: "Senior Instructor & Industry Expert",
      instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&w=200&h=200&fit=crop",
      instructorStudents: Math.floor(basicCourse.reviews * 3.5),
      instructorCourses: Math.floor(Math.random() * 15) + 3,
      instructorRating: basicCourse.rating,
      instructorReviews: basicCourse.reviews,
      instructorBio: `A passionate educator with years of industry experience, dedicated to helping students master new skills and advance their careers.`,
      rating: basicCourse.rating,
      reviews: basicCourse.reviews,
      students: Math.floor(basicCourse.reviews * 3.5),
      price: basicCourse.price,
      originalPrice: basicCourse.originalPrice,
      image: basicCourse.image.replace('w=400&h=260', 'w=800&h=450'),
      bestseller: basicCourse.bestseller,
      hours: basicCourse.hours,
      lectures: basicCourse.lectures,
      level: basicCourse.level,
      language: "English",
      lastUpdated: "5/2025",
      articles: Math.floor(Math.random() * 40) + 10,
      downloadableResources: Math.floor(Math.random() * 25) + 5,
      certificate: true,
      whatYouWillLearn: [
        `Master the core concepts and fundamentals of ${basicCourse.title.split(':')[0]}`,
        "Build real-world projects from scratch to portfolio-ready",
        "Apply industry best practices and modern techniques",
        "Develop problem-solving skills through hands-on exercises",
        "Gain confidence to tackle professional challenges",
        "Earn a certificate of completion to showcase your skills"
      ],
      requirements: [
        "Basic computer skills and internet access",
        "No prior experience required for beginner courses",
        "A willingness to learn and practice"
      ],
      description: `This comprehensive course provides everything you need to master ${basicCourse.title.split(':')[0]}. Through a combination of theory, hands-on projects, and real-world examples, you'll build the skills employers are looking for.\n\nWhether you're a complete beginner or looking to level up, this course has something for everyone.`,
      whoIsThisFor: [
        "Beginners looking to start a new career path",
        "Professionals wanting to upgrade their skills",
        "Students and self-learners",
        "Anyone passionate about technology"
      ],
      relatedTopics: ["Technology", "Programming", "Career Development", "Professional Skills"],
      curriculum: generateCurriculum(basicCourse.title),
      reviewsList: generateReviews(basicCourse.title)
    };
  }

  return null;
};

export { generateCurriculum, generateReviews };
