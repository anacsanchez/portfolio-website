import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles, typingAnimationInMs } from '../styles';

const Skills = () => {

  const animationDuration = 25;

  let currentAnimationDelay = 0;

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ====== SKILLS ======
      </div>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        {
          Object.keys(skillsObj).map(currKey => {
            return (
              <ul id={`${currKey}-skills`}
                key={currKey}
                css={[
                  listStyles,
                  typingAnimationInMs(currentAnimationDelay++, animationDuration)
                ]}
              >
                <li
                  css={[
                    listTitleStyles,
                    typingAnimationInMs(currentAnimationDelay++, animationDuration)
                  ]}
                >
                  {`${currKey}:`}
                </li>
                {
                  skillsObj[currKey].map(currSkill => {
                    return (
                      <li key={currSkill}
                        css={typingAnimationInMs(currentAnimationDelay++, animationDuration)}
                      >
                        •  {currSkill}
                      </li>
                    );
                  })
                }
              </ul>
            );
          })
        }
      </div>
      <div className="section-footer" css={sectionHeaderAndFooterStyles}>
        ======= END ========
      </div>
    </Fragment>
  );
};

const listTitleStyles = css({
  color: colors.teal,
  letterSpacing: '1px',
  padding: '4px 0px',
  textTransform: 'capitalize'
});

const listStyles = css({
  padding: '6px',
  fontSize: '28px',
  color: colors.white,
  wordSpacing: '3px',
  letterSpacing: '1px',
  lineHeight: '90%'
});

export default Skills;

const skillsObj = {
  proficient: [
    'Javascript',
    'React.js',
    'Redux',
    'Node.js',
    'SQL',
    'Git',
    'Sequelize',
    'Postgres',
    'Mocha',
    'HTML'
  ],
  knowledgeable: [
    'Docker',
    'GraphQL',
    'Apollo',
    'Kubernetes',
    'Redis'
  ]
};
