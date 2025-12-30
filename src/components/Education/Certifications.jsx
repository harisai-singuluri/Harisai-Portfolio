import { FaGithub, FaCode, FaLink, FaMedal } from 'react-icons/fa6';

const courseraLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#2A73CC"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial" dy=".3em">C</text>
  </svg>
);
const nptelLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#FF6F00"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial" dy=".3em">NPTEL</text>
  </svg>
);

const certifications = [
  {
    id: 1,
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "October 03, 2025",
    desc: "Validated core Java programming skills including OOP concepts and Java SE 8 features.",
    link: "https://drive.google.com/file/d/1wlAQEk3QMYyPK2uqcq8nUpxAGoVJzGVL/view",
    // icon: oracleLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    date: "May 2024 - June 2024",
    desc: "Completed a 16-week course covering data structures, and problem-solving techniques.",
    link: "https://drive.google.com/file/d/1FOcFyXo9o4YlPAzdmt8oveSTxsbu4Kc9/view",
    // icon: geeksforgeeksLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 3,
    title: "GenAI for Everyone",
    issuer: "(Coursera – Fractal Analytics)",
    date: "Feb 8, 2024",
    desc: "Learned core concepts of Generative AI, use cases, and real-world business applications.",
    link: "https://drive.google.com/file/d/1kw3fO_YBWpH9av36fsRhxppal-kZUAMa/view?usp=sharing",
    icon: courseraLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Jan 2025",
    desc: "Completed a comprehensive full-stack development course covering frontend, backend, and database integration..",
    link: "https://drive.google.com/file/d/1ZGRzTR-xlZdcGuf7RyqFX-ZC1MWidcm7/view",
    // icon: udemyLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 5,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Jan–Apr 2025",
    desc: "Completed a 12-week NPTEL course covering cloud computing concepts, architecture, and services.",
    link: "https://drive.google.com/file/d/1XRAxxc_ffEcc-Dnsy79tc7qm4wM69GtF/view?usp=sharing",
    icon: nptelLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 6,
    title: "Introduction to Large Language Models",
    issuer: "Coursera – Google Cloud",
    date: "Feb 22, 2024",
    desc: "Learned fundamentals of Large Language Models, their working, and real-world applications.",
    link: "https://drive.google.com/file/d/1gxGKLapxou_w4xVK2VfEDxY3ZNnb1QPY/view?usp=sharing",
    icon: courseraLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 7,
    title: "Oracle Cloud Infrastructure Networking Professional",
    issuer: "NPTEL",
    date: "October 17, 2025",
    desc: "Demonstrated expertise in OCI networking concepts, services, and implementation.",
    link: "https://drive.google.com/file/d/1qj3RLqy3bm7_-yfUwRns5OxhC_eR_Avr/view?usp=sharing",
    // icon: oracleLogo,
    iconBg: "bg-transparent"
  },
];

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner",
    org: "CodeFest 2023",
    date: "2023",
    icon: "🏆",
    desc: "Secured 1st place for building an innovative web app in 24 hours."
  },
  {
    id: 2,
    title: "Top 1% in LeetCode Weekly Contest",
    org: "LeetCode",
    date: "2024",
    icon: "🥇",
    desc: "Ranked in the top 1% globally in a LeetCode coding contest."
  }
];

const openSourceContributions = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub className="text-3xl text-white" />,
    desc: 'Contributed to open source projects, bug fixes, and documentation.',
    link: 'https://github.com/harisai-singuluri',
  },
  {
    id: 2,
    name: 'linkedIn',
    icon: <FaCode className="text-3xl text-green-400" />,
    desc: 'Active contributor, wrote articles and solved DSA problems.',
    link: 'https://www.linkedin.com/in/singuluri-harisai/',
  },
  {
    id: 3,
    name: 'LeetCode',
    icon: <FaCode className="text-3xl text-yellow-400" />,
    desc: 'Solved 500+ coding problems, participated in contests, and shared solutions.',
    link: 'https://leetcode.com/u/harisai_singuluri/',
  },
];

const ngoContributions = [
  {
    id: 1,
    name: 'Helping Hands NGO',
    icon: <FaMedal className="text-3xl text-cyan-400" />,
    desc: 'Volunteered for educational and social initiatives, helped underprivileged children.',
    certificate: 'https://www.linkedin.com/in/singuluri-harisai/',
  },
];


const Contributions = () => (
  <section
    id="contributions"
    className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Contributions</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore my open source, coding, and social service contributions.
        </p>
      </div>
      {/* Open Source Contributions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Open Source & Coding Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {openSourceContributions.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200">
                <FaLink className="inline-block" /> Visit Profile
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* NGO/NSS Contributions */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">NGO & Social Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngoContributions.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-cyan-800/60 to-indigo-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              {item.certificate && (
                <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200">
                  <FaMedal className="inline-block text-cyan-400" /> View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
  </section>
);

const Certifications = () => (
  <section
    id="certifications"
    className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Certifications & Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of my professional certifications and notable achievements.
        </p>
      </div>
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-start relative"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <span className={`w-9 h-9 rounded-full flex items-center justify-center shadow ring-2 ring-slate-900 ${cert.iconBg}`} title={cert.issuer}>
                {cert.icon}
              </span>
            </div>
            <div className="text-cyan-300 font-medium mb-1">{cert.issuer} | {cert.date}</div>
            <p className="text-gray-300 text-sm mb-4">{cert.desc}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200 border border-cyan-400 px-4 py-2 rounded-lg mt-auto">
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
      {/* Achievements Grid */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{ach.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{ach.title}</h4>
              <div className="text-cyan-300 font-medium mb-1">{ach.org} | {ach.date}</div>
              <p className="text-gray-300 text-sm">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
  </section>
);

export default Certifications;
export { Contributions }; 