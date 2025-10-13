import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { TProject } from "../../types";
import { feedmePng } from "../../assets";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Large Project Image - Much bigger and more prominent */}
      <div className="h-[500px] w-full overflow-hidden bg-white p-6">
        <img
          src={name === 'FeedMe' ? feedmePng : image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl scale-110 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Content - Reduced size */}
      <div className="p-6">
        {/* Category Badge - Smaller */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-purple-500 text-sm font-medium">Technology</span>
        </div>

        {/* Project Title - Smaller */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
          {name}
        </h3>

        {/* Project Description - Condensed */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description.length > 150 ? `${description.substring(0, 150)}...` : description}
        </p>

        {/* Technology Tags - Smaller */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Project Footer - Compact */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 font-medium">
            {index === 0 ? 'Nov 2024 - Dec 2024' :
              index === 1 ? 'Sep 2024 - Oct 2024' :
                index === 2 ? 'Dec 2024 - Jan 2025' :
                  index === 3 ? 'Aug 2024 - Sep 2024' :
                    index === 4 ? 'Oct 2024 - Nov 2024' :
                      'Jan 2024 - Feb 2024'}
          </div>
          <button
            onClick={() => window.open(sourceCodeLink, "_blank")}
            className="flex items-center gap-1 text-purple-500 hover:text-purple-600 text-sm font-medium transition-colors duration-200"
          >
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      {/* Full width container - no max-width constraint */}
      <div className="w-full px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Introduction</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a second-year Systems Engineering student at the University of Guelph who loves exploring technology, solving problems, and building creative tools. I spend most of my free time at hackathons like SpurHacks, GuelphHacks, Qloo Hacks, and BoltHacks, where I get to experiment, collaborate, and bring ideas to life through code.
            </p>
          </div>
        </div>

        {/* Projects - Single column, full width */}
        {projects && projects.length > 0 ? (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
