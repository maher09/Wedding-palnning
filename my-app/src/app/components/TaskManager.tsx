import React, { useState, useEffect } from "react";
import Addtasks from "../components/addtasks";

const TaskManager = () => {
  const [tasks, setTasks] = useState<string[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isChecked, setIsChecked] = useState<boolean[]>(() => {
    const savedIsChecked = localStorage.getItem("isChecked");
    return savedIsChecked ? JSON.parse(savedIsChecked) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
  }, [isChecked]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setIsChecked((prevIsChecked) => [...prevIsChecked, false]);
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setIsChecked((prevIsChecked) => prevIsChecked.filter((_, i) => i !== index));
  };

  const handleToggle = (index: number) => {
    setIsChecked((prevIsChecked) =>
      prevIsChecked.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <Addtasks
      tasks={tasks}
      isChecked={isChecked}
      onToggle={handleToggle}
      onAddTask={addTask}
      onRemoveTask={removeTask}
    />
  );
};

export default TaskManager;
