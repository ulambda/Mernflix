import React from 'react';

import CoverCardCSS from './CoverCard.module.css';

export default function CoverCard(props : any) {
    return <>
        <div className={CoverCardCSS.coverCard}>
            <img src={props.img} alt={props.title} />
            <h1>{props.title}</h1>
        </div>
    </>
}
