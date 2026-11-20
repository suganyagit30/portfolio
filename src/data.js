// ─────────────────────────────────────────────────────────────
// Edit this file to update content. Items marked PLACEHOLDER
// must be replaced with real details before publishing.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Suganya R',
  role: 'Aspiring Software Developer',
  email: 'your.email@example.com', // PLACEHOLDER
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/your-profile', // PLACEHOLDER
  github: 'https://github.com/your-username', // PLACEHOLDER
  resume: '/Suganya_R_Resume.pdf', // PLACEHOLDER: put the PDF in /public with this name
  photo: '/profile.jpg', // PLACEHOLDER: put your photo in /public with this name
}

export const navLinks = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Services', 'services'],
  ['Projects', 'projects'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact'],
]

export const highlights = [
  ['cap', 'B.Sc. Computer Science Graduate'],
  ['calendar', '2025 Pass-out'],
  ['chart', 'Data Science Internship Completed'],
  ['code', 'Interested in Software & Backend Development'],
]

export const skills = [
  { title: 'Programming', icon: 'code', items: ['Python', 'JavaScript'] },
  { title: 'Frontend', icon: 'layout', items: ['React.js'] },
  { title: 'Backend', icon: 'server', items: ['Node.js', 'Express.js', 'RESTful API Development'] },
  { title: 'Databases', icon: 'database', items: ['MySQL', 'MongoDB'] },
  { title: 'Core Concepts', icon: 'cube', items: ['Object-Oriented Programming (OOP)'] },
  { title: 'Data Science', icon: 'chart', items: ['Pandas', 'NumPy', 'Matplotlib'] },
  { title: 'Machine Learning', icon: 'brain', items: ['Machine Learning Fundamentals'] },
  { title: 'Tools', icon: 'tool', items: ['Git', 'GitHub', 'Postman', 'Streamlit'] },
]

export const services = [
  { icon: 'server', title: 'Backend Development', text: 'Building backend applications using Python and Node.js.' },
  { icon: 'layout', title: 'Web Application Development', text: 'Developing dynamic web applications using React.js and Node.js.' },
  { icon: 'api', title: 'REST API Development', text: 'Creating and integrating RESTful APIs for application communication.' },
  { icon: 'chart', title: 'Data Science', text: 'Working with Python libraries for data analysis, data cleaning, and visualization.' },
  { icon: 'brain', title: 'Machine Learning', text: 'Exploring machine learning concepts and developing practical solutions.' },
]

export const projects = [
  {
    title: 'AI-Powered Career Recommendation System',
    thumb: 'career',
    description:
      "A Python and Streamlit-based application that recommends suitable colleges, courses, and study materials based on students' skills, academic marks, interests, and future career goals.",
    tech: ['Python', 'Streamlit'],
    features: [
      'Student information input',
      'Skills and interests analysis',
      'Career and educational recommendations',
      'College and course suggestions',
      'Study material recommendations',
    ],
    demo: '', // PLACEHOLDER: add live project URL
    repo: '', // PLACEHOLDER: add GitHub repository URL
  },
  {
    title: 'AI-Enhanced Social Media Web Application',
    thumb: 'social',
    description:
      'A MERN-stack social media web application that allows users to connect, interact, and share content. It includes AI-powered content suggestions using the ChatGPT API.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JWT Authentication', 'ChatGPT API'],
    features: [
      'User registration and login',
      'JWT-based authentication',
      'User profiles',
      'Friend requests',
      'Likes, comments, and sharing',
      'AI-powered captions, suggestions, and hashtags',
    ],
    demo: '', // PLACEHOLDER
    repo: '', // PLACEHOLDER
  },
]

export const internship = {
  title: 'Data Science Intern',
  duration: '3 Months',
  description:
    'Completed a three-month Data Science internship involving Python programming, data analysis, data visualization, data preprocessing, and practical project development.',
  tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Power BI', 'SQL'],
}

export const education = {
  degree: 'Bachelor of Science – Computer Science',
  institution: 'University of Madras',
  year: '2025',
  cgpa: '7.2/10',
}
