import styled from "styled-components";

export const IntroHouse = styled.div`
   min-width: 100vw;
   height: calc(100vh - 128px);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(5, 5, 5, 0.7)),
      url(${({ url }) => url}) center / cover no-repeat;

   .intro {
      &__title {
         margin-bottom: 8px;

         font-weight: 700;
         font-size: 44px;
         line-height: 48px;

         letter-spacing: -0.02em;

         color: #ffffff;
      }

      &__price {
         margin-bottom: 48px;

         font-weight: 600;
         font-size: 28px;
         line-height: 36px;

         letter-spacing: -0.02em;

         color: #ffffff;
      }
   }
`;

export const IntroWrap = styled.div`
   display: flex;
   position: relative;
`;
