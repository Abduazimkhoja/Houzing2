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
   justify-content: ${({ stats }) => stats[1]};
   gap: ${({ stats }) => stats[2]};
`;

export const Title = styled.div`
   font-weight: 600;
   font-size: 28px;
   line-height: 36px;

   text-align: center;
   letter-spacing: -0.02em;
   color: #0d263b;
`;

export const SubTitle = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;

   color: ${({ color }) => color || "#696969"};
`;
