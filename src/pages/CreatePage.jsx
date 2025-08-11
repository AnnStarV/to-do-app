import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import CreateTaskComponent from "../components/CreateTaskComponent";
import { createTask } from "../services/taskService";

const CreatePage = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isImportant, setIsImportant] = React.useState(false);
  const [category, setCategory] = React.useState("another");
  const [cardColor, setCardColor] = React.useState("#e1dfda");

  const colors = {
    work: "#d0e0ed",
    home: "#aabfb2",
    hobby: "#d3bde8",
    another: "#e1dfda",
  };

  const handleSubmit = async () => {

    if (!title.trim()) {
      alert("Title is required to create a task.");
      return;
    }

    const task = {
      title,
      description,
      isImportant,
      category,
      cardColor,
      completed: false, 
      createdAt: new Date().toISOString().slice(0, 10),
      completedAt: new Date().toISOString().slice(0, 10),
    };
    

    try {
      const result = await createTask(task);

      setTitle("");
      setDescription("");
      setIsImportant(false);
      setCategory("another");
      setCardColor("#e1dfda");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="wrapper">
      <Box sx={{ padding: "0px 40px"}}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 1, marginLeft: 2, color: "#262626" }}
        >
          Create new task 🗒️
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          <Box sx={{ mt: "20px", ml: "20px" }} role="presentation">
            <CreateTaskComponent
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              isImportant={isImportant}
              setIsImportant={setIsImportant}
              category={category}
              setCategory={setCategory}
              cardColor={cardColor}
              setCardColor={setCardColor}
              colors={colors}
            />
            <Box
              sx={{
                mt: "40px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              role="presentation"
            >
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#EDCC7B",
                  color: "#2b2b2b",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#e8bf61",
                  },
                }}
              >
                Add New Task
              </Button>
            </Box>
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
