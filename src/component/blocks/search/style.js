import styled from "styled-components";

export const SearchInput = styled.div`
   width: 100%;
   height: 44px;
   padding: 10px 16px;

   border: 1px solid #e6e9ec;
   border-radius: 2px;
   background: #fff;

   display: flex;
   align-items: center;
   gap: 8px;

   &:focus-within,
   &:hover {
      border: 1px solid #0061DF;
   }

   input {
      width: inherit;
   }
`;