import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contacts(props) {
    const [likedStatus, toggleLike] = useState("btn border border-dark bg-light");
    const [likeIcon, setLikeIcon] = useState("fa-regular fa-heart");
    const switchLike = () => {
        if (likedStatus === "btn border border-dark bg-danger"){
            toggleLike("btn border border-dark bg-light"); 
            setLikeIcon("fa-regular fa-heart");
        }
        else { 
            toggleLike("btn border border-dark bg-danger"); 
            setLikeIcon("fa-solid fa-heart");
        }
        console.log("Fetch call here");
    };
    return (
        <React.Fragment>
            <div className="card mt-4">
                <div className="card-body" align="center">
                    Name:&nbsp;{props.userName}<p></p>
                    Address:&nbsp;{props.address}
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={switchLike} className={likedStatus}><i className={likeIcon}></i></button>
                        </div>
                        <div className="col-md-11">
                            <Link to={"/chats/" + props.id}>
                                <button className="btn btn-outline-warning form-control">Enquiry</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}
export default Contacts;