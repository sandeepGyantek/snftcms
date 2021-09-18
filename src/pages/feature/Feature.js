import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import './feature.css';
const FEATURE = [
    {
        id: 1,
        title: '0xA29F90xA29F90x',
        image: 'https://picsum.photos/200/300',
        author: 'maxwell',
        Actions: <RiDeleteBin6Line />
    },
]

const Feature = () => {
    return (
        <>
            <div className="feature_wrapper container">
                <h2> SNFT Features </h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature_form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="file"> Your Image File </label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title"> Title </label>
                                    <input type="text" className="form-control" placeholder="Title" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title"> Author </label>
                                    <input type="text" className="form-control" placeholder="Author" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="select"> Selected User </label>
                                    <select className="select-control">
                                        <option> Issabella </option>
                                        <option> SocailNft </option>
                                        <option> SimritTalwan </option>
                                        <option> Kirannbal </option>
                                        <option> 13249845435 </option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary form-control" > Add Feature </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="feature_table">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col"> ID </th>
                                        <th scope="col"> Title </th>
                                        <th scope="col"> Url </th>
                                        <th scope="col"> Author </th>
                                        <th scope="col"> Actions </th>
                                    </tr>
                                </thead>

                                {
                                    FEATURE.map((user, index) => {
                                        return (
                                            <tbody key={index}>
                                                <tr>
                                                    <th scope="row"> {user.id} </th>
                                                    <td> {user.title} </td>
                                                    <td> <img src={user.image} alt="feature-img" /> </td>
                                                    <td> {user.author} </td>
                                                    <td> {user.Actions} </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Feature;
