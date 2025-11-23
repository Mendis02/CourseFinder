export const categories = [
  { id: '1', name: 'Programming', icon: 'code', color: '#3B82F6' },
  { id: '2', name: 'Design', icon: 'layers', color: '#EC4899' },
  { id: '3', name: 'Business', icon: 'briefcase', color: '#10B981' },
  { id: '4', name: 'Marketing', icon: 'trending-up', color: '#F59E0B' },
  { id: '5', name: 'Photography', icon: 'camera', color: '#8B5CF6' },
  { id: '6', name: 'Music', icon: 'music', color: '#EF4444' },
];

export const courses = [
  {
    id: '1',
    title: 'Complete React Native Development',
    description: 'Master React Native by building real-world iOS and Android apps',
    instructor: 'John Doe',
    rating: 4.8,
    reviews: 2847,
    students: 45230,
    price: 89.99,
    category: 'Programming',
    categoryId: '1',
    level: 'Intermediate',
    duration: '42 hours',
    color: '#3B82F6',
    image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=React+Native',
    tags: ['React Native', 'Mobile Development', 'JavaScript'],
    syllabus: [
      'Getting Started with React Native',
      'Core Components & Styling',
      'Navigation & Routing',
      'State Management with Redux',
      'API Integration',
      'Publishing to App Stores'
    ],
    whatYouLearn: [
      'Build native iOS and Android apps',
      'Master React Native fundamentals',
      'Implement complex navigation flows',
      'Work with device features and APIs',
      'Deploy apps to production'
    ]
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    description: 'Learn to design beautiful user interfaces and experiences',
    instructor: 'Sarah Smith',
    rating: 4.9,
    reviews: 3421,
    students: 52100,
    price: 79.99,
    category: 'Design',
    categoryId: '2',
    level: 'Beginner',
    duration: '28 hours',
    color: '#EC4899',
    image: 'https://via.placeholder.com/400x200/EC4899/FFFFFF?text=UI+UX+Design',
    tags: ['UI Design', 'UX Design', 'Figma'],
    syllabus: [
      'Design Fundamentals',
      'Color Theory & Typography',
      'User Research Methods',
      'Wireframing & Prototyping',
      'Figma Mastery',
      'Design Systems'
    ],
    whatYouLearn: [
      'Create stunning user interfaces',
      'Conduct user research',
      'Build interactive prototypes',
      'Master design tools like Figma',
      'Apply UX best practices'
    ]
  },
  {
    id: '3',
    title: 'Digital Marketing Strategy',
    description: 'Complete guide to digital marketing and social media',
    instructor: 'Mike Johnson',
    rating: 4.7,
    reviews: 1892,
    students: 28450,
    price: 69.99,
    category: 'Marketing',
    categoryId: '4',
    level: 'Beginner',
    duration: '18 hours',
    color: '#F59E0B',
    image: 'https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Digital+Marketing',
    tags: ['Marketing', 'Social Media', 'SEO'],
    syllabus: [
      'Marketing Fundamentals',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'SEO & SEM',
      'Analytics & Metrics'
    ],
    whatYouLearn: [
      'Create effective marketing campaigns',
      'Master social media platforms',
      'Build content strategies',
      'Optimize for search engines',
      'Analyze marketing data'
    ]
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis and machine learning',
    instructor: 'Dr. Emily Chen',
    rating: 4.9,
    reviews: 4521,
    students: 67890,
    price: 94.99,
    category: 'Programming',
    categoryId: '1',
    level: 'Intermediate',
    duration: '38 hours',
    color: '#3B82F6',
    image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Python+Data+Science',
    tags: ['Python', 'Data Science', 'Machine Learning'],
    syllabus: [
      'Python Basics',
      'NumPy & Pandas',
      'Data Visualization',
      'Statistical Analysis',
      'Machine Learning Fundamentals',
      'Real-World Projects'
    ],
    whatYouLearn: [
      'Master Python programming',
      'Analyze data with Pandas',
      'Create visualizations',
      'Build ML models',
      'Work on real datasets'
    ]
  },
  {
    id: '5',
    title: 'Business Strategy & Management',
    description: 'Essential business skills for entrepreneurs and managers',
    instructor: 'Robert Brown',
    rating: 4.6,
    reviews: 2134,
    students: 31250,
    price: 74.99,
    category: 'Business',
    categoryId: '3',
    level: 'All Levels',
    duration: '22 hours',
    color: '#10B981',
    image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Business+Strategy',
    tags: ['Business', 'Management', 'Strategy'],
    syllabus: [
      'Business Fundamentals',
      'Strategic Planning',
      'Financial Management',
      'Leadership Skills',
      'Operations Management',
      'Growth Strategies'
    ],
    whatYouLearn: [
      'Develop business strategies',
      'Manage teams effectively',
      'Understand financial metrics',
      'Lead organizations',
      'Drive business growth'
    ]
  },
  {
    id: '6',
    title: 'Photography Fundamentals',
    description: 'Master the art of photography from basics to advanced',
    instructor: 'Lisa Anderson',
    rating: 4.8,
    reviews: 1567,
    students: 23450,
    price: 59.99,
    category: 'Photography',
    categoryId: '5',
    level: 'Beginner',
    duration: '16 hours',
    color: '#8B5CF6',
    image: 'https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Photography',
    tags: ['Photography', 'Camera', 'Editing'],
    syllabus: [
      'Camera Settings & Modes',
      'Composition Techniques',
      'Lighting Fundamentals',
      'Portrait Photography',
      'Landscape Photography',
      'Photo Editing'
    ],
    whatYouLearn: [
      'Use camera settings effectively',
      'Compose stunning photos',
      'Master lighting techniques',
      'Edit photos professionally',
      'Develop your style'
    ]
  },
  {
    id: '7',
    title: 'Music Production & Audio Engineering',
    description: 'Create professional music with modern production techniques',
    instructor: 'James Wilson',
    rating: 4.7,
    reviews: 987,
    students: 15320,
    price: 84.99,
    category: 'Music',
    categoryId: '6',
    level: 'Intermediate',
    duration: '32 hours',
    color: '#EF4444',
    image: 'https://via.placeholder.com/400x200/EF4444/FFFFFF?text=Music+Production',
    tags: ['Music', 'Production', 'Audio'],
    syllabus: [
      'DAW Basics',
      'Recording Techniques',
      'Mixing Fundamentals',
      'Mastering Process',
      'Sound Design',
      'Music Theory Essentials'
    ],
    whatYouLearn: [
      'Produce professional music',
      'Mix and master tracks',
      'Use DAW software',
      'Create unique sounds',
      'Understand music theory'
    ]
  },
  {
    id: '8',
    title: 'Full Stack Web Development',
    description: 'Build complete web applications from front-end to back-end',
    instructor: 'Alex Martinez',
    rating: 4.9,
    reviews: 5234,
    students: 89450,
    price: 99.99,
    category: 'Programming',
    categoryId: '1',
    level: 'Advanced',
    duration: '56 hours',
    color: '#3B82F6',
    image: 'https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Full+Stack+Dev',
    tags: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    syllabus: [
      'HTML, CSS & JavaScript',
      'React & Modern Frontend',
      'Node.js & Express',
      'Database Design',
      'RESTful APIs',
      'Deployment & DevOps'
    ],
    whatYouLearn: [
      'Build complete web apps',
      'Master React framework',
      'Create backend APIs',
      'Work with databases',
      'Deploy to production'
    ]
  }
];

export const featuredCourses = courses.filter(course => 
  ['1', '2', '4', '8'].includes(course.id)
);

export const getCoursesByCategory = (categoryId) => {
  if (!categoryId) return courses;
  return courses.filter(course => course.categoryId === categoryId);
};

export const searchCourses = (query) => {
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowerQuery) ||
    course.description.toLowerCase().includes(lowerQuery) ||
    course.category.toLowerCase().includes(lowerQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
