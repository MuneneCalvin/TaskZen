import { ResponsiveContainer } from "recharts";
import "./bigChartBox.scss";

const BigChartBox = () => {
  
  const projects = [
    {
      id: 1,
      name: "Project Apollo",
      hours: 10,
      status: "High",
      progress: 72,
    },
    {
      id: 2,
      name: "Project Zeus",
      hours: 85,
      status: "Low",
      progress: 50,
    },
    {
      id: 3,
      name: "Project TaskZen",
      hours: 72,
      status: "Medium",
      progress: 99,
    },
    {
      id: 4,
      name: "Project Potter",
      hours: 205,
      status: "Track",
      progress: 60,
    },
    {
      id: 5,
      name: "Project Sand-dune",
      hours: 100,
      status: "Medium",
      progress: 56,
    },
    
  ];

  return (
    <div className="bigChartBox">
      <div className="card-header">
        <h1>Active projects</h1>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <div className="card-body">
            <div className="card-table">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Project Name</th>
                    <th>Hours</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{project.hours}</td>
                      <td>
                        <span className={`status bg-${project.status}`}></span>
                        {project.status}
                      </td>
                      <td>
                        <div className="progress">
                          <div
                            className={`progress-bar bg-${project.status}`}
                            role="progressbar"
                            style={{ width: `${project.progress}%` }}
                            aria-valuenow={project.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </td>
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

export default BigChartBox;
