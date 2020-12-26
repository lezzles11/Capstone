import React, { Component } from "react";
import AddTaskModal from "./AddBiteSizedTask";
import TimerModal from "./TimerModal";
import ArrowUp from "../../components/icons/ArrowUp";
import ArrowDown from "../../components/icons/ArrowDown";

function TableItem({ id, done, task }) {
  return (
    <tr id={id}>
      <th scope="row">
        {done === true && (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={task}
              checked
            />
            <label className="form-check-label" for={task}>
              <i>Done?</i>
            </label>
          </div>
        )}{" "}
        {done !== true && (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={task}
            />
            <label className="form-check-label" for={task}>
              <i>Done?</i>
            </label>
          </div>
        )}
      </th>
      <td>{task}</td>
      <td>
        <ArrowUp />
        <ArrowDown />
      </td>
      <td>
        <TimerModal name="Start 25 minute timer" />
      </td>
    </tr>
  );
}

const initialState = [
  {
    id: 1,
    task: "Finish the signup page",
    done: true,
  },
  {
    id: 2,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 3,
    task: "Finish the calendar page",
    done: true,
  },
  {
    id: 4,
    task: "Finish the ongoing projects page",
    done: true,
  },
];
export default class TaskBreakdownTable extends Component {
  loadTasks = (tasks) => {
    let taskList = [];
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i]);
      taskList.push(
        <TableItem
          task={tasks[i].task}
          done={tasks[i].done}
        />
      );
      return taskList;
    }
  };
  render() {
    let tasks = this.props.tasks;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <strong>Task Breakdown</strong>
          </h4>{" "}
          <h5 className="blue-text pb-2">
            <strong>Make it into bite sized pieces </strong>
          </h5>
          <p className="card-text">
            Break a task into 100 sections. Note what
            percentage is done. For a 1,500 word report,
            every sentence is pretty much 1%.
          </p>
          <AddTaskModal name="Add Bite Sized Task" />
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Done?</th>
                <th scope="col">Task</th>

                <th scope="col">Sort</th>

                <th scope="col">Timer</th>
              </tr>
            </thead>
            <tbody>{this.loadTasks(tasks)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

//   return (
//     <div className="card">
//       <div className="card-body">
//         <h4 className="card-title">
//           <strong>Task Breakdown</strong>
//         </h4>{" "}
//         <h5 className="blue-text pb-2">
//           <strong>Make it into bite sized pieces </strong>
//         </h5>
//         <p className="card-text">
//           Break a task into 100 sections. Note what
//           percentage is done. For a 1,500 word report, every
//           sentence is pretty much 1%.
//         </p>
//         <AddTaskModal name="Add Bite Sized Task" />
//         <table className="table table-sm">
//           <thead>
//             <tr>
//               <th scope="col">Done?</th>
//               <th scope="col">Task</th>

//               <th scope="col">Sort</th>

//               <th scope="col">Timer</th>
//             </tr>
//           </thead>
//           <tbody>
//             <TableItem
//               done="false"
//               item="Users will be able to input two emails, in which their friends will get regular updates of."
//             />
//             <TableItem
//               done="false"
//               item="Users will be able to "
//             />
//             <TableItem
//               done="true"
//               item="Finish the home page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the login page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the signup page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the calendar page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the project page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the ongoing projects page"
//             />
//             <TableItem
//               done="true"
//               item="Finish the past projects page"
//             />
//             <TableItem
//               number="false"
//               item="Finish the ongoing projects page"
//             />
//             <TableItem
//               number="true"
//               item="Finish the past projects page"
//             />
//             <TableItem
//               number="false"
//               item="Finish the Add Deliverables page"
//             />
//             <TableItem
//               number="false"
//               item="Finish the email page"
//             />
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
