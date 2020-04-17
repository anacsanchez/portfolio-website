import { keyframes } from '@emotion/core';

const animations = {
  typing: keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `,
  appear: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `
};

export default animations;

// export const typing = keyframes`
//   from {
//     width: 0%;
//   }
//   to {
//     width: 100%;
//   }
// `;

// export const appear = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;
