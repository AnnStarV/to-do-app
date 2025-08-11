import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import TaskComponent from "../components/TaskComponent";
import {
  getTodaysTasks,
  updateTaskCompleted,
  deleteTask,
} from "../services/taskService";

const TodayPage = () => {
  const [todaysTasks, setTodaysTasks] = useState(null);

  const fetchTodaysTasks = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const tasks = await getTodaysTasks();

      await new Promise((resolve) =>
        setTimeout(() => {
          setTodaysTasks(tasks.filter((task) => task.completed === false));
          resolve(); 
        }, 800)
      );
    } catch (error) {
      console.log("Error fetching today's tasks:", error);
    }
  };

  useEffect(() => {
    fetchTodaysTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTodaysTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleCompleted = async (taskId, currentCompleted) => {
    try {
      const updatedTask = await updateTaskCompleted(
        taskId,
        !currentCompleted,
        new Date().toISOString().slice(0, 10)
      );

      setTodaysTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? {
                ...task,
                completed: updatedTask.completed,
                completedAt: updatedTask.completedAt,
              }
            : task
        )
      );

      fetchTodaysTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="wrapper">
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Todays Tasks
        </Typography>

        {todaysTasks === null ? (
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
        ) : todaysTasks && todaysTasks.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(410px, 410px))",
              gap: "20px",
              justifyContent: "center",
              justifyItems: "flex-start",
            }}
          >
            {todaysTasks.map((task) => (
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
            <Typography variant="body1">No todays tasks found.</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TodayPage;
