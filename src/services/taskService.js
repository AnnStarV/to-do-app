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

export const getAllTasks = async () => {
  const response = await fetch("http://localhost:4000/tasks");

  if (!response.ok) {
    throw new Error("Ошибка при получении задач");
  }

  return await response.json();
};