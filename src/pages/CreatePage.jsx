import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FieldComponent from "../components/FieldComponent";

const CreatePage = () => {
  return (
    <div className="wrapper">
      <Box sx={{ padding: "0px 40px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 1, marginLeft: 2, color: "#262626" }}
        >
          Create new task 🗒️
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: '20px' }}>
          <Box sx={{ mt: "20px", ml: "20px" }} role="presentation">
            <FieldComponent />
          </Box>
          <Box sx={{ mt: "20px", ml: "20px" }} role="presentation">
            <img
              src="/images/main.png"
              alt="Create Task"
              style={{ width: "600px", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreatePage;
