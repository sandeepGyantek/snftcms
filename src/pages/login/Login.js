import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './login.css';
import LoginImg from '../../assets/images/authentication-bg.jpg';
import Logo from '../../assets/images/logo.png';
import { RiUser2Line } from "react-icons/ri";
import { BiLock } from "react-icons/bi";

const Login = () => {
  const history = useHistory();
  const onsubmitHandler = (event) => {
      event.preventDefault();
      history.push('/user');
  }
    return (
        <>
            <div className="login_wraper">
                <div className="left_contant">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="contant">
                        <h3> Welcome back! </h3>
                        <p> sign in to continue to snft </p>
                    </div>
                    <div className="login_form">
                        <form onSubmit={onsubmitHandler}>
                            <ul>
                                <li> 
                                    <label> Email </label>
                                    <input type="email" placeholder="Enter eamil" required /> 
                                    <span> <RiUser2Line /> </span>
                                </li>

                                <li> 
                                    <label> Password </label>
                                    <input type="password" placeholder="Enter eamil" required /> 
                                    <span> <BiLock /> </span>
                                </li>
                                
                            </ul>
                                    <label className="custom_checkbox"> Remember me
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                            <button> Log in </button>
                        </form>             
                    </div>
                        <div className="bottom_contant">
                            <p> Don't have an account <Link to='/'> Register</Link></p>
                            <p> 2021 Socail nft </p>
                        </div>
                </div>
                <div className="right_contant">
                    <div className="login_bg_image">
                         <img src={LoginImg} alt="bg-img" />
                    </div>
                   
                </div>
            </div>

        </>
    )
}

export default Login;
