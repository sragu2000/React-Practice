import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../Components/Contacts";

function Home(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    
                    <Contacts 
                    userName="Raguraj"
                    address="Jaffna"
                    id="1"
                    ></Contacts>

                    <Contacts 
                    userName="Mathesh"
                    address="Colombo"
                    id="2"
                    ></Contacts>

                </div>
                <div className="col-md-6">
                    <div className="bg-dark text-white form-control">
                        Contents
                    </div>
                    <Link to="/chats/Raguraj">
                        <div className="card mt-2">
                            <div className="card-body">
                                Parameterized Arguments
                            </div>
                        </div>
                    </Link>
                    <Link to="/contacts">
                    <div className="card mt-2">
                            <div className="card-body">
                               Fetch Data From JSON API<br></br>
                               Conditional Rendering
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                    <div className="card mt-2">
                            <div className="card-body">
                               Like Status
                            </div>
                        </div>
                    </Link>
                    <Link to="/form">
                    <div className="card mt-2">
                            <div className="card-body">
                               Form Login and Signup
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Home; 