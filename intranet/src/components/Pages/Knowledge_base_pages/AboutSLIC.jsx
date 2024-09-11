import React from 'react';

const AboutSLIC = () => {
  const topics = [
    "Introduction",
    "Branch List",
    "Strengths of the organization",
    "Day to day business activities of Sri Lanka Insurance",
    "Company Vision & Mission Statements"
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F4F4' }}>
      <h2>About SLIC</h2>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ marginBottom: '10px', fontSize: '16px' }}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSLIC;
