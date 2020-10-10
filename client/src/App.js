import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./components/navbar/NavBar";

import MainBody from "./components/mainbody/MainBody";

function App() {
   const [postData, setPostData] = useState(null);
   const getPostData = (data) => {
      setPostData(data);
   };

   return (
      <React.Fragment>
         <NavBar key="navbar" postdata={getPostData} />
         <MainBody key="main_body" updatedData={postData} />
      </React.Fragment>
   );
}

export default App;
