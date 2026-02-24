import React from 'react';
import { popularSkills } from '../data/mockData';

const PopularSkills = () => {
  return (
    <section className="py-12 bg-[#1c1d1f]">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="text-2xl md:text-[1.75rem] font-bold text-white mb-2">
          Popular Skills
        </h2>

        {/* Featured skill */}
        <div className="mb-8 mt-4">
          <div className="bg-[#2d2f31] border border-[#3e4143] p-4 inline-block">
            <h3 className="text-white font-bold text-base">
              ChatGPT is a top skill
            </h3>
            <a href="#" className="text-[#c0c4fc] text-sm hover:text-white underline underline-offset-4 mt-1 inline-block">
              See ChatGPT courses
            </a>
            <span className="text-[#6a6f73] text-xs block mt-1">{popularSkills.ChatGPT.learners} learners</span>
          </div>
        </div>

        <a href="#" className="text-[#c0c4fc] text-sm font-bold hover:text-white underline underline-offset-4 mb-8 block">
          Show all trending skills
        </a>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {Object.entries(popularSkills)
            .filter(([key]) => key !== 'ChatGPT')
            .map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-white font-bold text-base mb-4">{category}</h3>
                <div className="space-y-3">
                  {Array.isArray(skills) && skills.map((skill, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <span className="text-[#c0c4fc] text-sm group-hover:text-white underline underline-offset-4">
                        {skill.name}
                      </span>
                      <span className="text-[#6a6f73] text-xs">{skill.learners} learners</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSkills;
