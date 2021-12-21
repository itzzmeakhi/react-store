import React from 'react';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from './../../components/SignIn/SignIn';

import './AuthPage.scss';

const AuthPage = () => {
    return (
        <div className="authpage">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default AuthPage;