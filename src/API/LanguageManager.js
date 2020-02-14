import Cookies from 'js-cookie';

let language = Cookies.get("language");
let strings;
if(language === undefined) language = "ru";
switch(language){
    case "ru":
        strings = require('../Strings/ru_str.json');
        break;
    default:
        strings = require('../Strings/en_str.json');
        break;
}

let LanguageManager = {
    currentLanguage: language,
    availableLanguages: ["ru", "en"],
    changeLanguage: (lang) => {
        Cookies.set("language", lang);
        window.location.reload();
    },
    getString: (key) => {
        return strings[key];
    }
};

export default LanguageManager;