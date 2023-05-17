import React from "react";
import { houseInfo } from "../../../server";
import { FullBackground, SubTitle } from "../../pages/style";
import {
   IntroBg,
   IntroHouse,
   IntroPrice,
   IntroTitle,
   IntroWrap,
} from "./style";
import { Has } from "../../details/has/style";
import { Button } from "../../details/button/style";

export default function Intro() {
   return (
      <>
         <IntroWrap>
            {houseInfo.map(
               ({
                  id,
                  title,
                  address,
                  price,
                  beds,
                  baths,
                  garages,
                  area,
                  image: { url, alt },
               }) => (
                  <IntroHouse key={id} url={url}>
                     <h2 className="intro__title">{title}</h2>
                     <SubTitle>{address}</SubTitle>
                     <Has margin = {["24px"]}>
                        <div>
                           <i className="icon-bed"></i>
                           {beds} beds
                        </div>
                        <div>
                           <i className="icon-bath"></i>
                           {baths} baths
                        </div>
                        <div>
                           <i className="icon-car"></i>
                           {garages} garages
                        </div>
                        <div>
                           <i className="icon-ruler"></i>
                           {area} Sq Ft
                        </div>
                     </Has>
                     <div className="intro__price">{price}</div>
                     <Button type="white" side="40px">
                        Read more
                     </Button>
                  </IntroHouse>
               )
            )}
         </IntroWrap>
      </>
   );
}
