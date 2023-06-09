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
      border: 1px solid #fff;
      background: #fff;
      color: #0d263b;
   }
`;

const grayBorder = css`
   color: #0d263b;
   border: 1px solid #E6E9EC;
   &:hover {
      background: #E6E9EC;
   }
`;

const gray = css`
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
      grayBorder,
      blueBorder,
      gray,
   }[props.type]);

export const Button = styled.button`
   padding: 12px ${(props) => props.side};
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;

   font-weight: 400;
   font-size: 14px;
   line-height: 20px;

   background: none;
   border-radius: 2px;

   transition: transform 0.2s, background 0.2s, color 0.2s, border 0.2s;

   &:hover {
      transform: scale(1.02);
   }

   &:active {
      transform: scale(1);
   }

   ${buttonStyle || white}
`;
