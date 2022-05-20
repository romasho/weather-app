import { styled } from "@mui/material";

const ColumnBox = styled("div")(({ theme }) => ({
  maxWidth: "100vw",
  height: "100vh",
  padding: "4%",
  backgroundColor: `${theme.palette.background.default}`,
  background: "center/cover",
  backgroundBlendMode: "multiply",
  transition: "background-image 1s ease-in-out",
}));

const BackgroundBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  background: "center/cover, rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "multiply",
  transition: "background-image 1s ease-in-out",
  boxShadow: "0 0 2rem rgba(0,0,0,0.5)",
}));

const Section = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
  position: "relative",
}));

export { ColumnBox, BackgroundBox, Section };
