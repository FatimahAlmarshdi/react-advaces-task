import React from 'react'
import Project from "./Router";
import AppProvider from "../contextapi/contexts/AppContext";

function ProjectWebsite() {
  return (
    <AppProvider>
        <Project />
    </AppProvider>
  )
}

export default ProjectWebsite