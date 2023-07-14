import { ResponsiveContainer } from "recharts";
import "./barChartBox.scss";


const BarChartBox = ( ) => {

  const tasks =[
    {
      id: 1,
      Name: "Create wireframe",
      Deadline: "5d",
      Status: "Approved",
    },
    {
      id: 2,
      Name: "Design website mockup",
      Deadline: "2d",
      Status: "Declined",
    },
    {
      id: 3,
      Name: "Code homepage",
      Deadline: "1w",
      Status: "Pending",
    },

  ]
  return (
    <div className="barChartBox">
      <h1>My Tasks</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <div className="task-body">
            <div className="task-table">
              <table className="table-task">
                <thead className="thead-light-task">
                  <tr>
                    <th>Name</th>
                    <th>Deadline</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.Name}</td>
                      <td>{task.Deadline}</td>
                      <td>{task.Status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
