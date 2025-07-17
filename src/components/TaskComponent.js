import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

const TaskComponent = ({
  id,
  title,
  description,
  isImportant,
  category,
  cardColor,
  completed,
  setIsCompleted,
  deleteTask,
}) => {
  const images = {
    work: "🧑‍💼",
    home: "🏠",
    hobby: "🎨",
    another: "🌀",
  };

  const handleCompleted = () => {
    setIsCompleted();
  };

  const handleDeleted = (id) => {
    deleteTask(id);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: cardColor,
        margin: "10px",
        display: "flex",
        width: "400px", 
        flexDirection: "row",
      }}
    >
      <Box>
        <Typography
          variant="body2"
          sx={{ color: isImportant ? "red" : "black" }}
        >
          <Checkbox
            label="isCompleted"
            checked={completed}
            color="success"
            onChange={handleCompleted}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            textDecoration: completed ? "line-through" : "none", 
            opacity: completed ? 0.5 : 1,
          }}
        >
          {title || "No Title"}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          {description || "No Description"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span>Category: {images[category]}</span>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton aria-label="delete" onClick={() => handleDeleted(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskComponent;
