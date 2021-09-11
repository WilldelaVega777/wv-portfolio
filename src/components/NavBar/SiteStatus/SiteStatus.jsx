//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { makeStyles }       from '@material-ui/core/styles';
import { createTheme }      from '@material-ui/core/styles'
import { ThemeProvider }    from '@material-ui/core/styles'
import Popover              from '@material-ui/core/Popover';
import Typography           from '@material-ui/core/Typography';


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
}))


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const SiteStatus = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const open = props.show
    const id   = open ? 'simple-popover' : undefined

    const darkTheme = createTheme({
        palette: {
          type: 'dark',
        },
    })


    //----------------------------------------------------------
    // Eventhandler Methods Section
    //----------------------------------------------------------
    const handleClose = () => {
        props.reset()
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <ThemeProvider theme={darkTheme}>
            <Popover
                id={id}
                open={open}
                anchorEl={props.element}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography
                    className={classes.typography}
                >
                    { props.children }
                </Typography>
            </Popover>
        </ThemeProvider>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default SiteStatus
