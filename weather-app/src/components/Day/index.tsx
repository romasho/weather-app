import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

interface IDayProps {
  day: number;
  imgCode: string;
  temp: number;
  index: number;
}

function Day({ day, imgCode, temp, index }: IDayProps) {
  return (
    <>
      {index === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: { md: "auto", sm: "100%" },
          }}
        >
          <img
            src={`http://openweathermap.org/img/wn/${imgCode}@2x.png`}
            alt="weather icon"
            style={{ height: "100%" }}
          />
          <Box>
            <Typography
              color="white"
              sx={{ fontSize: "2rem", textTransform: "uppercase" }}
            >
              Today
            </Typography>
            <Typography color="white" sx={{ fontSize: "4rem" }}>{`${Math.floor(
              temp
            )}°`}</Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            alignItems: "center",
          }}
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
      )}
    </>
  );
}

export default Day;
