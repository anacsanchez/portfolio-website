import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { colors, sectionHeaderAndFooterStyles, typingAnimationInMs, typingAnimationContentStyles } from '../styles';

const Skills = () => {

  const animationDuration = 400;
  const baseDelay = 70;

  const skillLevels = Object.keys(skillsObj);
  const totalLength = skillLevels.reduce((length, currSkillLevel) => skillsObj[currSkillLevel].length + length, 0);

  return (
    <Fragment>
      <div className="section-header" css={sectionHeaderAndFooterStyles}>
        ====== SKILLS ======
      </div>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        {
          skillLevels.map((currSkillLevel, i) => (
              <ul id={`${currSkillLevel}-skills`} key={currSkillLevel} css={listStyles}>
                <li css={[
                    listTitleStyles,
                    typingAnimationInMs((i + (skillsObj[skillLevels[i-1]]?.length ?? 0)), baseDelay, 100, animationDuration)
                  ]}
                >
                  {`${currSkillLevel}:`}
                </li>
                {
                  skillsObj[currSkillLevel].map((currSkill, j) => {
                    return (
                      <li key={currSkill}
                        css={[
                          listItemStyles,
                          typingAnimationInMs((j + 1 + (skillsObj[skillLevels[i-1]]?.length ?? 0)), baseDelay, 100, animationDuration)
                        ]}
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
      <div className="section-footer"
          css={[
            sectionHeaderAndFooterStyles,
            typingAnimationInMs(totalLength, baseDelay, 100, animationDuration)
          ]}
        >
        ======= END ========
      </div>
    </Fragment>
  );
};

const listTitleStyles = css({
  color: colors.teal,
  letterSpacing: '1px',
  margin: '12px 4px 6px 6px',
  textTransform: 'capitalize',
  fontSize: '30px',
  '& *': typingAnimationContentStyles
});

const listStyles = css({
  padding: '0px 0px 8px 0px'
});

const listItemStyles = css({
  color: colors.white,
  fontSize: '30px',
  wordSpacing: '3px',
  letterSpacing: '1px',
  lineHeight: '100%',
  padding: '0px 0px 0px 6px',
  '& *': typingAnimationContentStyles,
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
    'HTML'
  ],
  knowledgeable: [
    'GraphQL',
    'Apollo',
    'Kubernetes',
    'Redis'
  ]
};

export default Skills;
