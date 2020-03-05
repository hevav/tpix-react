import React from 'react';
import Button from "../Button";
import Cookies from "js-cookie";
import {CloudFill, Sun} from "react-bootstrap-icons";

function TrainPixDarkThemeButton() {
    let isDark = Cookies.get("dark") === "true";
    return (
        <Button defaultText={((isDark)?<Sun size="20"/>:<CloudFill size="20"/>)} onClick={()=>{Cookies.set("dark", !isDark); window.location.reload();}}/>
    );
}

export default TrainPixDarkThemeButton;