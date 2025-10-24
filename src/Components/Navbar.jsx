import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(null)


    const handleGoogleLogin = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
                setUser(null)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("SignOut completed")
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const li = <>
        <li><a href="/">Home</a></li>
        <li><a href="/learning">Start Learning</a></li>
        <li><a href="/tutorials">Tutorials</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
    </>

    return (
        <div className="navbar py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            li
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        li
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/* optional chaining operator */}
                {
                    user ?
                        <>
                            <div className="flex items-center justify-center gap-3">
                                <img className="size-[50px] rounded-full" src={user.photoURL} alt="" />
                                <div>
                                    <p>{user?.displayName}</p>
                                    <small className="mr-2">{user?.email}</small>
                                </div>
                            </div>
                            <button className="btn" onClick={handleSignOut}>Sign out</button>
                        </>
                        : <button className="btn ml-2" onClick={handleGoogleLogin}> Sign in</button>
                }
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar