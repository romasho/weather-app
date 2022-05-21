import React from "react";
import Portal from "../Portal";
import {
  Box,
  IconButton,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface IModalProps {
  isOpened: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
  isLoading?: boolean;
}

export default function Modal({
  isOpened,
  onCancel,
  children,
  isLoading,
}: IModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <>
      {isOpened && (
        <Portal>
          <Box
            onClick={handleClick}
            sx={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "1110",
            }}
          >
            <Box
              sx={{
                position: "relative",
                backgroundColor: "ghostwhite",
                borderRadius: "4px",
                pr: { xs: "1.5rem", md: "3rem" },
                pl: { xs: "1.5rem", md: "3rem" },
                pt: "3rem",
                pb: "3rem",
                m: 2,
                mr: 4,
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                }}
                onClick={onCancel}
              >
                <CloseRoundedIcon />
              </IconButton>
              {children}
            </Box>
          </Box>
        </Portal>
      )}
    </>
  );
}
