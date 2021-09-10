//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import * as React                       from "react"
import { useEffect }                    from "react"
import {ThemeProvider}                  from '@material-ui/core/styles'

import TextField                        from '@material-ui/core/TextField'
import Button                           from '@material-ui/core/Button'
import LinkedInIcon                     from '@material-ui/icons/LinkedIn'
import { makeStyles }                   from '@material-ui/core/styles'
import { withStyles }                   from '@material-ui/core/styles';

import WVTheme                          from '../../themes/WVTheme'
import { useForm }                      from './hooks/useForm'

import "./ContactForm.scss"


//--------------------------------------------------------------
// Styles Section
//--------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}))

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#aaa',
      backgroundColor: '#63583c',
      '&:hover': {
        backgroundColor: '#0077b5',
      },
    },
  }))(Button);


//--------------------------------------------------------------
// Component Section
//--------------------------------------------------------------
const ContactForm = (props) => {

    //----------------------------------------------------------
    // Initialization Section
    //----------------------------------------------------------
    const classes = useStyles(WVTheme);

    const initialFValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues)


    //----------------------------------------------------------
    // Lifecycle Event Handler Methods Section
    //----------------------------------------------------------
    useEffect(() => {

    }, [])


    //----------------------------------------------------------
    // Event Handler Methods Section
    //----------------------------------------------------------
    const handleSubmit = async (e) => {

        e.preventDefault()

        if (validate())
        {
            try
            {
                await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({"form-name": "contactForm", ...values})
                })
                props.dataSent()
            }
            catch (err)
            {
                props.wrongData()
            }

        }
        else
        {
            props.wrongData()
        }

    }

    //----------------------------------------------------------
    // Internal Functions Section
    //----------------------------------------------------------
    const validate = () => {

        let temp = {}
        temp.firstName  = values.firstName ? "" : "This Field is Required"
        temp.lastName   = values.lastName  ? "" : "This Field is Required"
        temp.email      = (/$^|.+@.+..+/).test(values.email) ? "" : "Email is not valid"
        temp.phone      = (/$^|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
                            .test(values.phone) ? "" : "Phone is not valid"

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x == "")

    }


    //----------------------------------------------------------
    // Render Section
    //----------------------------------------------------------
    return (
        <ThemeProvider theme={WVTheme}>
            <form
                name="contactForm"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contactForm"/>
                <div className="form-container">
                    <div className="prospect-name">
                        <TextField
                            required
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            className="first-name"
                            value={values.firstName}
                            onChange={handleInputChange}
                            {
                                ...(
                                    errors.firstName &&
                                    {
                                        error: true,
                                        helperText: errors.firstName
                                    }
                                )
                            }
                        />
                        <TextField
                            required
                            name="lastName"
                            label="Last Name"
                            variant="filled"
                            className="last-name"
                            value={values.lastName}
                            onChange={handleInputChange}
                            {
                                ...(
                                    errors.lastName &&
                                    {
                                        error: true,
                                        helperText: errors.lastName
                                    }
                                )
                            }
                        />
                    </div>

                    <TextField
                        required
                        name="email"
                        label="Email"
                        variant="filled"
                        className="email"
                        value={values.email}
                        onChange={handleInputChange}
                        {
                            ...(
                                errors.email &&
                                {
                                    error: true,
                                    helperText: errors.email
                                }
                            )
                        }
                    />

                    <TextField
                        name="phone"
                        label="Phone"
                        variant="filled"
                        className="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                        {
                            ...(
                                errors.phone &&
                                {
                                    error:true,
                                    helperText:errors.phone
                                }
                            )
                        }
                    />

                    <TextField
                        name="message"
                        label="Message"
                        variant="filled"
                        multiline
                        rows={8}
                        className="message"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit"
                    >
                        SEND CONTACT INFO
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className="submit"
                        onClick={() => {setValues(initialFValues)}}
                    >
                        CLEAN FORM
                    </Button>

                    <br/>
                    <br/>

                    <ColorButton
                        variant="contained"
                        color="primary"
                        startIcon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/willdelavega/?locale=en_US"
                        target="_blank"
                    >
                        Visit me in LinkedIn
                    </ColorButton>
                </div>
            </form>
        </ThemeProvider>
    )

}

//--------------------------------------------------------------
// Exports Section
//--------------------------------------------------------------
export default ContactForm
