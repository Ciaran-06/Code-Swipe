import { Server } from "http";
import React, { Component } from "react";
import "./SideBar.css";


class SideBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {toggled: Boolean, user: String}
    }

    render() {

        let userID:string = this.props.user

        return (
            <div className="side-bar">
                <div className="side-bar-user">
                    <img src={String(this.getProfileImage(userID))} className="profile-picture"></img>
                    <h3 id="side-bar-welocome-text">Welcome {String(this.getFirstName(userID))}</h3>
                </div>
            </div>
        )
    }

    getProfileImage(id: string) {
        //query for users profile picutre matching with account id

        //placeholder for the now
        const imageHost:string = "http://localhost:5050/";
        let queryString: string = imageHost + id + ".jpg";

        console.log(queryString);
        return queryString;
    }

    getFirstName(id: string) {
        return "Ciaran"; //placeholder for api
    }
}

export default SideBar;