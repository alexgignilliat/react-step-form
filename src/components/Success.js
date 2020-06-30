import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

export class Confirm extends Component {

    reload = e => {
        e.preventDefault()
        this.props.reload()
    }



    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar primary={true} title="Success" />
                    <p>Thanks for checking out this form, {firstName}!</p>
                    <RaisedButton
                        label="Reload Form"
                        default={true}
                        style={styles.button}
                        onClick={this.reload} /><br/>
                    <RaisedButton
                        label="Back to Github"
                        secondary={true}
                        style={styles.button}
                        href="https://www.github.com/alexgignilliat"
                        target="_blank" />


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

export default Confirm