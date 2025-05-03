"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { projects } from "../../../../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projectThemeGradients: Record<string, { live: string; github: string }> =
  {
    "food-unity": {
      live: "from-green-500 to-emerald-600",
      github: "from-gray-800 to-gray-600",
    },
    "medimart": {
      live: "from-pink-500 to-rose-500",
      github: "from-gray-800 to-gray-600",
    },
    "bike-store": {
      live: "from-blue-500 to-indigo-600",
      github: "from-gray-800 to-gray-600",
    },
  };

const ProjectDetails = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : params?.id?.[0];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Project not found.
      </div>
    );
  }

  const gradients = projectThemeGradients[project.id] || {
    live: "from-indigo-500 to-purple-600",
    github: "from-gray-800 to-gray-600",
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-100 via-white to-sky-200 py-20 px-6 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl hover:scale-[1.01] transition-transform">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 mb-6">
          {project.title}
        </h1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-full rounded-xl mb-6"
        >
          {(Array.isArray(project.image) ? project.image : [project.image]).map(
            (img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  alt={`${project.title}-${i + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                  unoptimized
                />
              </SwiperSlide>
            )
          )}
        </Swiper>

        <article className="text-gray-800 space-y-5 leading-relaxed text-lg">
          <p>{project.details}</p>
          <ul className="list-disc ml-6 space-y-1">
            {project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </article>

        <div className="flex flex-wrap gap-4 mt-8">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm px-4 py-1.5 bg-gradient-to-r ${gradients.live} text-white rounded-full font-medium hover:opacity-90 transition`}
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm px-4 py-1.5 bg-gradient-to-r ${gradients.github} text-white rounded-full font-medium hover:opacity-90 transition`}
            >
              <FaGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
