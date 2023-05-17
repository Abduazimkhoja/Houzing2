import styled, { css } from "styled-components";

const blue = css`
   color: #fff;
   background: #0061df;
   &:hover {
      background: #0052bd;
   }
`;

const white = css`
   color: #fff;
   border: 1px solid #fff;
   &:hover {
      border: 1px solid #0061df;
      background: #0061df;
   }
`;

const whiteBorder = css`
   color: #0d263b;
   border: 1px solid #fff;
   &:hover {
      background: #fff;
   }
`;

const grayBorder = css`
   color: #0d263b;
   border: 1px solid #0d263b;
   &:hover {
      color: #fff;
      background: #0d263b;
   }
`;

const blueBorder = css`
   color: #0061df;
   border: 1px solid #0061df;
   &:hover {
      color: #fff;
      background: #0061df;
   }
`;

const buttonStyle = (props) =>
   ({
      blue,
      white,
      whiteBorder,
      blueBorder,
      grayBorder,
   }[props.type]);

export const Button = styled.button`
   padding: 12px ${(props) => props.side};

   font-weight: 400;
   font-size: 14px;
   line-height: 20px;

   background: none;
   border-radius: 2px;

   transition: transform 0.2s, background 0.2s, color 0.2s, border 0.2s;

   &:hover {
      transform: scale(1.05);
   }

   &:active {
      transform: scale(1);
   }

   ${buttonStyle}
`;

// const buttonType = ({ type }) =>
//    ({
//       white: `border: 1px solid #fff; color: #fff;`,
//       whiteBorder: `border: 1px solid #fff; color: #0D263B;`,
//       grayBorder: `border: 1px solid #0D263B; color: #0D263B;`,
//       blue: `background: #0061DF; color: #fff`,
//       blueBorder: `border: 1px solid #0061DF; color: #0061DF;`,
//    }[type || "white"]);
