import React, { useState, useEffect, useContext } from "react";
// import * as $ from 'jquery'
// import axios from 'axios';
// import md5 from 'md5';
import Dialog from "../../components/UI/Dialog";
// import stateContext from '../../context/StateContext'
// import { ATLAS_URI } from '../../Constants'

function Login() {
  const [state, setState] = useState({
    dialogInfo: {
      isOpened: false,
      text: "",
    },
    businessName: "",
  });

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
  };

  const getCurrentTime = () => {
    const today = new Date();
    const date = today.getDate();
    const month = String(parseInt(today.getMonth()) + 1);

    return (
      (date < 10 && "0") +
      date +
      "-" +
      (month < 10 && "0") +
      month +
      "-" +
      today.getFullYear() +
      "  " +
      ("0" + today.getHours()).slice(-2) +
      ":" +
      ("0" + today.getMinutes()).slice(-2) +
      ":" +
      ("0" + today.getSeconds()).slice(-2)
    );
  };

  const [activeInputIndex, setInputIndex] = useState(null);
  const inputClickHandler = (index) => {
    setInputIndex(index);
  };

  return (
    <React.Fragment>
      {state.dialogInfo.isOpened && (
        <Dialog
          onClose={(e) =>
            setState({
              ...state,
              dialogInfo: { isOpened: false, text: "", type: "" },
            })
          }
          dialogInfo={state.dialogInfo}
        />
      )}
      <main
        id="loginSection"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="login_container flex flex-col items-center w-full">
          <div className="flex flex-col justify gap-4 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="text-gray-300">
              <p className="login_heading font-semibold">
                Real Estate CRM : Demo
              </p>
              <p className="login_subHeading">CRM Login</p>
            </div>
            <div className="login_card bg-gray-300 flex flex-col gap-4 px-8 rounded-b-sm">
              <form
                onSubmit={loginOperator}
                autoComplete="off"
                className="flex flex-col"
              >                
                <br />
                <div class="relative z-0 mb-3 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    class="block pb-2 pt-5 px-2 w-full text-gray-900 bg-transparent border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border focus:border-b-2 focus:border-[#212020] peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
                  >
                    Username
                  </label>
                  <i className="inputIcon fas fa-user absolute right-4 top-1/2 -translate-y-1/2"></i>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    class="block pb-2 pt-5 px-2 w-full text-gray-900 bg-transparent border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border focus:border-b-2 focus:border-[#212020] peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
                  >
                    Password
                  </label>
                  <i className="inputIcon fas fa-lock absolute right-4 top-1/2 -translate-y-1/2"></i>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    id="loginBtn"
                    className="btn btn-success bg-[#212020] text-gray-300 py-[0.38rem] px-2 rounded-md text-sm font-semibold"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
