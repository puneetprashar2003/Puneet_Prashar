import React, { useState } from 'react';

const Portfolio1 = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Portfolio data
  const personalInfo = {
    name: "Your Name",
    title: "Data Scientist & Machine Learning Engineer",
    bio: "Passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. Turning complex data into actionable insights and innovative solutions.",
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "Deep Learning", "Statistics"]
  };

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University Name",
      period: "2020 - 2022",
      description: "Graduated with honors. Specialized in machine learning and statistical analysis. Thesis: \"Advanced Predictive Models for [Your Topic].\"",
      courses: "Advanced Machine Learning, Big Data Analytics, Statistical Learning, Deep Learning, Natural Language Processing"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      description: "Graduated magna cum laude. Minor in Mathematics. Research assistant at the university's AI Lab.",
      courses: "Data Structures & Algorithms, Database Systems, Linear Algebra, Probability & Statistics, Intro to Machine Learning"
    }
  ];

  const experience = [
    {
      role: "Senior Data Scientist",
      company: "Company Name",
      period: "2022 - Present",
      description: "Lead data scientist for the [specific team/project]. Designed and implemented machine learning solutions that [specific achievements and results].",
      achievements: [
        "Developed predictive models that increased operational efficiency by X%",
        "Built and deployed an end-to-end ML pipeline using [technologies]",
        "Led a team of X junior data scientists and analysts",
        "Collaborated with cross-functional teams to translate business requirements into data science solutions"
      ]
    },
    {
      role: "Data Scientist",
      company: "Company Name",
      period: "2020 - 2022",
      description: "Worked on [specific projects or domains]. Applied statistical analysis and machine learning techniques to solve [specific business problems].",
      achievements: [
        "Created a recommendation system that improved user engagement by X%",
        "Performed exploratory data analysis to uncover key insights for strategic decision-making",
        "Developed automated reporting dashboards using [tools]",
        "Optimized existing algorithms, improving processing speed by X%"
      ]
    }
  ];

  const projects = [
    {
      title: "Predictive Analytics for Healthcare",
      description: "Developed a machine learning model to predict patient readmission risk, helping hospitals allocate resources more efficiently.",
      technologies: ["Python", "Scikit-learn", "TensorFlow"],
      link: "/projects/healthcare-analytics"
    },
    {
      title: "NLP-Based Sentiment Analysis",
      description: "Created a sentiment analysis tool for analyzing customer reviews, achieving 92% accuracy on benchmark datasets.",
      technologies: ["NLP", "BERT", "PyTorch"],
      link: "/projects/sentiment-analysis"
    },
    {
      title: "Time Series Forecasting",
      description: "Implemented advanced time series models to forecast sales, reducing inventory costs by 15%.",
      technologies: ["ARIMA", "Prophet", "Pandas"],
      link: "/projects/time-series-forecasting"
    }
  ];

  const extracurricular = [
    {
      title: "Data Science Volunteer",
      description: "Volunteer data scientist for [Non-profit organization], helping analyze community health data to improve resource allocation."
    },
    {
      title: "Kaggle Competitions",
      description: "Active Kaggle competitor with X medals. Ranked in the top Y% globally."
    },
    {
      title: "Tech Blog",
      description: "Author of a data science blog with over X monthly readers. Topics include machine learning tutorials and industry insights."
    },
    {
      title: "Conference Speaker",
      description: "Speaker at [Conference names]. Presented research on [Topic] to industry professionals."
    }
  ];

  const contact = {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, State, Country",
    social: [
      { platform: "LinkedIn", icon: "linkedin-in", url: "https://linkedin.com/in/yourprofile" },
      { platform: "GitHub", icon: "github", url: "https://github.com/yourusername" },
      { platform: "Twitter", icon: "twitter", url: "https://twitter.com/yourhandle" },
      { platform: "Kaggle", icon: "kaggle", url: "https://kaggle.com/yourusername" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">DataSci Portfolio</div>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#about" onClick={() => setActiveSection('about')} className={`relative py-2 ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>About</a></li>
              <li><a href="#education" onClick={() => setActiveSection('education')} className={`relative py-2 ${activeSection === 'education' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>Education</a></li>
              <li><a href="#experience" onClick={() => setActiveSection('experience')} className={`relative py-2 ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>Experience</a></li>
              <li><a href="#projects" onClick={() => setActiveSection('projects')} className={`relative py-2 ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>Projects</a></li>
              <li><a href="#extracurricular" onClick={() => setActiveSection('extracurricular')} className={`relative py-2 ${activeSection === 'extracurricular' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>Extracurricular</a></li>
              <li><a href="#contact" onClick={() => setActiveSection('contact')} className={`relative py-2 ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>Contact</a></li>
            </ul>
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="md:mr-8 mb-6 md:mb-0">
            <img src="/api/placeholder/300/300" alt="Profile" className="w-48 h-48 rounded-full border-4 border-blue-600 object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{personalInfo.name}</h1>
            <h2 className="text-xl text-blue-700 mb-4">{personalInfo.title}</h2>
            <p className="text-gray-600 mb-4">{personalInfo.bio}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {personalInfo.skills.map((skill, index) => (
                <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded inline-block transition duration-300 hover:scale-105">Get in Touch</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-gray-500">About Me</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              I am a data scientist with a passion for solving complex problems through data-driven approaches. With a background in [Your Background], I've developed strong analytical skills and a deep understanding of statistical methods and machine learning algorithms.
            </p>
            <p className="text-gray-700">
              My professional journey has allowed me to work with diverse datasets and business challenges, from [specific experience examples]. I thrive in collaborative environments and enjoy translating technical findings into clear insights for stakeholders at all levels.
            </p>
            <p className="text-gray-700">
              When I'm not analyzing data, you can find me [your interests/hobbies]. I believe in continuous learning and staying updated with the latest developments in data science and AI.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">Education</h2>
          <div className="border-l-2 border-blue-600 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-8" style={{ marginLeft: '-6px' }}>
                <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <h4 className="text-lg text-blue-700">{edu.institution}</h4>
                <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                <p className="text-gray-700 mb-2">{edu.description}</p>
                <p className="text-gray-700"><strong>Key Courses:</strong> {edu.courses}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">Professional Experience</h2>
          <div className="border-l-2 border-blue-600 ml-4">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8" style={{ marginLeft: '-6px' }}>
                <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                <h4 className="text-lg text-blue-700">{exp.company}</h4>
                <div className="text-sm text-gray-500 mb-2">{exp.period}</div>
                <p className="text-gray-700 mb-2">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-2 hover:shadow-lg transition duration-300">
                <img src={`/api/placeholder/400/200?text=Project+${index+1}`} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link === "#" ? `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}` : project.link} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm inline-block transition duration-300">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extracurricular Section */}
        <section id="extracurricular" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extracurricular.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-600">Contact Me</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">{contact.email}</p>
              </div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1.0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">{contact.phone}</p>
              </div>
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">{contact.location}</p>
              </div>
              <div className="flex space-x-4">
                {contact.social.map((social, index) => (
                  <a key={index} href={social.url === "#" ? `https://${social.platform.toLowerCase()}.com` : social.url} className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-gray-700 mb-4">Download my resume for more details about my experience and qualifications.</p>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded inline-block transition duration-300">Download Resume</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6 mt-8">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-gray-600">&copy; 2025 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio1;