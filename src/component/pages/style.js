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

export const Wrap = styled.div`
   display: ${({ stats }) => stats[0]};
   align-items: ${({ stats }) => stats[1]};
   gap: ${({ stats }) => stats[2]};
`;
