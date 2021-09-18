import React from 'react';
import { useHistory } from 'react-router';
import './topbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsBell } from "react-icons/bs";
import profile from "../../assets/images/authentication-bg.jpg";


const Topbar = () => {
    const history = useHistory();

    const logoutHandler = () => {
        history.push('/');
    }
    return (
        <>
            <div className="main_dashboard">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header_inner">
                                    {/* <div className="mobile_site-logo">
									<a href="index.html"><img src="images/logo.png" alt="site-logo" /></a>
								</div> */}
                                    <div className="header_item text-right">
                                        <div className="bell">
                                            <BsBell />
                                        </div>
                                        <div className="profile">
                                            <img src={profile} alt='user-profile' />
                                        </div>
                                        <div className="profile_dropdown">
                                            <DropdownButton id="dropdown-basic-button" title="Admin">
                                                <Dropdown.Item onClick={logoutHandler}> Log out </Dropdown.Item>
                                            </DropdownButton>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Topbar;
