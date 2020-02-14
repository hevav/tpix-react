import React, {useState} from 'react';
import Input from "../Input/Input";
import TrainPixAPI from "../../API/TrainPixAPI";
import LanguageManager from "../../API/LanguageManager";
import './TrainPixSearch.css';
import {Link} from "react-router-dom";

function TrainPixSearch() {
    const [searchResults, setSearchResults] = useState([]);

    function searchAndShowResults(request) {
        TrainPixAPI.qsearch({name: request}).then((response) => {
            console.log(response.slice(0, 10));
            setSearchResults(response.slice(0, 10));
        });
    }

    return (
        <div className="searchRelative">
            <Input placeholder={LanguageManager.getString("type_model")}
                   onValueChange={(event) => searchAndShowResults(event.target.value)}/>
            <div className="searchResults">
                {
                    searchResults.map((item, id) =>
                        <Link to={"/train/"+item.vid}>
                            <div className="searchTrain" key={id}>
                                <div className={"searchTrainStatus searchTrainStatus" + item.state}/>
                                <div className="searchTrainDescription">
                                    <div className="searchTrainTrain">{item.num}</div>
                                    <div className="searchTrainModel">{LanguageManager.getString("model_no_api")}</div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default TrainPixSearch;