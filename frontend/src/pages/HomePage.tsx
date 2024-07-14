import React, { useState } from 'react'
import titleStore from 'store/title'

import Btn from 'components/ui/SolidBtn'

import searchStore from 'store/search';


export default function Home() {

    const {setPageTitle} = titleStore();
    const {query, setQuery} = searchStore();

    useState(() => {
        setPageTitle("Home");
    });
    

    return <>
        <Btn>test</Btn>
    
        {Array.from({length: 100}, (_, i) => {
            return <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque.</p>
        })}
    </>
    
}
