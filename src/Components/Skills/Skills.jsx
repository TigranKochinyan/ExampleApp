import React, { memo } from 'react';
import Skill from './Skill';
import './skills.scss'

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-heading">
                <h3>
                Skillset
                </h3>
                <p>
                    With skills in over 4 different fields of design, I am the perfect 
                    person to hire when it comes to a full 
                    fledged project. Whatever your needs are, I can pretty 
                    much take on any challenge.
                </p>
            </div>
            <div className="skills-row">
                <Skill 
                    icon={'4'}
                    title="Html, Css, Bootstrap" 
                    text="text"
                />
                <Skill 
                    icon={'4'}
                    title="Java Script (ES6)" 
                    text="text"
                />
                <Skill 
                    icon={'4'}
                    title="React Js"
                    text="text"
                />
                <Skill 
                    icon={'4'}
                    title="Vue Js" 
                    text="text"
                />
            </div>
            
        </div>
    );
};

export default Skills;//#8491a0