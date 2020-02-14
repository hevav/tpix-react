import React from 'react';
import Header from "../Header/Header";
import TrainPixLanguageDropdown from "./TrainPixLanguageDropdown";
import TrainPixSearch from "./TrainPixSearch";

function TrainPixHeaderModules() {
    return ([
            <TrainPixSearch key="0"/>,
            <TrainPixLanguageDropdown key="1"/>
    ]);
}

function TrainPixHeader() {
    return (
        <Header title="TrainPix-React" headerModules={<TrainPixHeaderModules/>}/>
    );
}

export default TrainPixHeader;