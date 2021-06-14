import React, {Fragment} from 'react';
import {css} from '@emotion/core';
import {colors, sectionHeaderAndFooterStyles, typingAnimationInMs} from '../styles';

const Skills = () => {
	const animationDelay = 50;
	const animationDuration = 600;

	let currentAnimationIndex = 0;

	const getCurrentSkillAnimation = () => typingAnimationInMs(currentAnimationIndex++, animationDelay, 100, animationDuration)

	return (
		<Fragment>
			<div className="section-header" css={sectionHeaderAndFooterStyles}>
				====== SKILLS ======
			</div>
			<div css={{display: 'flex', flexDirection: 'column'}}>
				{
                  Object.entries(skillsObj).map(([level, skills]) => (
							<ul id={`${level}-skills`}
								key={level}
								css={[listStyles, getCurrentSkillAnimation()]}
							>
								<li css={[listTitleStyles, getCurrentSkillAnimation()]}
								>
									{`${level}:`}
								</li>
								{
									skills.map(currSkill => {
										return (
											<li key={currSkill}
												css={getCurrentSkillAnimation()}
											>
												• {currSkill}
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
				 css={[sectionHeaderAndFooterStyles, getCurrentSkillAnimation()]}>
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
