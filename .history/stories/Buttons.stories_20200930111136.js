import React from 'react';
import Google from '../comps/Google';
import Button from '../comps/Button';

export default {
    title: 'Buttons',
    component: Google 
};

export const LogInWithGoogle = () => <Google />;
export const LogIn = () => <Button text="Login"/>;
export const Signup = () => <Button text="Signup" bgcolor="#D79B9B"/>;

