import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles } from '../styles';

const Skills = () => {

  const listTitleStyles = css({
    color: colors.teal,
    letterSpacing: '1px',
    padding: '4px 0px'
  });

  const listStyles = css({
    padding: '6px 6px 6px 0',
    marginRight: '26px',
    fontSize: '28px',
    color: colors.white
  });

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ===== SKILLS =====
      </div>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <ul id="proficient-skills" css={listStyles}>
          <li css={listTitleStyles}>Proficient:</li>
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
        <ul id="knowledgeable-skills" css={listStyles}>
          <li css={listTitleStyles}>Knowledgeable:</li>
          <li>Docker</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>Kubernetes</li>
          <li>Redis</li>
        </ul>
      </div>
      <div className="section-footer" css={sectionHeaderAndFooterStyles}>
        ====== END =======
      </div>
    </Fragment>
  );
};

export default Skills;

