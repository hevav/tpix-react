import React from 'react';
import Header from "../Header";
import TrainPixLanguageDropdown from "./TrainPixLanguageDropdown";
import TrainPixSearch from "./TrainPixSearch";
import TrainPixAccount from "./TrainPixAccount";
import TrainPixDarkThemeButton from "./TrainPixDarkThemeButton";
import {Link} from "react-router-dom";

function TrainPixHeaderModules() {
    return ([
            <TrainPixSearch key="0"/>,
            <div key="1" style={{display: "flex", flexDirection: "row"}}>
                <TrainPixLanguageDropdown/>
                <TrainPixAccount/>
                <TrainPixDarkThemeButton/>
            </div>
    ]);
}

function TrainPixHeader() {
    return (
        <Header title={<Link to="/">TrainPix-React</Link>} headerModules={<TrainPixHeaderModules/>}/>
    );
}

export default TrainPixHeader;