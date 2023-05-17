import styled, { css, keyframes } from "styled-components";

export const Header = styled.header`
   height: inherit;

   display: flex;
   align-items: center;
   justify-content: space-between;

   .icon-logo {
      font-size: 36px;
   }

   ul {
      display: flex;
      gap: 64px;

      & * {
         color: #fff;
         &:hover {
            transform: scale(1.01);
            opacity: .9;
         }
         &:active {
            transform: scale(1);
         }
      }
   }
`;

