import React from 'react';
import {Link} from "react-router-dom";
import Text from "../Elements/Text";
import LanguageManager from "../API/LanguageManager";
import TrainPixAPI from "../API/TrainPixAPI";
import TextLine from "../Elements/TextLine";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

function Train(props) {
    let train = TrainPixAPI.train({id: Number(props.match.params.id)});
    return (
        <div className="page">
            <div className="line-classic">
                <div className="baseContainer">
                    <Text value={train.name} type="Bold"/>
                    <Text value={train.info} type="Inline"/>
                    <Text value={train.note} type="Inline"/>
                    <div className="twoGridContainer">
                        <Link to={"/train/" + train.id}>
                            <TextLine name={LanguageManager.getString("train")} value={train.name}/>
                        </Link>
                        <Link to={"/model/" + train.model.id}>
                            <TextLine name={LanguageManager.getString("model")} value={train.model.name}/>
                        </Link>
                        <Link to={"/railway/" + train.railway.id}>
                            <TextLine name={LanguageManager.getString("railway")} value={train.railway.name}/>
                        </Link>
                        <Link to={"/depot/" + train.depot.id}>
                            <TextLine name={LanguageManager.getString("depot")} value={train.depot.name}/>
                        </Link>
                        <Link to={"/builder/" + train.builder.id}>
                            <TextLine name={LanguageManager.getString("builder")} value={train.builder.name}/>
                        </Link>
                        <TextLine name={LanguageManager.getString("built")} value={train.built}/>
                        <TextLine name={LanguageManager.getString("serial")} value={train.serial}/>
                        <TextLine name={LanguageManager.getString("id")} value={train.train_id}/>
                        <TextLine name={LanguageManager.getString("category")} value={train.category}/>
                        <TextLine name={LanguageManager.getString("status")} value={train.state}/>
                    </div>
                </div>
            </div>
            <div className="line-grey">
                <div className="baseContainer">
                    <ImageGallery
                        items={
                            train.photos.map((item, i)=>
                                {
                                    let photo = TrainPixAPI.photo({id: item});
                                    return {
                                        original: photo.image_url,
                                        thumbnail: photo.thumbnail_url,
                                        description: <Link to={photo.url}>{LanguageManager.getString("open_full")}</Link>
                                    }
                                }
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Train;
