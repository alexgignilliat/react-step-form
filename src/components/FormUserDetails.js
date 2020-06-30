import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar primary={true} title="Enter User Details" />
                    <TextField
                    
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange()}
                        defaultValue={values.firstName}
                    /><br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange()}
                        defaultValue={values.lastName}
                    /><br/>
                    <TextField
                        hintText="Enter Your Email Address"
                        floatingLabelText="Email"
                        onChange={handleChange()}
                        defaultValue={values.email}
                    /><br/>
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occuptation"
                        onChange={handleChange()}
                        defaultValue={values.occupation}
                    /><br/>
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange()}
                        defaultValue={values.city}
                    /><br/>
                    <RaisedButton 
                    label="Continue" 
                    secondary={true}
                    style={styles.button}
                    onClick={this.continue}/>
                </React.Fragment>

            </MuiThemeProvider>
        )

       
    }


}
const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
