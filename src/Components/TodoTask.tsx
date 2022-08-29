import React from "react";
import { ITask } from "../interFaces";




interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content mt-5">
        <span className="bg-slate-400 text-white btn btn-success">{task.taskName}</span>
        <span className="bg-slate-400 text-white btn btn-success ml-3">{task.deadline}</span>
      </div>
      <button className="btn btn-primary mt-5"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;