import React from "react";
import { SearchInput } from "./style";
import { Button } from "../../details/button/style";

export default function Search() {
   return (
      <>
         <SearchInput>
            <i className="icon-search"></i>
            <input
               type="text"
               placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
         </SearchInput>
         <Button type="grayBorder" side="16px">
            <i className="icon-filter"></i>
            Advanced
         </Button>
         <Button type="blue" side="54px">
            Search
            <i className="icon-loupe"></i>
         </Button>
      </>
   );
}
