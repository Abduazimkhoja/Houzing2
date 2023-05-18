import styled, { css } from "styled-components";

const circleOpacity = css`
   border-radius: 50%;
   background: #ffffff02;
   &:hover {
      background: #ffffff10;
   }
`;

const circleWhite = css`
   border-radius: 50%;
   background: #ffffff;
   border: 1px solid #e6e9ec;
   box-shadow: 0px 0px 30px #b0b0b0;

   &:hover {
      box-shadow: 0px 0px 30px #b0b0b0;
   }

   i {
      color: #0d263b;
   }
`;

const squareBlue = css`
   background: #0061df;
   border-radius: 3px;

   &:hover {
      background: #024cad;
      border-radius: 1px;
   }

   i {
      transform: rotate(90deg);
   }
`;

const arrowStyle = ({ type }) =>
   ({
      circleOpacity,
      circleWhite,
      squareBlue,
   }[type || "circleWhite"]);

export const Arrow = styled.button`
   width: 45px;
   height: 45px;

   position: absolute;
   ${(props) => (props.right ? "right: 30px;" : "left: 30px;")}

   display: flex;
   align-items: center;
   justify-content: center;

   &:hover {
      transform: scale(1.02);
   }

   &:active {
      transform: scale(1);
   }

   i {
      color: #fff;
      font-size: 12px;
      ${(props) => props.right && "transform: rotate(180deg);"}
   }

   ${arrowStyle}
`;
