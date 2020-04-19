export const navOptions = {
  about: {
    name: 'about' ,
    keyCode: 'a'
  },
  skills: {
    name: 'skills',
    keyCode: 's'
  },
  projects: {
    name: 'projects',
    keyCode: 'p'
  },
  resume: {
    name: 'resume',
    keyCode: 'r'
  },
};

export const linkOptions = {
  github: {
    name: 'github',
    keyCode: 'g',
    url: 'https://github.com/anacsanchez'
  },
  linkedIn: {
    name: 'linkedIn',
    keyCode: 'l',
    url: 'https://www.linkedin.com/in/ana-c-sanchez/'
  }
};

const generateKeyCodesObject = (options, propValue) => Object.keys(options).reduce((keyObj, optionKey) => {
  const singleOption = options[optionKey];
  const { keyCode } = singleOption;
  return { [keyCode]: singleOption[propValue], ...keyObj };
}, {});

export const navKeyCodes = generateKeyCodesObject(navOptions, 'name');
export const linkKeyCodes = generateKeyCodesObject(linkOptions, 'url');

