import { BarChart3, Code2, Gauge, LayoutTemplate, ServerCog, Sparkles } from 'lucide-react'
import type { Experience, Project, Service, SkillGroup } from '../types'

export const navItems = ['About', 'Skills', 'Experience', 'Projects', 'AI Workflow', 'Contact']

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'Context API', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js'] },
  { title: 'Database', skills: ['SQL', 'MongoDB'] },
  { title: 'Cloud & DevOps', skills: ['AWS (S3, EC2 basics)', 'Git', 'GitHub', 'Vercel', 'Netlify'] },
  { title: 'Tools', skills: ['VS Code', 'Cursor IDE', 'Jira', 'Postman', 'Linux'] },
  { title: 'Core Concepts', skills: ['Component Architecture', 'State Management', 'REST API Integration', 'Performance Optimization', 'Responsive Design', 'Agile/Scrum'] },
]

export const experience: Experience[] = [
  { role: 'Web Developer', company: 'Karavya Solutions LLP', period: 'Jan 2024 – Present', location: 'Ahmedabad, Gujarat', bullets: ['Developed and scaled responsive React.js applications across production systems used by 1K+ users.', 'Used GitHub Copilot and ChatGPT daily to accelerate components and reduce boilerplate, cutting delivery time by ~20%.', 'Built reusable component architecture with Redux/Context, reducing code duplication by 30%.', 'Integrated REST APIs and third-party services for reliable frontend-backend data flow.', 'Reduced unnecessary re-renders and improved rendering workflows, decreasing page load time by 25%.', 'Collaborated with cross-functional teams using Agile and Jira.'] },
  { role: 'Frontend Engineer Intern', company: 'Datavizz', period: 'July 2023 – Dec 2023', location: 'Ahmedabad, Gujarat', bullets: ['Developed two full-stack web apps: a feature-rich e-commerce platform and tourism booking system.', 'Used ChatGPT and Codeium for boilerplate setup and REST API best practices in React.', 'Built responsive, scalable UIs with React hooks and component-based architecture.'] },
]

export const projects: Project[] = [
  { title: 'Transformify (TFY)', description: 'Operational finance tooling for Partner, Member, and Admin modules.', tags: ['React.js', 'Redux', 'REST APIs', 'CSV Processing'], highlights: ['10K+ record bulk payments', 'Automated invoices'], category: 'Web Apps', color: 'from-indigo-600 to-violet-500' },
  { title: 'HushStays', description: 'Interactive property listing experience built for confident discovery.', tags: ['React.js', 'Agora SDK', 'REST APIs', 'Real-time Chat'], highlights: ['Advanced filtering', 'Live chat'], category: 'Web Apps', color: 'from-cyan-500 to-blue-600' },
  { title: 'Mercury', description: 'Role-based freelancer marketplace with a custom poster maker.', tags: ['React.js', 'Drag & Drop', 'Role-Based Access', 'Dashboards'], highlights: ['Drag-and-drop editor', 'Template system'], category: 'Marketplace', color: 'from-fuchsia-500 to-purple-600' },
  { title: 'MakeAds', description: 'Advertisement publishing with location-aware campaign targeting.', tags: ['React.js', 'Google Maps API', 'Social Integrations'], highlights: ['Location targeting', 'Social publishing'], category: 'Web Apps', color: 'from-amber-400 to-orange-600' },
  { title: 'E-commerce Platform', description: 'End-to-end retail experience with a powerful admin dashboard.', tags: ['React.js', 'Node.js', 'MongoDB'], highlights: ['Product discovery', 'Cart management'], category: 'Full-Stack', color: 'from-emerald-500 to-teal-600' },
  { title: 'Tourism Booking System', description: 'Booking workflows and administration built for smooth planning.', tags: ['React.js', 'Node.js', 'MongoDB'], highlights: ['Booking flows', 'Admin dashboard'], category: 'Full-Stack', color: 'from-rose-500 to-pink-600' },
]

export const services: Service[] = [
  { title: 'React/TypeScript Web Apps', description: 'Scalable interfaces engineered around your product.', icon: Code2 },
  { title: 'Landing Pages & Marketing', description: 'Fast, conversion-aware pages with real polish.', icon: LayoutTemplate },
  { title: 'Dashboard & Admin UI', description: 'Clear, data-heavy workflows people enjoy using.', icon: BarChart3 },
  { title: 'REST API Integration', description: 'Reliable frontend data flows and states.', icon: ServerCog },
  { title: 'Performance & Refactoring', description: 'Sharper Core Web Vitals and maintainable code.', icon: Gauge },
  { title: 'Full-Stack MERN', description: 'Practical delivery from interface to API.', icon: Sparkles },
]
