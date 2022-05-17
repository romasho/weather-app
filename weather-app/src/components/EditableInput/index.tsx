import { TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { citySlice } from "../../store/reducers/citySlice";

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
    const res = data.name !== "" ? data.name : city;
    setIsEditing(false);
    dispatch(citySlice.actions.changeCity(res));
    setValue("name", res);
    //request
  };

  return (
    <>
      {isEditing ? (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          onBlur={handleSubmit(onSubmit)}
          sx={{ pt: "10px" }}
        >
          <TextField
            {...register("name")}
            type="text"
            defaultValue={city}
            size="small"
            inputProps={{
              style: {
                padding: "10px 10px",
                fontSize: "1.25rem",
                fontWeight: "bold",
              },
            }}
            autoFocus
          />
        </Box>
      ) : (
        <Typography
          onClick={() => setIsEditing(true)}
          sx={{ p: "10px 10px", fontWeight: "bold", fontSize: "1.25rem" }}
        >
          {city}
        </Typography>
      )}
    </>
  );
}

export default EditableInput;
