import React, { Component } from 'react';

import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';

import { auth, signInWithGoogle } from './../../firebase/utils';

import './SignIn.scss';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { userEmail, userPassword } = this.state;
        try {
            await auth.signInWithEmailAndPassword(userEmail, userPassword);
            this.setState({ userEmail: '', userPassword: '' });
        } catch(err) {
            console.log(err);
        }
    };
    
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='userEmail'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.userEmail}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='userPassword'
                        type='password'
                        value={this.state.userPassword}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;