import { Button, FlexBox, Label } from '@ui5/webcomponents-react';
import { Text } from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FormSearchByTitle from '../components/FormSearchByTitle';
import FormSearchById from '../components/FormSerachById';
import Movie from '../components/Movie';
import '../styles/styles.scss';

export default function MainPage() {

  const [searchBy, setSearchBy] = useState('');
  const movie = useSelector((state: any) => state.movie.data);

  return (
    <FlexBox
    alignItems="Center"
      direction="Column"
      justifyContent="Center"
      wrap="NoWrap"
      className='container'>
      {movie === null ? 
        <>
        <Text className='intro' >Welcome to InfoFlix, the best source of movies and series information</Text>
        <Text className='info' >To get started, fill in the information below.</Text>
        <Text className='info' >Fields with (*) are mandatory</Text>
        <FlexBox className='searchBy' alignItems='Center' justifyContent='SpaceBetween'>
          <Label className='plot'>Search by:</Label>
          <Button onClick={() => setSearchBy('title')} >Title</Button>
          <Button onClick={() => setSearchBy('id')}>ID</Button>
        </FlexBox>
        {searchBy === 'title' ? <FormSearchByTitle/> : <></>}
        {searchBy === 'id' ? <FormSearchById /> : <></>}
        </>
        :
        <Movie />
    }
    </FlexBox>
  )
}