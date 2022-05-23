import { TextField, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { citySlice } from '../../store/reducers/citySlice';

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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
          <TextField
            {...register('name')}
            type="text"
            variant="outlined"
            defaultValue={city}
            size="small"
            inputProps={{
              style: {
                padding: '10px 10px',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                direction: 'rtl',
                color: 'white',
              },
            }}
            autoFocus
          />
        </Box>
      ) : (
        <Typography
          onClick={() => setIsEditing(true)}
          component="h1"
          sx={{ p: '10px 10px', fontWeight: 'bold', fontSize: '2.5rem' }}
          color="white"
        >
          {city}
        </Typography>
      )}
    </>
  );
}

export default EditableInput;
