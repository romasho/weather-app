import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { tasksSlice } from "../../store/reducers/taskSlice";
import { CustomInput, ErrorText } from "./Inputs.styled";

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
    mode: "onSubmit",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const dispatch = useAppDispatch();

  function onSubmit(data: IFormData) {
    const { date, time, title } = data;
    dispatch(tasksSlice.actions.addTask({ date, time, title }));
    reset();
    onCancel();
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <TextField
        {...register("title", { required: "Task is required" })}
        type="text"
        fullWidth
        error={!!errors.title}
        helperText={errors.title?.message}
        size="small"
      />
      <CustomInput
        type="date"
        {...register("date", {
          required: "Date is required",
          min: new Date().toISOString().split("T")[0],
        })}
      />
      {errors.date?.type === "required" && (
        <ErrorText>Date is required</ErrorText>
      )}
      {errors.date?.type === "min" && (
        <ErrorText>The minimum date is today</ErrorText>
      )}
      <CustomInput
        type="time"
        {...register("time", { required: "Time is required" })}
      />
      {errors.time?.type === "required" && (
        <ErrorText>Time is required</ErrorText>
      )}
      <Button
        variant="contained"
        type="submit"
        disabled={Object.keys(errors).length === 0 ? false : true}
        className="submit"
        sx={{ m: "1rem auto 0" }}
      >
        Отправить
      </Button>
    </Box>
  );
}
