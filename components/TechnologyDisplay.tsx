"use client";

import { useState } from 'react';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiShadcnui } from 'react-icons/si';

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Shadcn UI', icon: SiShadcnui }, // Replace with appropriate icon
  { name: 'TypeScript', icon: SiTypescript },
];

const TechnologyDisplay: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="text-center mb-[120px] mt-[100px]">
      <h1 className="sm:text-6xl text-4xl font-bold">Built for developers</h1>
      <p className="text-gray-700 dark:text-gray-300 md:text-lg text-md my-6">
        No need to learn new mental models and frameworks. Stockify works with <br className='sm:block hidden'/> the frontend technologies that developers are most familiar with.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-4 gap-6 justify-items-center md:flex md:justify-center">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="cursor-pointer text-center"
          >
            <tech.icon className="text-black dark:text-white h-20 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyDisplay;
