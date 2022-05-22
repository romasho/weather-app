import { styled } from "@mui/material";
import { Typography } from "@mui/material";

export const Message = styled(Typography)(({ theme }) => ({
  p: "10px 10px",
  fontWeight: "bold",
  fontSize: "2.5rem",
  color: `${theme.palette.text.primary}`,
}));
