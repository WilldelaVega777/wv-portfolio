//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React from "react"
import { SiteProvider } from "./src/context/site-context"


//--------------------------------------------------------------
// Root Component Section
//--------------------------------------------------------------
export const wrapRootElement = ({ element }) => (
  <SiteProvider>{ element }</SiteProvider>
)
