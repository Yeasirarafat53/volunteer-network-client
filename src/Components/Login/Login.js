import React, { useContext } from 'react';
import './Login.css';
import logo from '../../logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config';
import { getAuth, signInWithPopup,GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const app = initializeApp(firebaseConfig);



const Login = () => {

    let history = useHistory();
    let location = useLocation();
  

    const loggedInUser= useContext(UserContext);
    // console.log(loggedInUser);
    // console.log(loggedInUser.user[0])
    
    let { from } = location.state || { from: { pathname: "/eventRegistration" } };

    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    
      })
    
        const provider = new GoogleAuthProvider();
    
    
        const handleGoogleSignIn = ()=>{

          // history.push("/eventRegistration")
          console.log("hello");
    
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res);
          const {displayName,email,photoURL} = res.user;
          // step-9
          const signedInUser = {
            isSignedIn:true,
            name:displayName,
            email: email,
            photo:photoURL
          }
          setUser(signedInUser);
          loggedInUser.user.loggedInUser=signedInUser;
          history.replace(from);
          
          console.log("arif",loggedInUser.loggedInUser);
          // ..........
    
          // console.log(displayName,email,photoURL);
        })
        .catch(error =>{
          console.log(error);
          console.log(error.message);
        })
      } 
    
    
    
    
    //   const handleSignOut = () => {
    
    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //       const signedOutUser={
    //         isSignedIn:false,
    //         name:'',
    //         email:'',
    //         photo:''
    //       }
    //       setUser(signedOutUser);
          
    
    //     })
        
    //     .catch((error) => {
    //       // An error happened.
    //       console.log(error);
    //       console.log(error.message);
    //     });
    
    
    //   }
    

    return (
        <div className="container volunteer-login">
            <a href="/home"><img src={logo} alt="" className="form-logo" /></a>

            <div className="login-form bg-white">
                <div className="mt-5">
                <h3>Login with</h3>

                
                <button
                    onClick={handleGoogleSignIn}
                    type="submit"
                    className="google-signin col-md-12 ">
                    <FontAwesomeIcon icon={faGoogle} /> 
                    <p>Continue With Google</p>
                </button> 
               

                    <p className="mt-3">Don't have an account?
                    <a href="#/"> create an account.</a>
                    </p>
                </div>
          </div>



        </div>
    );
};

export default Login;