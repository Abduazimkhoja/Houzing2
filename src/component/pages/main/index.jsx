import React from "react";

import Head from "../../blocks/header";
import Search from "../../blocks/search";
import Intro from "../../blocks/intro";
import Recommended from "../../blocks/recommended";
import Category from "../../blocks/category";
import { Button } from "../../details/button/style";
import { Container, FullBackground, Wrap } from "../style";

export default function Main() {
   return (
      <div>
         <FullBackground height="64px" bg="#0d263b">
            <Container>
               <Head />
            </Container>
         </FullBackground>
         <FullBackground height = "64px">
            <Container>
               <Wrap stats={["flex", "center", "20px"]}>
                  <Search />
               </Wrap>
            </Container>
         </FullBackground>
         <Intro />
         <Recommended />
         <Category />
      </div>
   );
}
