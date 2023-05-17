import React from "react";
import { Button } from "../../interaction/style";
import { Header } from "./style";

export default function Head() {
   return (
      <Header>
         <a href="#">
            <i className="icon-logo"></i>
         </a>
         <nav>
            <ul>
               <a href="#">
                  <li>Home</li>
               </a>
               <a href="#">
                  <li>Properties</li>
               </a>
               <a href="#">
                  <li>Contacts</li>
               </a>
            </ul>
         </nav>
         <Button type="white" side="40px">
            Login
         </Button>
      </Header>
   );
}
