import { stringify } from "querystring";
import React, { Component } from "react";
import "./MenuOption.css";

class MenuOption extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = { dislpayText: String, page: String};
    }

    render() {
        let displayText: String = this.props.dislpayText;

       return (
        <h2>{String(displayText)}</h2>
       ) 
    }
}

export default MenuOption;