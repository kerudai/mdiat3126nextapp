import React from 'react';
import Google from '../comps/Google';
import Button from '../comps/Button';

export default {
    title: 'Buttons',
    component: Google 
};

export const LogInWithGoogle = () => <Google text="Login"/>;
export const LogIn = () => <Button />;

