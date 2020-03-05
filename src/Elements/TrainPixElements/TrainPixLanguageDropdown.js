import React from 'react';
import Dropdown from "../Dropdown";
import LanguageManager from "../../API/LanguageManager";

function TrainPixLanguageDropdown() {
    return (
        <Dropdown defaultText={LanguageManager.currentLanguage} items={LanguageManager.availableLanguages} onValueChange={LanguageManager.changeLanguage} style={{flexGrow: 1}}/>
    );
}

export default TrainPixLanguageDropdown;