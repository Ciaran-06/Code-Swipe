import React, { Component } from "react";
import "./SideBar.css";

import { FaBars } from "react-icons/fa";


import "../MenuOption"
import MenuOption from "../MenuOption";

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
                    <div className="user-text-wrapper">
                        <h5 id="side-bar-welocome-text">Welcome </h5>
                        <h5>{String(this.getFirstName(userID))}.</h5>
                    </div>
                    <p><FaBars id="menu-icon" /></p>
                </div>
            </div >
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
                    <MenuOption dislpayText="test"></MenuOption>
                </div>
            </div>
        )
    }

    getProfileImage(userID: string) {
        //query for users profile picutre matching with account id

        //placeholder for the now
        const imageHost: string = "https://ckcxhhagxgzjmdicienj.supabase.co/storage/v1/object/public/avatars/";
        let queryString: string = imageHost + userID + ".jpg";

        console.log(queryString);
        return queryString;
    }

    getFirstName(userID: string) {
        return "Ciaran"; //placeholder for api
    }

    toggleDisplay() {
        let state: boolean = this.props.toggled;
        state = !state
    }
}

export default SideBar;