export {};
// export const PortfolioItemContainer = styled(ReactChildContainer)`
//   width: 80%;
//   margin: 10rem auto 0;
//   height: 45rem;
//   @media screen and (min-width: 640px) {
//     width: 80%;
//     height: 60rem;
//     max-width: 92rem;
//     margin: 5.5rem 0 0;
//     box-shadow: 0px 11px 36px 12px rgba(0, 0, 0, 0.23);
//     opacity: 1;
//     position: relative;
//     overflow: hidden;
//     ${({ visible }) => createAnimation(visible)};
//   }
// `;

// export const PortfolioItemMask = styled(ReactChildContainer)`
//   display: none;
//   @media screen and (min-width: 640px) {
//     display: block;
//     width: 100%;
//     height: 100%;
//     z-index: 4;
//     top: 0;
//     left: 0;
//     position: absolute;
//     background: #ffbf00;
//     ${({ visible }) => createMaskAnimation(visible)};
//   }
// `;

// const slideInVisible = keyframes`
//   0% {
//     opacity: 1;
//     transform: translateX(15rem) translateY(16rem) scale(0.7);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(30rem) translateY(15.5rem) scale(1);
//   }
// `;

// const slideOutHidden = keyframes`
//   0% {
//     transform: translateX(40rem);
//   }
//   100% {
//     opacity: 0;
//     transform: translateX(-8rem);
//   }
// `;

// const slideMask = keyframes`
//   0% {
//     opacity: 1;
//     transform: translateX(0);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(100%);
//   }
// `;

// const createAnimation = (isVisible: boolean) => {
//   const result = isVisible
//     ? css`
//         animation: ${slideInVisible} 1s forwards
//           cubic-bezier(0.2, 0.09, 0.25, 0.9);
//       `
//     : css`
//         animation: ${slideOutHidden} 1s forwards
//           cubic-bezier(0.2, 0.09, 0.25, 0.9);
//       `;

//   return result;
// };

// const createMaskAnimation = (isVisible: boolean) => {
//   const result = isVisible
//     ? css`
//         animation: ${slideMask} 1s 0.5s forwards;
//       `
//     : '';

//   return result;
// };
