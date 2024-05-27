import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface AddtasksProps {
  tasks: string[];
  isChecked: boolean[];
  onToggle: (index: number) => void;
  onAddTask: (task: string) => void;
  onRemoveTask: (index: number) => void;
}

function Addtasks({ tasks, isChecked, onToggle, onAddTask, onRemoveTask }: AddtasksProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = () => {
    if (inputValue === "") {
      alert("You must write something!");
      return;
    }
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <>

      <div id="myDIV" className="containe">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          className="input"
          type="text"
          id="myInput"
          placeholder="Title..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span onClick={handleAddTask} className="addBtn">
          Add
        </span>
      </div>
      <ul id="myUL" className="style-1 style-2 style-3 style-4 style-5 style-6">
        
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex",  }} >
            <div
              className="checkbox"
              style={{ display: "flex", height: "5px", cursor: "pointer" }}
              onClick={() => onToggle(index)}
            >
              {!isChecked[index] ? (
                
                <svg
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="icon-hov"
                  style={{ fontSize: "34px", marginRight: "10px" }}
                 
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                </svg>
               
               
              ) : (
               
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#00a976", height: "34px", width: "34px", marginRight: "10px" , }}
                />
                 
             
              )}
            </div>
            <span style={{textDecoration: isChecked[index] ? "line-through" : "none" ,paddingTop:"2px"}}>{task}</span>
            <span onClick={() => onRemoveTask(index)} className="close">
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Addtasks;
