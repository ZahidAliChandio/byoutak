import React, { useState, useEffect, useContext } from 'react'
// import * as $ from 'jquery'
// import axios from 'axios';
// import md5 from 'md5';
import Dialog from '../../components/UI/Dialog'
// import stateContext from '../../context/StateContext'
// import { ATLAS_URI } from '../../Constants'

function Login() {

    const [state, setState] = useState({
        dialogInfo: {
            isOpened: false,
            text: ""
        },
        businessName: ""
    })

    const loginOperator = (e) => {
        e.preventDefault();

        // const enteredUsername = $("#username").val();
        // const enteredPassword = md5($("#password").val()).substring(5, 25)
        // axios.post(`${ATLAS_URI}/authenticate`, { username: enteredUsername, password: enteredPassword })
        //     .then(res1 => {
        //         const userData = res1.data;
        //         if (typeof userData !== 'undefined' && userData !== null) {
        //             const { Username, Password, Name, Role } = userData;
        //             if (Password === enteredPassword) {
        //                 axios.get(`${ATLAS_URI}/getRoleByID/${Role}`)
        //                     .then(role => {
        //                         if (typeof role !== 'undefined') {

        //                             const loginTime = getCurrentTime();
        //                             const addedData = { Name: Name, Username: Username, Role: role.data.Role, LoginTime: loginTime };
        //                             //Add Login Details
        //                             axios.post(`${ATLAS_URI}/addLoginDetail/`, addedData)
        //                                 .then(response => {
        //                                     if (response.status === 200) {
        //                                         userData.LastLogin = loginTime;
        //                                         updateOperatorInfo(userData);
        //                                         window.location.href = "/dashboard"

        //                                         //Delete All Excels
        //                                         axios.delete(`${ATLAS_URI}/deleteAllExcels`);

        //                                     }
        //                                 }).catch(err => alert(err))
        //                         }
        //                     }).catch(err => alert(err))

        //             } else {
        //                 const newDialogInfo = { isOpened: true, text: "Incorrect Password", type: "Error" }
        //                 setState({ ...state, dialogInfo: newDialogInfo })
        //                 $(".errorMsg").css({ "font-size": "14px" })
        //                 setTimeout(() => { setState({ ...state, dialogInfo: { isOpened: false, text: "", type: "" } }) }, 3000)
        //             }

        //         } else {
        //             const newDialogInfo = { isOpened: true, text: "Incorrect Username", type: "Error" }
        //             setState({ ...state, dialogInfo: newDialogInfo })
        //             $(".errorMsg").css({ "font-size": "14px" })
        //             setTimeout(() => { setState({ ...state, dialogInfo: { isOpened: false, text: "", type: "" } }) }, 3000)
        //         }

        //     }).catch(err => alert("Not Authorized"))
    }

    const getCurrentTime = () => {
        const today = new Date();
        const date = today.getDate();
        const month = String(parseInt(today.getMonth()) + 1);

        return (date < 10 && "0") + date + "-" + (month < 10 && "0") + month + "-" + today.getFullYear() + "  " +
            ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
    }

    return (
        <React.Fragment>
            {state.dialogInfo.isOpened &&
                <Dialog
                    onClose={(e) => setState({ ...state, dialogInfo: { isOpened: false, text: "", type: "" } })}
                    dialogInfo={state.dialogInfo}
                />}
            <main id="loginSection">
                <div className='login_container'>
                    <p className='login_heading'>{state.businessName}</p>
                    <p className='login_subHeading'>CRM Login</p>
                    <div className="login_card">
                        <form onSubmit={loginOperator} autoComplete="off">
                            <br /><br />
                            <div className="form-floating loginFormField">
                                <input type="text" className="form-control loginField" required id="username" placeholder="Username" />
                                <label>Username</label>
                                <i className="inputIcon fas fa-user"></i>
                            </div>
                            <div className="form-floating loginFormField">
                                <input type="password" className="form-control loginField" required id="password" placeholder="Password" />
                                <label>Password</label>
                                <i className="inputIcon fas fa-lock"></i>
                            </div>
                            <button type="submit" id="loginBtn" className="btn btn-success">Sign in</button>
                            <br /><br />
                        </form>
                        <br />
                    </div>
                </div>

            </main>

        </React.Fragment>
    );


}

export default Login