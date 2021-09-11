import React from 'react';
import './user.css';
import { FaTwitter, FaInstagram, FaFacebookF} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import {BiEditAlt } from "react-icons/bi";

const userDetail = [
  {
    id: 1,
    walletId: '0xA29F9a31eC0e14F10',
    username: 'Max',
    email: 'test@gmail.com',
    varifyStatus: <div className="btn btn-success btn-sm">Verified</div>,
    Action:  <> <BiEditAlt />     <RiDeleteBin6Line />  </> ,
   social: <>    <FaTwitter />
   <FaInstagram />
   <FaFacebookF />
   <SiTiktok /> </>,
  },

  {
    id: 2,
    walletId: '0xA29F9a31eC0e14F12',
    username: 'Max well',
    email: 'abc@gmail.com',
    varifyStatus: <div className="btn btn-primary btn-sm">Click to Verify</div>,
    Action:  <> <BiEditAlt />     <RiDeleteBin6Line />  </> ,
   social: <>    <FaTwitter />
   <FaInstagram />
   <FaFacebookF />
   <SiTiktok /> </>,
  },

  {
    id: 3,
    walletId: 0xA29F9a31eC0e14F10,
    username: 'Bhabhuk',
    email: 'test@gmail.com',
    varifyStatus: <div className="btn btn-success btn-sm">Verified</div>,
    Action:  <> <BiEditAlt />     <RiDeleteBin6Line />  </> ,
   social: <>    <FaTwitter />
   <FaInstagram />
   <FaFacebookF />
   <SiTiktok /> </>,
  },

  {
    id: 4,
    walletId: 0xA29F9a31eC0e14F10,
    username: 'Mukul',
    email: 'gyantek@gmail.com',
    varifyStatus: <div className="btn btn-primary btn-sm">Click to Verify</div>,
    Action:  <> <BiEditAlt />     <RiDeleteBin6Line />  </> ,
   social: <>    <FaTwitter />
   <FaInstagram />
   <FaFacebookF />
   <SiTiktok /> </>,
  },
  
]



const User = () => {
    return (
        <>
<div className="user_table container">
    <h2> USERS </h2>
    <div className="user_table_inner">
      <div className="user_search_main">
       <div className="user_search">
          <input type="text" placeholder="Search" /> 
        </div>
        <div className="add_user_button">
          <button> + Add User</button>
        </div>
        </div>
        <div className="overflow_scroll">
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col"> ID </th>
      <th scope="col"> Wallet ID </th>
      <th scope="col"> Name </th>
      <th scope="col"> Email </th>
      <th scope="col"> Social </th>
      <th scope="col"> Verification Status </th>
      <th scope="col"> Actions </th>
    </tr>
  </thead>

        {
          userDetail.map((user, index) => {
            return(
              <>
              <tbody key={index}>
                <tr>
                  <th scope="row"> {user.id} </th>
                  <td> {user.walletId} </td>
                  <td> {user.username} </td>
                  <td> {user.email} </td>
                  <td> 
                    {user.social}
                  
                  </td>
                  <td> { user.varifyStatus } </td>
                  <td> 
                    {user.Action}
                  </td>
                </tr>
                </tbody>
              </>
            )
          })
        }

  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0xA29F9a31eC0e14F10</td>
      <td> Otto </td>
      <td>test@gmail.com</td>
      <td> 
        <FaTwitter />
        <FaInstagram />
        <FaFacebookF />
        <SiTiktok />
      
      </td>
      <td> <div className="btn btn-success btn-sm">Verified</div></td>
      <td> 
        <BiEditAlt />
        <RiDeleteBin6Line /> 
      </td>
    </tr>
  </tbody> */}
</table>
          
</div>
</div>
           </div>
        </>
    )
}

export default User;
