import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';

import CoverCard from 'components/ui/CoverCard';

export default function SearchSpace() {

  const query = useParams().query;

  const api = "https://www.omdbapi.com/?s=" + query + "&apikey=" + process.env.REACT_APP_OMDB_API_KEY;

  const {data} = useFetch(api);
  
  const results = data != null && data.Search;

  return <>
    <div className="flex">
      {results && results.map((movie: any) => { return <CoverCard title={movie.Title} img={movie.Poster}></CoverCard> } )}
      {!results && <h1>No results found</h1>}
    </div>
  </>
}
