import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.confing';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const LogInWith = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname || '/';

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    


    const handelGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
          Swal.fire('Hurrah', ' Create account successfully', 'success');
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    
      
    return (
       <div>
         <div className='mb-4'>  
               <button onClick={handelGoogleLogin} class="btn gap-2 bg-fuchsia-400 hover:bg-rose-200 text-green-950 w-full mb-4"  ><FaGoogle></FaGoogle>Google</button>
                
   </div>
       </div>
    );
};

export default LogInWith;