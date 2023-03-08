import { Button, FlexBox, Text } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetMovie } from '../store'

export default function Movie() {
  const dispatch = useDispatch();
  const movie = useSelector((state: any) => state.movie.data);
  const loading = useSelector((state: any) => state.movie.loading);
  const error = useSelector((state: any) => state.movie.error);
 
  console.log(movie);
  if (movie.Response === "False") {
    return<>
      <Text className='movieTitle'>Filme não encontrado!</Text>
      <Button onClick={() => dispatch(resetMovie())}>Back to Home</Button>
    </>
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {movie && (
        <FlexBox className='movieDetails' justifyContent='Center'>
          <FlexBox className='moviePoster' direction='Column' alignItems='Center'>
            <img src={movie.Poster} />
            <Text className='movieTitle'>{movie.Title}</Text>
            <Text className='movieInfos'>Duration: {movie.Runtime}</Text>
            <Text>Released: {movie.Released}</Text>
            <Text className='details'>Genre: {movie.Genre}</Text>
            <Text className='details'>Directors: {movie.Director}</Text>
            <Text className='details'>Writers: {movie.Writer}</Text>
            <Text className='details'>Actors: {movie.Actors}</Text>
            <Text>Meta Score: {movie.Metascore}</Text>
            <Text>Language: {movie.Language}</Text>
            <Text>Country: {movie.Country}</Text>
            <Text>DVD Release: {movie.DVD}</Text>
            <Text>Type: {movie.Type}</Text>
            <Text>Production: {movie.Production}</Text>
            <Text>id: {movie.imdbID}</Text>
            <Text>Rating: {movie.imdbRating}</Text>
            <Text>Votes: {movie.imdbVotes}</Text>
          </FlexBox>
          <FlexBox className='detailsGap' direction='Column'>
            <Text className='movieTitle'>Plot: {movie.Plot}</Text>
            <Text className='movieInfos'>Awards: {movie.Awards}</Text>
            {movie.Ratings.map((rating: any, index: number) => <Text key={index} className='movieInfos'>{rating.Source} Value: {rating.Value}</Text>)}
            <Text className='movieInfos'>Box Office: {movie.BoxOffice}</Text>
          </FlexBox>
        </FlexBox>
      )}
      <Button onClick={() => dispatch(resetMovie())}>Back to Home</Button>
    </>
  )
}