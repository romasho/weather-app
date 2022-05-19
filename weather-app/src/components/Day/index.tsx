import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

interface IDayProps {
  day: number;
  imgCode: string;
  temp: number;
}

function Day({ day, imgCode, temp }: IDayProps) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        color={theme.palette.text.primary}
        sx={{ fontSize: "1.5rem" }}
      >
        {new Date(day).toLocaleString("en-US", {
          weekday: "short",
        })}
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${imgCode}@2x.png`}
        alt="weather icon"
      />
      <Typography
        color={theme.palette.text.primary}
        sx={{ fontSize: "1.25rem" }}
      >{`${Math.floor(temp)}°`}</Typography>
    </Box>
  );
}

export default Day;
