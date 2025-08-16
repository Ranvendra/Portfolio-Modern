import React from 'react';

// --- Helper Components ---

// Arrow icon for the project link button
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- Main Project Card Component ---
const ProjectCard = ({ title, tags, imageUrl, projectUrl = "#" }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl overflow-hidden group transition-all duration-300 ease-in-out hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-900/40">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/0f172a/94a3b8?text=Project+Image";
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold text-sky-300 bg-sky-900/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-sky-500 text-white p-3 rounded-full group-hover:bg-sky-400 transition-colors duration-300 ease-in-out"
            aria-label={`View ${title} project`}
          >
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Main Portfolio Component ---
export default function App() {
  // Mock data for the projects, mirroring the provided image
  const projects = [
    {
      title: "XYZ-1",
      tags: ["...", "...", "..."],
      imageUrl: "htps://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "XYZ-2",
      tags: ["...", "..."],
      imageUrl: "htps://images.unsplash.com/photo-1526778548025-13c5b644a211?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "XYZ-3",
      tags: ["...", "..."],
      imageUrl: "htts://images.unsplash.com/photo-1490645935967-10de6ba17021?q=80&w=2053&auto=format&fit=crop",
    },
    {
      title: "XYZ-4",
      tags: ["...", "..."],
      imageUrl: "htts://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    },
    {
      title: "XYZ-5",
      tags: ["...", "..."],
      imageUrl: "htt://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "XYZ-6",
      tags: ["...", "..."],
      imageUrl: "htts://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-[#340064] min-h-screen w-full font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                My {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                    Projects
                </span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                {'<-- Coming Soon -->'}
            </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
