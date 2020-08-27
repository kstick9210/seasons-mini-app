import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    spring: {
        text: '"Spring adds new life and new beauty to all that is." - Jessica Harrelson',
        iconName: 'umbrella'
    },
    summer: {
        text: '"Summertime is always the best of what might be." - Charles Bowden',
        iconName: 'sun'
    },
    fall: {
        text: '"Life starts all over again when it gets crisp in the fall." - F. Scott Fitzgerald',
        iconName: 'leaf'
    },
    winter: {
        text: '"Winter forms our character and brings out our best." - Tom Allen',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 1 && month <= 4) {
        return lat > 0 ? 'spring' : 'fall';
    } else if (month > 4 && month <= 7) {
        return lat > 0 ? 'summer' : 'winter';
    } else if (month > 7 && month <= 10) {
        return lat > 0 ? 'fall' : 'spring';
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
