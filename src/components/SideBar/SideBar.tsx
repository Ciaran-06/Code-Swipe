import React, { Component } from "react";
import "./SideBar.css";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

class SideBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { toggled: Boolean, user: String }
    }

    render() {

        let userID: string = this.props.user

        return (
            <div className="side-bar">
                <div className="side-bar-user">
                    <img src={String(this.getProfileImage(userID))} className="profile-picture"></img>
                    <h5 id="side-bar-welocome-text">Welcome {String(this.getFirstName(userID))}</h5>
                    
                </div>
            </div>
        )
    }

    sideBarDisabled(userID: string) {
        <div className="hidden-side-bar">
            <img src={String(this.getProfileImage(userID))} className="profile-picture"></img>
        </div>
    }
    sideBarActivated(userID: string) {
        return (
            <div className="side-bar">
                <div className="side-bar-user">
                    <img src={String(this.getProfileImage(userID))} className="profile-picture"></img>
                    <h5 id="side-bar-welocome-text">Welcome {String(this.getFirstName(userID))}</h5>
                    <FaRegEye />
                </div>
            </div>
        )
    }

    getProfileImage(id: string) {
        //query for users profile picutre matching with account id

        //placeholder for the now
        const imageHost: string = "http://localhost:5050/";
        let queryString: string = imageHost + id + ".jpg";

        console.log(queryString);
        return queryString;
    }

    getFirstName(id: string) {
        return "Ciaran"; //placeholder for api
    }

    toggleDisplay() {
        let state: boolean = this.props.toggled;
        state = !state
    }
}

export default SideBar;