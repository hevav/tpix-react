import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import LanguageManager from "../../API/LanguageManager";

function TrainPixLanguageDropdown() {
    return (
        <Dropdown defaultText={LanguageManager.currentLanguage} items={LanguageManager.availableLanguages} onValueChange={LanguageManager.changeLanguage}/>
    );
}

export default TrainPixLanguageDropdown;