import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Banner from "../../assets/images/kpmgHome.png";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/view");
  };

  return (
    <Box
      className="hero-section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "60vh",
        backgroundColor: "dark",
      }}
    >
      <Box
        component="img"
        alt="hero-background"
        src={Banner}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              sx={{ mt: -4, mb: 2 }}
              color="primary"
            >
              {/* Welcome to Our Platform */}
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleButtonClick}
          >
            Let's Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
