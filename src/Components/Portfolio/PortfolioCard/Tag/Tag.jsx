import React from 'react';
import './tag.scss';

const Tag = (props) => {

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <>
            <small className={`tag tag-${props.tag}`}>{capitalize(props.tag)}</small>
        </>
    )
};

export default Tag;