import React from 'react';
import TrainPixAPI from "../API/TrainPixAPI";
import Text from "../Elements/Text";
import LanguageManager from "../API/LanguageManager";
import {Link} from "react-router-dom";
import TextLine from "../Elements/TextLine";

function Photo(props) {
    let photo = TrainPixAPI.photo({id: Number(props.match.params.id)});
    return (
        <div className="page">
            <div className="line-grey">
                <div className="baseContainer photoContainer">
                    <img src={photo.image_url} alt={photo.train.name}/>
                </div>
            </div>
            <div className="line-classic">
                <div className="baseContainer">
                    <Link to={"/train/" + photo.train.id}>
                        <Text value={photo.train.name} type="Bold"/>
                    </Link>
                </div>
                <div className="twoGridContainer">
                    <div className="baseContainer">
                        <Link to={"/train/" + photo.train.id}>
                            <TextLine name={LanguageManager.getString("train")} value={photo.train.name}/>
                        </Link>
                        <Link to={"/model/" + photo.train.model.id}>
                            <TextLine name={LanguageManager.getString("model")} value={photo.train.model.name}/>
                        </Link>
                        <Link to={"/railway/" + photo.train.railway.id}>
                            <TextLine name={LanguageManager.getString("railway")} value={photo.train.railway.name}/>
                        </Link>
                        <Link to={"/depot/" + photo.train.depot.id}>
                            <TextLine name={LanguageManager.getString("depot")} value={photo.train.depot.name}/>
                        </Link>
                    </div>
                    <div className="baseContainer">
                        <Link to={"/author/" + photo.author.id}>
                            <TextLine name={LanguageManager.getString("author")} value={photo.author.nickname}/>
                        </Link>
                        <TextLine name={LanguageManager.getString("license")} value={photo.license}/>
                        <TextLine name={LanguageManager.getString("pub_date")} value={photo.pub_date}/>
                        <TextLine name={LanguageManager.getString("shot_date")} value={photo.shot_date}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photo;
