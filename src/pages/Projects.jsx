import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const projects = [
  {
    title: "WorkBoard App",
    description: "A MERN-based app to connect workers and customers easily.",
    image:
      "https://t3.ftcdn.net/jpg/04/06/91/94/240_F_406919447_kAcC5gdh1rpYlVxwMfHtUTGf24PUYSq8.jpg",
    link: "https://workboard.in",
  },
  {
    title: "Workboard.work",
    description: "A MERN-based app of workboard worker page",
    image:
      "https://www.workerboard.work/static/media/workboard-main-image-removebg.be8208f3afb475901af2.png",
    link: "https://www.workerboard.work/",
  },
  {
    title: "E-commerce Site",
    description: "A full-stack e-commerce website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKod8YpJ6xW7K--UzQ06ZzRUtGu4nRpa2Iv64_znqkQuCHqTx9Xh2jXC9qCElXe97923s&usqp=CAU",
    link: "https://ecommerce-mu-pink.vercel.app/",
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: index * 0.2 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -100,
        transition: { duration: 0.6 },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: -100 }}
      className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 border-2 border-blue-950"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-14">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
