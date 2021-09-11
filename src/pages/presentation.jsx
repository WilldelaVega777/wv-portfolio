//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React           from "react"
import { useEffect }        from "react"
import { useContext }       from "react"

import { useLocation }      from '@reach/router';
import queryString          from 'query-string';
import SiteContext          from "../context/site-context"

import Layout               from "../components/Layout/Layout"
import PresentationSection  from '../sections/Presentation/Presentation'

import "../styles/site.scss"


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const PresentationPage = () => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const ctx = useContext(SiteContext)
    const location = useLocation()
    const defaultAutomatic = ((
        location.search &&
        getAutomatic(location.search)
    ) || false)

    setTimeout(() => {
        if (defaultAutomatic)
        {
            ctx.updateActivatePresentationLink('presentation')
        }
    }, 1000)


    //----------------------------------------------------------
    // Lifecycle Event Handler Method Section
    //----------------------------------------------------------
    useEffect(() => {

        window.document.body.id = "app"

    }, [])


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <Layout>
            <PresentationSection/>
        </Layout>
    )
}

//--------------------------------------------------------------
// External Functions Section
//--------------------------------------------------------------
const getAutomatic = (query) => {
    const fallback = false

    if (query)
    {
      const queriedAutomatic = queryString.parse(query);
      const { automatic } = queriedAutomatic;

      // Ensure a valid expected value is passed
      if (['true'].includes(automatic)) {
        return true;
      }

      return fallback;
    }

    return fallback;
  };


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default PresentationPage
