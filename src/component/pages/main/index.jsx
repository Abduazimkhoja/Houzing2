import React from "react";
import Header from "../../blocks/header";
import Search from "../../blocks/search";
import Intro from "../../blocks/intro";
import Recommended from "../../blocks/recommended";
import Category from "../../blocks/category";

export default function Main() {
   return <div>
      <Header/>
      <Search/>
      <Intro/>
      <Recommended/>
      <Category/>
   </div>;
}
