//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { makeStyles }       from '@material-ui/core/styles';
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


    //----------------------------------------------------------
    // Eventhandler Methods Section
    //----------------------------------------------------------
    const handleClose = () => {
        open = null
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
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
                    The content of the Popover.
                </Typography>
            </Popover>
        </>
    )

}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default SiteStatus
