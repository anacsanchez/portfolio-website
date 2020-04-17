import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-header">===== SKILLS =====</div>
      <div className="parallel-list-container">
        <ul id="proficient-skills">
          <li className="sub-list-title">Proficient:</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Sequelize</li>
          <li>Postgres</li>
          <li>Mocha</li>
          <li>HTML</li>
        </ul>
        <ul id="knowledgeable-skills">
          <li className="sub-list-title">Knowledgeable:</li>
          <li>Docker</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>Kubernetes</li>
          <li>Redis</li>
        </ul>
      </div>
      <div className="section-footer">====== END =======</div>
    </section>
  );
};

export default Skills;

