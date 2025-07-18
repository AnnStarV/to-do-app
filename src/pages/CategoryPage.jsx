import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";


import TaskComponent from "../components/TaskComponent";
import {
  getTasksByCategory,
  updateTaskCompleted,
  deleteTask,
} from "../services/taskService";


const CategoryPage = ({ category }) => {
  const [categoryTasks, setCategoryTasks] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([false]);

  useEffect(() => {
    setCategoryTasks(null);
    const fetchCategoryTasks = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const tasks = await getTasksByCategory(category);
        setCategoryTasks(tasks);
      } catch (error) {
        console.log("Error fetching category tasks:", error);
      }
    };

    fetchCategoryTasks();
  }, [category]);

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setCategoryTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleCompleted = async (taskId, currentCompleted) => {
    try {
      const updatedTask = await updateTaskCompleted(taskId, !currentCompleted);

      setCategoryTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? { ...task, completed: updatedTask.completed }
            : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="wrapper">
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          <span style={{ textTransform: "capitalize" }}>{category}</span> Tasks
        </Typography>

        {categoryTasks === null ? (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </Box>
        ) : categoryTasks && categoryTasks.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(410px, 410px))",
              gap: "20px",
              justifyContent: "center",
              justifyItems: "flex-start",
            }}
          >
            {categoryTasks.map((task) => (
              <TaskComponent
                key={task.id}
                id={task.id}
                completed={task.completed}
                setIsCompleted={() => toggleCompleted(task.id, task.completed)}
                title={task.title}
                deleteTask={handleDeleteTask}
                description={task.description}
                isImportant={task.isImportant}
                category={task.category}
                cardColor={task.cardColor}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/images/noImportant.png"
              alt="No Todays Tasks"
              style={{ width: "auto", height: "500px" }}
            />
            <Typography variant="body1">No {category} tasks found.</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default CategoryPage;