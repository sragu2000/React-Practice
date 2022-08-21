import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function Fifthpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginFunction=(e)=>{
        e.preventDefault();
        var toServer=new FormData();
        toServer.append('userName',email);
        toServer.append('passWord',password);
        fetch("http://localhost/sms/login/temp",{
            method:'POST',
            body: toServer,
            mode: 'cors',
            cache: 'no-cache'})
        .then(response => {
            if (response.status === 200) {
                return response.json();            
            }
            else {
                alert('Backend Error..!');
                console.log(response.text());
            }
        })
        .then(data => {
            alert(data.message);
        })
        .catch(() => {
            console.log("Network connection error");
            alert("Reloading");
        });
    };
    return (
        <div className="container" >
            <Link to="/">
                <div className="btn btn-outline-success form-control">Back To Home</div>
            </Link>
            <div className="row  mt-4">
                <div className="col-sm-6">
                    <form id="login" onSubmit={loginFunction}>
                        <div className="card border-dark ">
                            <div className="card-header form-control-lg"><strong><center>Login</center></strong></div>
                            <div className="card-body">
                                <input type="email" className="form-control-lg form-control rounded-3" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />&nbsp;
                                <input type="password" className="form-control-lg form-control rounded-3" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />&nbsp;
                                <hr></hr>
                                <div className="row">
                                    <div className="col-6"><button type="submit" className="btn btn-outline-success btn-lg form-control">Login</button></div>
                                    <div className="col-6"><button type="reset" className="btn btn-outline-danger btn-lg form-control">Clear</button></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6">
                    <form id="signup">
                        <div className="card border-dark ">
                            <div className="card-header form-control-lg"><strong><center>SignUp</center></strong></div>
                            <div className="card-body">
                                <input type="text" className="form-control-lg form-control rounded-3" required placeholder="fullname" id="spfullname" /> &nbsp;
                                <input type="email" className="form-control-lg form-control rounded-3" required placeholder="Email" id="spemail" />&nbsp;
                                <input type="password" className="form-control-lg form-control rounded-3" required placeholder="Password" id="sppassword" />&nbsp;
                                <input type="password" className="form-control-lg form-control rounded-3" required placeholder="Confirm Password" id="spcpassword" />&nbsp;
                                <div className="row">
                                    <div className="col-6 fw-bold" align="center"><div className="form-control form-control-lg">Date of Birth</div> </div>
                                    <div className="col-6 "><input type="date" className="form-control-lg form-control rounded-3" required name="spdob" id="spdob" />&nbsp;</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-control form-control-lg">
                                            <input type="checkbox" id="spagree" className="form-check-input" required /> &nbsp;
                                            I agree terms and Conditions</div>&nbsp;<hr></hr>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6"><button type="submit" className="btn btn-outline-success btn-lg form-control">SignUp</button></div>
                                    <div className="col-6"><button type="reset" className="btn btn-outline-danger btn-lg form-control">Clear</button></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Fifthpage;