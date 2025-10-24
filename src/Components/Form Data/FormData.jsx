import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.init';

const FormData = () => {
    const [user, setUser] = useState(null)

    const handleGooglelogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setUser(null)
                console.log(error)
            })
    }

    const handleSignInWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log("SignOut Completed")
                setUser(null)
            }
            )
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen">
            {
                user && <h4>{user.displayName}</h4>
            }
            <div className="hero-content flex-col w-[500px] lg:flex-row-reverse">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-center'>or</p>
                            {
                                user ?
                                    <>
                                        <div>
                                            <button className='btn' onClick={handleGooglelogin}>Signin With Google</button>
                                            <button className='btn' onClick={handleSignInWithGithub}>Signin With Github</button>
                                        </div>
                                    </> :
                                    <button className='btn' onClick={handleSingOut}>Sign Out</button>
                            }
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormData;