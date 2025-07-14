import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TaskComponent from "../components/TaskComponent";
import {
  getImportantTasks,
  updateTaskCompleted,
  deleteTask,
} from "../services/taskService";

const ImportantTasksList = () => {
  const [importantTasks, setImportantTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([false]);

  useEffect(() => {
    const fetchImportantTasks = async () => {
      try {
        const tasks = await getImportantTasks();
        setImportantTasks(tasks);
      } catch (error) {
        console.error("Error fetching important tasks:", error);
      }
    };

    fetchImportantTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setImportantTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleCompleted = async (taskId, currentCompleted) => {
    try {
      const updatedTask = await updateTaskCompleted(taskId, !currentCompleted);

      setImportantTasks((prev) =>
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
          Important Tasks
        </Typography>

        {importantTasks.length > 0 ? (
          <Box sx={{ padding: "20px" }}>
            {importantTasks.map((task) => (
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
              alt="No Important Tasks"
              style={{ width: "auto", height: "500px" }}
            />
            <Typography variant="body1">No important tasks found.</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default ImportantTasksList;
