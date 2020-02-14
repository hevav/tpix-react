import React from 'react';
import TrainPixHeader from "../Elements/TrainPix/TrainPixHeader";

function Train(props) {
    return (
        <div>
            <TrainPixHeader/>
            {props.match.params.number}
        </div>
    );
}

export default Train;
