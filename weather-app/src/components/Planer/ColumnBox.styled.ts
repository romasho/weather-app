import { Box, styled } from "@mui/material";

const CustomnBox = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: "1rem",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: `inset 0 0 6px ${theme.palette.primary.main}`,
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    borderRadius: "2rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2rem",
  },
}));

export default CustomnBox;
