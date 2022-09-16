import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { citySlice } from '@/store/reducers/citySlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Typography } from '@/components/components.styled';

import { Input } from './components.styled';

interface IFormData {
  name: string;
}

function EditableInput() {
  const [isEditing, setIsEditing] = useState(false);
  const { city } = useAppSelector((state) => state.citySlice);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { name: city },
  });

  const onSubmit = async (data: IFormData) => {
    const res = data.name || city;
    setIsEditing(false);
    dispatch(citySlice.actions.changeCity(res));
    setValue('name', res);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
          <Input {...register('name')} type="text" defaultValue={city} autoFocus />
        </form>
      ) : (
        <Typography onClick={() => setIsEditing(true)} fontSize={'2.5rem'} color="white" bold>
          {city || 'Enter city name'}
        </Typography>
      )}
    </>
  );
}

export default EditableInput;
