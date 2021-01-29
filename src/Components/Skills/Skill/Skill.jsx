import React, { memo } from 'react';
import './skill.scss';

const Skill = (props) => {
    return (
        <div className="skill">
            <h4>
                {props.title}
            </h4>
            <p>
                {props.text}
            </p>
        </div>
    );
};

export default memo(Skill);