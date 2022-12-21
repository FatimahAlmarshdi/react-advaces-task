import React from "react";
import { BrowserRouter, Route, Routes } from "cbmis-client2";

import AppTest from "./AppTest/AppTest";

function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppTest />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  )
}
