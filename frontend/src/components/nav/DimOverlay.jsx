import React from 'react';

import DimLayerCSS from './DimOverlay.module.css';

export default function DimOverlay(props) {
    return <>
            <div className={DimLayerCSS.dimOverlay} style={{ zIndex: props.zIndex }} onClick={() => props.onClick()}></div>
    </>
    
}
