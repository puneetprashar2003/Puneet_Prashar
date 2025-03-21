// Portfolio.js
import React, { useState, useEffect } from 'react';
import { FileText, LinkedinIcon, Mail, Menu, X } from 'lucide-react';
import './portfolio1.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeViewUrl, setResumeViewUrl] = useState("https://drive.google.com/file/d/1AefD2GZaDZIflxo9rw9x-22wvNst3zbB/preview");
const [resumeDownloadUrl, setResumeDownloadUrl] = useState("https://drive.google.com/uc?export=download&id=1AefD2GZaDZIflxo9rw9x-22wvNst3zbB");



  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Extracurricular', id: 'extracurricular' },
    { name: 'Resume', id: 'resume' },
  ];

  const skills = [
    "Python", "C++", "JavaScript", "SQL", "Node.js", "Express.js",
    "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "NLTK", "OpenCV",
    "MongoDB", "Data Structures", "Algorithms"
  ];

  const experiences = [
    {
      title: "Data Science Intern",
      company: "University of Innsbruck, Austria",
      period: "April 2024 - Present",
      description: "Leading research on a novel approach for detecting temporal validity of entities in text under Prof. Adam Jatowt.",
      highlights: [
        "Curated a comprehensive dataset of 19,540 balanced sentences through web scraping from Wikipedia",
        "Developed novel preprocessing pipeline including temporal masking and entity-centric feature extraction",
        "Implemented and evaluated architectures using Large Language Models: FLAN-T5, Llama 3, Mistral",
        "Achieved state-of-the-art performance with fine-tuned Llama 3 (93.4% accuracy)",
        "Paper Submitted to ECIR 2025 (Rank A) ",
      ],
      paperLink: "http://arxiv.org/abs/2502.15332",
    
    },
    {
      title: "Data Science Intern",
      company: "IIT Patna, India",
      period: "June 2024 - Present",
      description: "Developing ModAlign-ADE, a cross-modal transformer framework for multimodal Adverse Drug Event detection.",
      highlights: [
        "Implemented and fine-tuned state-of-the-art models (ViT, RoBERTa, BLIP-2) achieving 91% accuracy and 0.88 F1-score",
        "Designed missing modality generator to handle incomplete data scenarios, improving model robustness",
        "Enhanced MMADE dataset with 1,593 non-ADE samples for more balanced training scraped from Twitter",
        "Paper submitted to NAACL 2025 (Rank A)"
      ]
    }
  ];

  const projects = [
    {
      title: "ModAlign-ADE: Multimodal Adverse Drug Event Detection",
      description: "Developed a novel cross-modal transformer framework for detecting medication-related adverse events from both text and image data, with special handling for missing modality scenarios.",
      technologies: ["PyTorch", "Vision Transformer (ViT)", "RoBERTa", "BLIP-2", "Stochastic Differential Equations", "Score-based Diffusion Models"],
      metrics: "Achieved 91.45% accuracy with 30% missing modalities, significantly outperforming state-of-the-art baselines",
      links: {
        github: "https://github.com/puneetprashar2003/ModAlign-ADE"
      }
    },
    {
      title: "M2-S2ETH: Multimodal Multi-Task Deep Learning Framework",
      description: "Developed a novel deep learning framework for classifying sentiment, emotion, humor, sarcasm, and toxicity from speech and text in social media content.",
      technologies: ["PyTorch", "Wav2Vec2.0", "RoBERTa", "Streaming Attention", "Multimodal Fusion"],
      metrics: "Achieved significant improvements over state-of-the-art models across 5 affective tasks",
      links: {
        github: "https://github.com/puneetprashar2003/M2S2ETH-Multimodal-Multitask-Sentiment-Sarcasm-Emotion-Toxicity-Humor-Detection-In-Speech"
      }
    },
    {
      title: "Black Friday Sales Analysis & Prediction",
      description: "Conducted exploratory data analysis and built predictive models to understand customer spending behavior and forecast sales trends during Black Friday.",
      technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "XGBoost", "LDA", "TF-IDF"],
      metrics: "Identified key sales trends and customer segments, improving prediction accuracy for future sales events.",
      links: {
        github: "https://github.com/puneetprashar2003/Black_Friday_Data_Analysis",
        eda_notebook: "eda.ipynb",
        ml_notebook: "ML_Model.ipynb"
      }
    },
    {
      title: "GULLAK - Personal Financial Management Platform",
      description: "Developed full-stack application using MERN for users to track their expenses, transfers and savings using graphical representation.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      metrics: "Implemented AI financial advisor using Gemini API",
      links: {
        github: "https://github.com/puneetprashar2003/Gullak_Finance_app",
        live: "https://liveproject.com"
      }
    },
    {
      title: "MentorConnect",
      description: "Built an education platform using MERN stack where mentor and mentee can connect to ease sharing of knowledge.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "WebRTC", "Socket.io"],
      metrics: "Real-time video conferencing with screen sharing",
      links: {
        github: "https://github.com/puneetprashar2003/MentorMenteeConnect"
      }
    }
  ];
  
  const education = [
    {
      degree: "B.Tech in Mathematics and Computing",
      school: "Rajiv Gandhi Institute of Petroleum Technology, Jais, India",
      period: "Dec 2021 - May 2025",
      description: "CPI: 8.90/10.0",
      courses: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Computer Networks",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Theory Of Computation"
      ]
    },
    {
      degree: "Minor in Business Consulting",
      school: "Rajiv Gandhi Institute of Petroleum Technology, Jais, India",
      period: "Dec 2021 - May 2025",
      description: "CPI: 8.04/10.0",
      courses: [
        "Data Analytics",
        "Marketing Management",
        "Energy Analytics",
        "Business Strategy",
        "Consulting Fundamentals"
      ]
    }
  ];

  const achievements = [
    "Qualified GATE 2024 in Data Science and AI demonstrating expertise in advanced computing",
    "Published research in IEEE conference on big data analytics in entrepreneurship",
    "Mentored 100+ students as Teaching Assistant in Computer Programming and Physics"
  ];
  
  const extracurricular = [
    {
      title: "Competitive Programming",
      description: "Active competitive programmer with strong problem-solving skills",
      details: [
        "Represented college in Internation Collegiate Programming Contest (ICPC) Asia West Regionals",
        "Rated 4-Star competitive programmer on CodeChef coding platform with a rating of 1800+",
        "Solved 940+ DSA problems with Rating 1790+ on LeetCode coding platform",
        "Regular participant in national and international coding competitions",
        "Qualified round 1 of Meta Hacker Cup 2024 ,secured rank 4284 in round 1 and secured a rank of 3720 in round 2"
      ],
      links: {
        codechef: "https://www.codechef.com/users/puneetprashar",
        leetcode: "https://leetcode.com/u/puneetprashar2003/"
      }
    },
    {
      title: "Technical Workshops & Leadership",
      description: "Organized and conducted technical workshops and mentoring sessions",
      details: [
        "Led workshops on machine learning and data science fundamentals hosted by IEEE RGIPT Student branch for 100+ students",
        "Conducted hands-on sessions for programming beginners at college ",
        "Mentored junior students in project development and research",
        "Tutor for Computer Programming(CS101)  course for first year students at college",
      ]
    },
    {
      title: "Hackathons",
      description: "Active participant in hackathons with a focus on innovative solutions",
      details: [
        "Finalist in Rajasthan Police Hackathon 2024 among 5000+ competing teams",
        "Developed AI-based solutions for financial fraud detection",
        "Implemented ML models for predictive analytics for fraud detection",
        "Collaborated with cross-functional teams to deliver end-to-end solutions"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };
    
    // Handle viewport height for mobile browsers
    const setVhProperty = () => {
      // First we get the viewport height and multiply it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Set it on initial load
    setVhProperty();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setVhProperty);
    
    // Initial scroll position check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setVhProperty);
    };
  }, [navigation]);

  // Import image directly from src folder
  const profileImage = require('./icpc_img1.jpg');
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Puneet Prashar</h1>
          
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-nav">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="home" className="section home-section">
          {/* Background image now outside the container for better mobile visibility */}
          <div 
            className="background-image" 
            style={{
              backgroundImage: `url(${profileImage})`,
            }}
          ></div>
          
          <div className="container">
            <div className="hero-layout">
              <div className="hero-text">
                <h1>Puneet Prashar</h1>
                <p>Data Scientist | Backend Developer</p>
                <p className="location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Bengaluru, Karnataka
                </p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/puneet-prashar/" className="social-link"><LinkedinIcon size={22} /></a>
                  <a href="https://github.com/puneetprashar2003" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="#resume" className="social-link" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>
                    <FileText size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate Data Scientist and Machine Learning Engineer with expertise in developing 
              state-of-the-art models and researching innovative approaches to solve complex problems. 
              Currently pursuing my B.Tech in Mathematics and Computing at RGIPT with a Minor in 
              Business Consulting.
            </p>
            <p>
              My research interests include multimodal learning, temporal entity detection, and adverse drug event 
              detection using cutting-edge AI technologies. I have experience implementing and fine-tuning 
              large language models and deep learning architectures.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Replace your current experience section with this code */}
<section id="experience" className="section">
  <h2>Experience</h2>
  <div className="experience-content">
    {experiences.map((exp, index) => (
      <div key={index} className="experience-item">
        <h3>{exp.title}</h3>
        <p className="company">{exp.company}</p>
        <p className="period">{exp.period}</p>
        <p>{exp.description}</p>
        <ul>
          {exp.highlights.map((highlight, i) => (
            <li key={i}>
              {highlight}
              {/* Add paper link after ECIR paper mention */}
              {highlight.includes("ECIR 2025") && exp.paperLink && (
                <> - <a 
                  href={exp.paperLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="paper-link"
                >
                  View Paper
                </a></>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metrics">{project.metrics}</div>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-content">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <p className="school">{edu.school}</p>
                  </div>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="education-description">{edu.description}</p>
                <div className="course-list">
                  <h4 className="course-list-title">Courses</h4>
                  <div className="courses">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="extracurricular" className="section">
          <h2>Extracurricular Activities</h2>
          <div className="extracurricular-content">
            {extracurricular.map((activity, index) => (
              <div key={index} className="extracurricular-item">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <ul>
                  {activity.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                {activity.links && (
                  <div className="activity-links">
                    {activity.links.github && (
                      <a href={activity.links.github} className="activity-link github" target="_blank" rel="noopener noreferrer">
                        <svg className="profile-link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub Profile
                      </a>
                    )}
                    {activity.links.codechef && (
                      <a href={activity.links.codechef} className="activity-link codechef" target="_blank" rel="noopener noreferrer">
                        <svg className="profile-link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.2574.0039c-.37.0101-.7353.041-1.1.0937-3.8787.5573-7.1867 3.8654-7.7441 7.744-.5574 3.8787 1.6466 7.924 5.2441 9.7384.8714.4359 1.4397 1.3458 1.4434 2.3516v.0058c-.0147.5626.2037 1.0646.5761 1.4434.3724.3787.8745.6068 1.4375.6211h.0118c.5626-.0147 1.0646-.2037 1.4434-.5761.3787-.3724.6068-.8745.6211-1.4375v-.0058c.0037-1.0058.572-1.9157 1.4434-2.3516 3.5975-1.8144 5.8015-5.8597 5.2441-9.7384-.5574-3.8787-3.8654-7.1867-7.7441-7.744-.3647-.0526-.73-.0835-1.1-.0937-.1226-.0034-.2462-.0034-.3688 0-.1225-.0034-.2461-.0034-.3687 0zm.3687.9219c.82-.0232 1.6394.0581 2.4433.2442 3.3938.7835 6.0725 3.4622 6.8554 6.8554.7836 3.3939-.6698 6.9033-3.6679 8.8436-1.4785.7385-2.4159 2.2669-2.4199 3.9355v.0059c-.0058.1554-.0722.2904-.1856.3984-.1133.108-.2513.1632-.4067.1562h-.0059c-.1553.0058-.2904.0722-.3984.1856-.108.1133-.1631.2513-.1562.4067v.0059c-.0019 1.6686-.9393 3.197-2.418 3.9355-2.998 1.9403-6.5093 1.3113-8.8437-1.582-2.3344-2.8934-2.3344-6.9725 0-9.8652 2.3343-2.8934 6.5094-3.5223 9.5074-1.582.7385 1.4785 2.2669 2.4158 3.9355 2.4199h.0059c.1554.0058.2904.0722.3984.1856.108.1133.1632.2513.1562.4067v.0059c.0058.1553.0722.2904.1856.3984.1133.108.2513.1631.4067.1562h.0059c1.6686.0019 3.197.9393 3.9355 2.418 1.9403 2.998 1.3113 6.5093-1.582 8.8437-2.8934 2.3344-6.9725 2.3344-9.8652 0-1.4578-1.6917-3.687-2.3276-5.7793-1.6445-2.0923.683-3.5683 2.5487-3.8164 4.8066-.248 2.258.7759 4.4658 2.6562 5.7441 1.8803 1.2784 4.3183 1.3359 6.2578.1485 1.4012-.8595 3.2045-.5506 4.4336.7637.1234.132.2324.2783.3262.4355 1.4135-.8458 3.0816-.9212 4.5606-.2129 1.4789.7084 2.4724 2.1461 2.6855 3.8066-.1258.0015-.2521.0015-.3789 0-.1258.0015-.2521.0015-.3789 0-1.6797.0004-3.2785-.6895-4.4433-1.9082-.5485.638-1.2537 1.1413-2.0566 1.4512-2.1621.5112-4.4225-.3987-5.6562-2.2793-1.177-1.8001-1.243-4.1265-.1738-6l.0078-.0137-.0078.0137c-1.8956-2.8571-1.5022-6.6511.9414-9.0957 2.4437-2.4446 6.2396-2.8379 9.0976-.9414l.0137.0078-.0137-.0078c1.8735-1.0692 4.1999-1.0032 6 .1738 1.8806 1.2337 2.7905 3.494 2.2793 5.6562-.3099.8029-.8132 1.5081-1.4512 2.0566 1.1839 1.1417 1.8627 2.6945 1.8926 4.3203 1.5266.0046 2.9383-.7913 3.7246-2.0957.7863-1.3044.8323-2.9389.1211-4.2871-.833-1.5316-2.3807-2.5204-4.1035-2.625-1.3559-2.3737-3.976-3.7317-6.7637-3.4903-2.7877.2413-5.1549 2.0427-6.1211 4.6583-.7246-.1276-1.4492-.2546-2.1738-.3808-.9376-1.5643-1.5099-3.3653-1.6563-5.2364-.1464-1.8711.1774-3.7313.9492-5.4355.7718-1.7042 1.9454-3.1722 3.4141-4.2715 1.4686-1.0993 3.1764-1.8017 4.9355-2.0313.5537-.0724 1.1081-.1035 1.6621-.0937z"/>
                        </svg>
                        CodeChef Profile
                      </a>
                    )}
                    {activity.links.leetcode && (
                      <a href={activity.links.leetcode} className="activity-link leetcode" target="_blank" rel="noopener noreferrer">
                        <svg className="profile-link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                        </svg>
                        LeetCode Profile
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section">
  <h2>Resume</h2>
  <div className="resume-content">
    <p>View or download my detailed resume to learn more about my qualifications, 
       projects, and professional experience.</p>
    
    {/* Embedded PDF viewer */}
    <div className="resume-preview">
      <iframe 
        src={resumeViewUrl}
        width="100%" 
        height="600" 
        allow="autoplay"
        title="Resume Preview"
        frameBorder="0"
      ></iframe>
    </div>
    
    <a 
      href={resumeDownloadUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="download-btn"
    >
      <FileText size={20} />
      <span>Download Resume</span>
    </a>
  </div>
</section>
</main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Puneet Prashar. All rights reserved.</p>
          <div className="footer-links">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;