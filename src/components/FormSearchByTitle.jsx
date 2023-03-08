import { Form, Label } from '@ui5/webcomponents-react';
import { Input } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Select } from '@ui5/webcomponents-react';
import { Option } from '@ui5/webcomponents-react';
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import '../styles/styles.scss'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchMovie } from '../store';

export default function FormSearchByTitle() {

  const dispatch = useDispatch();
  const [form, setForm] = useState(
    {
      title: '',
      year: '',
    }
  );
  const [plot, setPlot] = useState("Short")
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovie(form.title, form.year, plot));
  }
  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input name='title' className='input' placeholder='Title *' value={form.title} onChange={handleInputChange} />
      <Input name='year' className='input' placeholder='Year' value={form.year} onChange={handleInputChange} />
      <Label className='plot'>Plot:</Label>
      <Select
        name='plot'
        className='input'
        onChange={(e) => setPlot(e.target.selectedOption.textContent)}
      >
        <Option>
          short
        </Option>
        <Option>
          full
        </Option>
      </Select>
      <Button submits >Pesquisar</Button>
    </form>
  )
}