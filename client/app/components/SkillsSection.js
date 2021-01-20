import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles, typingAnimationInMs } from '../styles';

const Skills = () => {

  const animationDuration = 25;

  let currentAnimationDelay = 0;
  const skillLevels = Object.keys(skillsObj);
  const totalLength = skillLevels.reduce((length, currSkillLevel) => skillsObj[currSkillLevel].length + length, 0);

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ====== SKILLS ======
      </div>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        {
          skillLevels.map(currKey => (
              <ul id={`${currKey}-skills`}
                key={currKey}
                css={[
                  listStyles,
                  typingAnimationInMs(currentAnimationDelay++, animationDuration)
                ]}
              >
                <li css={[
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
            )
          )
        }
      </div>
      <div className="section-footer" css={[sectionHeaderAndFooterStyles, typingAnimationInMs(currentAnimationDelay+totalLength, animationDuration)]}>
        ======= END ========
      </div>
    </Fragment>
  );
};

const listTitleStyles = css({
  color: colors.teal,
  letterSpacing: '1px',
  padding: '4px 0px',
  textTransform: 'capitalize',
  fontSize: '30px'
});

const listStyles = css({
  padding: '6px',
  fontSize: '30px',
  color: colors.white,
  wordSpacing: '3px',
  letterSpacing: '1px',
  lineHeight: '100%'
});

const skillsObj = {
  proficient: [
    'Javascript',
    'React.js',
    'Node.js',
    'SQL',
    'Postgres',
    'Docker',
    'Git',
    'Sequelize',
    'Redux',
    'Mocha',
    'HTML',
    'CSS'
  ],
  knowledgeable: [
    'GraphQL',
    'Apollo',
    'Kubernetes',
    'Redis'
  ]
};

export default Skills;
