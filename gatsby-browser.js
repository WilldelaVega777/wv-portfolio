//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React from "react"
import { PageProvider } from "./src/context/page-context"

//--------------------------------------------------------------
// Root Component Section
//--------------------------------------------------------------
export const wrapRootElement = ({ element }) => (
  <PageProvider>{element}</PageProvider>
)
