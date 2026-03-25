import profile from "./assets/profile.jpg";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen px-6 md:px-16 lg:px-24 py-10 space-y-20">

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Sai Charan Valgula</h1>

          <p className="text-gray-400 mt-2 text-lg">
             Python | Java | HTML | CSS | JAVASCRIPT | C-LANGUAGE
          </p>

          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-5 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src={profile}
          alt="Sai Charan"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </section>

      {/* ABOUT */}
      <section className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300 max-w-2xl">
         I am a motivated Computer Science graduate from SR University with a strong academic foundation (CGPA: 8.14) and a passion for building intelligent and scalable solutions. I have hands-on experience in developing machine learning models, web applications, and system-level projects, with a focus on solving real-world problems through technology.

I have worked on diverse projects, including a neural network-based medical analysis system with high accuracy, a machine learning solution for carbon emission monitoring, and a Flask-based web application for real-time predictions. My technical expertise spans Python, Java, C, SQL, and web technologies, along with a solid understanding of data structures, algorithms, and computer networks.

I am particularly interested in AI/ML, software development, and problem-solving, and I continuously strive to enhance my skills through hands-on projects and coding practice. I am eager to contribute to innovative teams where I can learn, grow, and make a meaningful impact.
        </p>
      </section>

      {/* SKILLS */}
      <section className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Java",
            "C",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "DSA",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 rounded-lg text-sm hover:bg-blue-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

     
    {/* PROJECTS */}
<section id="projects" className="w-full max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4">Projects</h2>

  <div className="grid gap-5">

    {/* Project 1 */}
    <div className="border p-4 rounded-lg hover:scale-105 transition duration-300">
      <h3 className="font-bold text-lg">MRI Analysis System</h3>
      <p className="text-gray-400 mt-1">
        Developed a deep learning-based medical imaging system using 3D CNN and ResNet to analyze MRI scans with ~95% accuracy. Built a Flask web application for real-time image upload, prediction, and diagnostic reporting. This project demonstrates my ability to integrate AI/ML with full-stack development to deliver practical healthcare solutions.
      </p>

      <div className="mt-3 flex gap-4">
        <a
          href="https://github.com/Saicharan01072003/Multi-level-medical-analysis-Brain-Tumor-"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
        >
          💻 GitHub
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="border p-4 rounded-lg hover:scale-105 transition duration-300">
      <h3 className="font-bold text-lg">To-Do Task Board</h3>
      <p className="text-gray-400 mt-1">
        Built a responsive task management application using HTML, CSS, and JavaScript with localStorage integration to persist tasks across sessions, ensuring seamless user experience.
      </p>

      <div className="mt-3 flex gap-4">
        <a
          href="https://github.com/Saicharan01072003/Task-Board"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
        >
          💻 GitHub
        </a>

        <a
          href="https://task-board-omega-brown.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border border-gray-500 rounded hover:bg-gray-800"
        >
          🌐 Live Demo
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="border p-4 rounded-lg hover:scale-105 transition duration-300">
      <h3 className="font-bold text-lg">Carbon Emission ML</h3>
      <p className="text-gray-400 mt-1">
        Developed a machine learning-based system to monitor and authorize CO₂ emissions using Python and ML models. Implemented data preprocessing and trained models on large datasets for accurate prediction and environmental compliance.
      </p>
    </div>

    {/* Project 4 */}
    <div className="border p-4 rounded-lg hover:scale-105 transition duration-300">
      <h3 className="font-bold text-lg">Library Management System</h3>
      <p className="text-gray-400 mt-1">
        Designed and implemented a C-based library management system to handle book tracking, member records, and transactions using structured data and file handling techniques.
      </p>
    </div>

  </div>
</section>
{/* EDUCATION */}
<section className="w-full max-w-5xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6">Education</h2>

  <div className="relative border-l-4 border-blue-500 ml-4 space-y-8">

    {/* B.Tech */}
    <div data-aos="fade-up" className="ml-6">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5"></div>
      <h3 className="font-bold text-lg">🎓 B.Tech in Computer Science</h3>
      <p className="text-gray-400">
        SR University, Telangana (2021 – 2025)
      </p>
      <p className="text-gray-300">CGPA: 8.14</p>
    </div>

    {/* Intermediate */}
    <div data-aos="fade-up" className="ml-6">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5"></div>
      <h3 className="font-bold text-lg">📘 Intermediate (MPC)</h3>
      <p className="text-gray-400">
        SR Edu Center, Hanamkonda (2019 – 2021)
      </p>
      <p className="text-gray-300">Percentage: 88%</p>
    </div>

    {/* SSC */}
    <div data-aos="fade-up" className="ml-6">
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5"></div>
      <h3 className="font-bold text-lg">🏫 SSC</h3>
      <p className="text-gray-400">
        SPR School of Excellence, Hanamkonda (2018 – 2019)
      </p>
      <p className="text-gray-300">GPA: 9.5</p>
    </div>

  </div>
</section>

    {/* CONTACT */}
<section className="w-full text-center">
  <h2 className="text-2xl font-semibold mb-6">Contact</h2>

  {/* Email */}
  <div className="flex justify-center items-center gap-2 mb-2">
    <span className="text-blue-400">
      <FaEnvelope />
    </span>
    <a
      href="mailto:charanvalgula2003@gmail.com"
      className="hover:underline"
    >
      charanvalgula2003@gmail.com
    </a>
  </div>

  {/* Phone */}
  <div className="flex justify-center items-center gap-2 mb-4">
    <span className="text-blue-400">
      <FaPhone />
    </span>
    <a
      href="tel:9390414939"
      className="hover:underline"
    >
      +91 9390414939
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center gap-8 text-xl mt-4">

    <a
      href="https://github.com/Saicharan01072003"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-400 transition transform hover:scale-125"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/saicharanvalgula/"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-400 transition transform hover:scale-125"
    >
      <FaLinkedin />
    </a>

  </div>
</section>

    </div>
  );
}