import { Form, Label } from '@ui5/webcomponents-react';
import { Input } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Select } from '@ui5/webcomponents-react';
import { Option } from '@ui5/webcomponents-react';
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchMovieById } from '../store';
import '../styles/styles.scss'

export default function FormSearchById() {
    const dispatch = useDispatch();
  const [id, setId] = useState();
  const [plot, setPlot] = useState("Short")
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovieById(id, plot));
  }
  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input className='input' placeholder='ID *' onChange={handleInputChange}/>
      <Label className='plot'>Plot:</Label>
      <Select
        className='input'
        onChange={(e) => setPlot(e.target.selectedOption.textContent)}
      >
        <Option>
          Short
        </Option>
        <Option>
          Full
        </Option>
      </Select>
      <Button submits >Pesquisar</Button>
    </form>
  )
}