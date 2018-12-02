import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


class Update extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            file: null,
            errorMessage: null,
            redirect: false
        }
    }

    updateValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    updateUser = () => {
        firebase.auth().currentUser.updateProfile({
            displayName: this.state.displayName,
            photoURL: this.state.photoURL

        }).then(() => this.setState({ redirect: true })).catch((err) => {
            this.setState({ errorMessage: err.message })
        })
    }

    render() {
        return (
            <Form>
                {this.state.redirect && <Redirect to="/"></Redirect>}
                <FormGroup>
                    <Label for="displayName">Display Name</Label>
                    <Input type="displayName" name="displayName" value={this.state.displayName} onChange={(event) => this.updateValue("displayName", event.target.value)} id="display-name" placeholder="Display name" />
                </FormGroup>
                {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                <Button onClick={() => this.updateUser()}>Join!</Button>
            </Form>
        )
    };


}

export default Update;

