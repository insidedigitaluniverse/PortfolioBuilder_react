// Edit this file to make the portfolio yours. Leave a list empty ([]) to hide that section.
export const portfolio = {
  name: 'Your Name',
  initials: 'YN',
  roles: ['College Student', 'Quick Learner', 'Team Player'],
  tagline: 'I love learning new things, solving problems and working with people to create something meaningful.',
  photo: '/idu-logo.png',
  logo: '/idu-logo-small.png',
  location: 'Your City, Country',
  email: 'you@example.com',
  phone: '',
  resumeUrl: '',
  availableText: 'Open to opportunities',
  accentColor: '#22d3ee',
  defaultTheme: 'dark',

  highlights: ['Communication', 'Leadership', 'MS Excel', 'Canva', 'Python', 'Java'],

  socials: {
    linkedin: 'https://www.linkedin.com/in/your-username',
    github: 'https://github.com/your-username',
    instagram: 'https://www.instagram.com/your-username',
    twitter: '',
    youtube: '',
    behance: '',
    website: '',
  },

  sections: {
    about: { menu: 'About', eyebrow: 'About me', title: 'A little about me' },
    skills: { menu: 'Skills', eyebrow: 'Skills', title: 'What I am good at' },
    experience: { menu: 'Experience', eyebrow: 'Experience', title: 'Internships and work' },
    projects: { menu: 'Projects', eyebrow: 'Projects', title: 'My work', subtitle: 'A few things I am proud of.' },
    achievements: { menu: 'Achievements', eyebrow: 'Achievements', title: 'Awards and certificates' },
    education: { menu: 'Education', eyebrow: 'Education', title: 'My education' },
    contact: {
      menu: 'Contact',
      eyebrow: 'Contact',
      title: "Let's connect",
      subtitle: 'Have an opportunity, a question or just want to say hi? Send me a message.',
    },
  },

  about: [
    'I am a final year student who enjoys learning, taking part in college activities and working on real projects with my friends and teachers.',
    'I am looking for internships and opportunities where I can use my skills, learn from experienced people and grow every day.',
  ],

  stats: [
    { value: '5+', label: 'Projects' },
    { value: '3', label: 'Certificates' },
  ],

  skills: [
    { icon: '💡', title: 'Core skills', items: ['Communication', 'Teamwork', 'Leadership', 'Problem solving', 'Time management'] },
    { icon: '🛠️', title: 'Tools', items: ['MS Word', 'MS Excel', 'PowerPoint', 'Canva', 'Google Workspace'] },
    { icon: '📚', title: 'Subject skills', items: ['Python', 'Java', 'Data analysis', 'Research', 'Presentation'] },
    { icon: '🌐', title: 'Languages', items: ['English', 'Hindi', 'Marathi'] },
  ],

  experience: [
    {
      role: 'Summer Intern',
      company: 'Company Name',
      period: 'May 2025 - Jul 2025',
      points: ['Helped the team with research, reports and daily tasks.', 'Presented my final work to the team and the manager.'],
    },
    {
      role: 'Event Coordinator',
      company: 'College Club or NGO Name',
      period: 'Aug 2024 - Mar 2025',
      points: ['Planned and managed college events with a team of 10 students.'],
    },
  ],

  projects: [
    {
      title: 'Final Year Project',
      description: 'One or two lines about the project, what you did and what you learned.',
      tags: ['Research', 'Teamwork'],
      category: 'Academic',
      image: '',
      links: [{ label: 'View project', url: '' }],
    },
    {
      title: 'Market Survey Report',
      description: 'A survey of 200 people with charts and a short report of the results.',
      tags: ['Excel', 'Analysis'],
      category: 'Academic',
      image: '',
      links: [],
    },
    {
      title: 'Personal Project',
      description: 'Something you made on your own: an app, a design, a blog, a video or a small business.',
      tags: ['Creativity'],
      category: 'Personal',
      image: '',
      links: [],
    },
  ],

  achievements: [
    { title: 'First prize in college project competition', issuer: 'Your College Name', year: '2025', url: '' },
    { title: 'Certificate course name', issuer: 'Coursera / NPTEL / Udemy', year: '2024', url: '' },
  ],

  education: [
    {
      degree: 'Your Degree (e.g. B.Com, B.Sc, BA, B.Tech, BBA)',
      school: 'Your College Name',
      period: '2022 - 2026',
      details: 'Main subjects or specialisation, and your score.',
    },
    {
      degree: 'Higher Secondary (12th)',
      school: 'Your School or Junior College Name',
      period: '2020 - 2022',
      details: '',
    },
  ],
}
