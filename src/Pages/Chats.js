import React from "react";
import { Link, useParams } from "react-router-dom";

function Chats(){
    const {id}=useParams();
    return(
        <React.Fragment>
            <div className="container mt-4">
                <Link to="/">
                    <div className="btn btn-outline-success form-control">Back To Home</div>
                </Link>
                <p></p>
                <div className="alert alert-success">
                    User ID is : {id}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Chats;