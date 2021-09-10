//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import { createTheme }  from '@material-ui/core/styles'


//--------------------------------------------------------------
// Theme Section
//--------------------------------------------------------------
const WVTheme = createTheme({
    palette: {
        primary: {
          light: '#85754e',
          main: '#63532c',
          contrastText: '#85754e',
        },
        secondary: {
            light: '#a7976f',
            main: '#63583c',
            contrastText: '#aaa',
        },
        error: {
            light: '#440000',
            main: '#440000',
            dark: '#330000',
            contrastText: '#440000'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
})


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default WVTheme
