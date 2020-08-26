import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'It is summer',
        iconName: 'sun'
    },
    winter: {
        text: 'brr it is cold',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]
    return (
        <div className={`SeasonDisplay ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    )
}
