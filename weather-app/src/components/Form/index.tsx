import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@/hooks/redux';
import { tasksSlice } from '@/store/reducers/taskSlice';
import { Button } from '@/components/components.styled';

import { CustomInput, ErrorText } from './Inputs.styled';

type IFormData = {
  date: string;
  time: string;
  title: string;
};

export default function Form({ onCancel }: { onCancel: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const dispatch = useAppDispatch();

  function onSubmit(data: IFormData) {
    const { date, time, title } = data;
    dispatch(tasksSlice.actions.addTask({ date, time, title }));
    reset();
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput {...register('title', { required: 'Title is required' })} type="text" />
      {errors.title?.type === 'required' && <ErrorText>Title is required</ErrorText>}
      <CustomInput
        type="date"
        {...register('date', {
          required: 'Date is required',
          min: new Date().toISOString().split('T')[0],
        })}
      />
      {errors.date?.type === 'required' && <ErrorText>Date is required</ErrorText>}
      {errors.date?.type === 'min' && <ErrorText>The minimum date is today</ErrorText>}
      <CustomInput type="time" {...register('time', { required: 'Time is required' })} />
      {errors.time?.type === 'required' && <ErrorText>Time is required</ErrorText>}
      <Button type="submit" contained style={{ margin: '1rem auto 0' }}>
        Create
      </Button>
    </form>
  );
}
