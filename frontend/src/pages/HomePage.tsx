import React, { useState } from 'react'
import titleStore from 'store/title'

import Btn from 'components/ui/SolidBtn'

import searchStore from 'store/search';
import useFetch from 'hooks/useFetch';
import CoverCard from 'components/ui/CoverCard';


export default function Home() {

    const {setPageTitle} = titleStore();
    const {query, setQuery} = searchStore();

    useState(() => {
        setPageTitle("Home");
    });
    
    const api = "https://www.omdbapi.com/?s=" + "" + "&apikey=" + process.env.REACT_APP_OMDB_API_KEY;

    const {data} = useFetch(api);
    const results = data != null && data.Search;

    return <>
        <div className="flex">
            {results ? results.map((movie: any) => { return <CoverCard title={movie.Title} img={movie.Poster}></CoverCard> }) : <h1>No results found</h1>}
        </div>
    </>
    
}
