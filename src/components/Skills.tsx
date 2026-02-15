import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical',
      skills: [
        'Python (Basics to Intermediate)',
        'Web Development (HTML, CSS, JavaScript)',
        'React (Frontend Development)',
        'AI & Emerging Tech Awareness',
        'Project Ideation & Rapid Prototyping',
      ],
    },
    {
      title: 'Startup & Product',
      skills: [
        'Community Growth Strategy',
        'User Engagement & Onboarding',
        'Problem Discovery & Solution Mapping',
        'Design Thinking',
        'Lean Canvas & Startup Fundamentals',
      ],
    },
    {
      title: 'Leadership & Communication',
      skills: [
        'Leadership & Communication',
        'Community Building',
        'Event & Webinar Coordination',
        'Public Speaking & Presentation',
        'Team Collaboration',
        'Stakeholder Communication',
      ],
    },
  ];

  return (
    <section id="skills" className="section-glass p-7 md:p-8 my-5 fade-in-up">
      <h2 className="text-3xl font-bold mb-6 text-[#e2e8f0]">Skills</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[rgba(15,23,42,0.65)] border border-[rgba(148,163,184,0.25)] rounded-xl p-4 hover:-translate-y-1 hover:border-[#22d3ee] hover:shadow-lg transition-all"
          >
            <h3 className="text-[#93c5fd] font-semibold mb-3">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="border border-[rgba(100,116,139,0.4)] rounded-lg px-2.5 py-2 text-[#dbeafe] text-sm bg-[rgba(2,6,23,0.45)] hover:bg-[rgba(34,211,238,0.1)] hover:border-[#22d3ee] transition-all"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
