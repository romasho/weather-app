import { Box, Typography } from "@mui/material";
import { transform } from "typescript";
import { theme } from "../../theme";

interface IDayProps {
  imgCode: string;
  temp: number;
}

function Today({ imgCode, temp }: IDayProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mr: "3rem" }}>
      <img
        src={`http://openweathermap.org/img/wn/${imgCode}@2x.png`}
        alt="weather icon"
        style={{ height: "100%" }}
      />
      <Box>
        <Typography
          color={theme.palette.text.primary}
          sx={{ fontSize: "2rem", textTransform: "uppercase" }}
        >
          Today
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          sx={{ fontSize: "4rem" }}
        >{`${Math.floor(temp)}°`}</Typography>
      </Box>
    </Box>
  );
}

export default Today;
