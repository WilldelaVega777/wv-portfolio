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
          main: '#85754e',
          contrastText: '#4b3621',
        },
        secondary: {
            light: '#a7976f',
            main: '#857a5f',
            contrastText: '#aaa',
        },
        error: {
            light: '#eeeeee',
            main: '#440000',
            dark: '#330000',
            contrastText: '#aaaaaa'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
})


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default WVTheme
