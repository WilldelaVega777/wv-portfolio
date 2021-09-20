//--------------------------------------------------------------
// Supress React Warnings Section
//--------------------------------------------------------------
/* eslint-disable */

//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import React                from 'react';
import { useState }         from "react"
import { useRef }           from "react"
import { useContext }       from "react"

import { Link }             from "gatsby"
import { navigate }         from "gatsby"

import { withStyles }       from '@material-ui/core/styles'
import { makeStyles }       from '@material-ui/core/styles'
import { ThemeProvider }    from '@material-ui/core/styles'

import AppBar               from '@material-ui/core/AppBar'
import Toolbar              from '@material-ui/core/Toolbar'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
import ListItemIcon         from '@material-ui/core/ListItemIcon'
import ListItemText         from '@material-ui/core/ListItemText'

import IconButton           from '@material-ui/core/IconButton'
import MenuIcon             from '@material-ui/icons/Menu'
import NotificationsIcon    from "@material-ui/icons/Notifications"
import SendIcon             from "@material-ui/icons/Send"
import DraftsIcon           from "@material-ui/icons/Drafts"
import InboxIcon            from "@material-ui/icons/Inbox"

import { Badge }            from "@material-ui/core"
import LetsTalk             from "../LetsTalk/LetsTalk"
import SiteStatus           from "../SiteStatus/SiteStatus"

import SiteContext          from "../../../context/site-context"

import WVTheme              from '../../../themes/WVTheme'


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.down('lg')]: {
            lineHeight: '1.0em'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}))

//--------------------------------------------------------------
// Menu Component Styles
//--------------------------------------------------------------
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #4b3621',
      background: '#74643d !important',
      color: '#4b3621'
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
))

//--------------------------------------------------------------
// MenuItem Component Styles
//--------------------------------------------------------------
const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
}))(MenuItem);


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const NavBar = () => {
    //----------------------------------------------------------
    // Initial Settings Section
    //----------------------------------------------------------
    const [
        showStatus,
        setShowStatus
    ] = useState(false)

    const [
        anchorEl,
        setAnchorEl
    ] = React.useState(null);

    const ctx           = useContext(SiteContext)

    const notifications = useRef(null)
    const presentation  = useRef(null)

    const classes = useStyles();


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget)
        console.log(`target is : ${anchorEl}`)
        const page = anchorEl
    }

    //----------------------------------------------------------
    const handleClose = () => {
        setAnchorEl(null);
    }

    //----------------------------------------------------------
    const goToLink = (e) => {
        e.preventDefault()
        const pageStub = e.target.innerText
        switch (pageStub)
        {
            case "Hi, I'm Will":
                void navigate('/presentation')
                break
            case "My Portfolio":
                void navigate('/portfolio')
                break
            case "Favorite Projects":
                void navigate('/featured')
                break
            case "Some Certifications":
                void navigate('/certifications')
                break
            case "My Resume":
                void navigate('/resume')
                break
            case "A Few Diplomas":
                void navigate('/diplomas')
                break
        }
    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <ThemeProvider theme={WVTheme}>
            <div
                className={classes.root + ' shadow-container'}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link
                            to="/"
                            activeClassName="active"
                        >
                            <img className="logo-link"
                                src="/images/Logo.png"
                                alt="WV Logo"
                            />
                        </Link>

                        <div className={classes.sectionMobile}>

                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                onClick={(e) => goToLink(e)}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Hi, I'm Will"/>
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Portfolio"/>
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Favorite Projects"/>
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Some Certifications"/>
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Resume"/>
                                </StyledMenuItem>
                                <StyledMenuItem>
                                    <ListItemIcon>
                                        <InboxIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="A Few Diplomas"/>
                                </StyledMenuItem>
                            </StyledMenu>
                        </div>

                        <div className={classes.sectionDesktop}>
                            <Link
                                ref={presentation}
                                to="/presentation/"
                                activeClassName="active"
                                getProps={({isCurrent}) => {
                                    return (
                                        ((ctx.activatePresentationLink === 'presentation') ||
                                        (isCurrent)) ?
                                        { className: "active" } :
                                        {}
                                    )
                                }}
                            >
                                Hi, I'm Will
                            </Link>
                            <Link
                                to="/portfolio"
                                activeClassName="active"
                            >
                                My Portfolio
                            </Link>
                            <Link
                                to="/featured"
                                activeClassName="active"
                            >
                                Favorite Projects
                            </Link>
                            <Link
                                to="/certifications"
                                activeClassName="active"
                            >
                                Some Certifications
                            </Link>
                            <Link
                                to="/resume"
                                activeClassName="active"
                            >
                                My Resume
                            </Link>
                            <Link
                                to="/diplomas"
                                activeClassName="active"
                            >
                                A Few Diplomas
                            </Link>
                        </div>

                        <div className={classes.grow} />


                        <div ref={notifications} className="notifications">
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon onClick={() => {
                                    setShowStatus(true)
                                }}/>
                                <SiteStatus
                                    element={notifications.current}
                                    show={showStatus}
                                    reset={() => { setShowStatus(false) }}
                                >
                                    <span>
                                        This site is currently under heavy development.<br/>
                                        If you find any bugs, I would appreciate if you <br/>
                                        can please let me know through the Contact Form.<br/>
                                        Thanks.
                                    </span>
                                </SiteStatus>
                            </Badge>
                        </div>
                        <div className="contact">
                            <Link to="/contact"
                                className="lets-talk"
                                activeClassName="active"
                            >
                                <LetsTalk/>
                            </Link>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    )
}


//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default NavBar
