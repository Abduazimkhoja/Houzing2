import styled from "styled-components";

export const Has = styled.div`
   display: flex;
   align-items: center;
   gap: ${({gap}) => gap || "24px"};
   margin: ${({margin}) => margin || "0"};

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      text-transform: capitalize;

      color: #fff;
   }
`