import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

const LoginSignup = () => {
    return (
        <div>
            <header>
                <SignedOut>
                    <SignInButton mode="modal">Sign In</SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton /> <SignOutButton />
                </SignedIn>
            </header>
        </div>
    )
}

export default LoginSignup

 