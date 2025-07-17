export const createTask = async (task) => {
  const response = await fetch("http://localhost:4000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создании задачи");
  }

  return await response.json();
};

export const getImportantTasks = async () => {
  const response = await fetch("http://localhost:4000/tasks?isImportant=true");

  if (!response.ok) {
    throw new Error("Ошибка при загрузке задач");
  }

  return await response.json();
};

export const getTodaysTasks = async () => {
  const today = new Date().toISOString().slice(0, 10);

  const response = await fetch(`http://localhost:4000/tasks?createdAt=${today}`);

  if (!response.ok) {
    throw new Error("Ошибка при загрузке задач на сегодня");
  }

  return await response.json();
};

export const getAllTasks = async () => {
  const response = await fetch("http://localhost:4000/tasks");

  if (!response.ok) {
    throw new Error("Ошибка при получении задач");
  }

  return await response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка при удалении задачи");
  }

  return await response.json();
};

export const updateTaskCompleted = async (taskId, completed) => {
  const response = await fetch(`http://localhost:4000/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
};
