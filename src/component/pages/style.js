import styled from "styled-components";

export const Container = styled.div`
   margin: 0 auto;
   width: 1180px;
`;

export const FullBackground = styled.div`
   display: flex;
   align-items: center;
   
   background: ${({ bg }) => bg};
   height: ${({ height }) => height};
`;
