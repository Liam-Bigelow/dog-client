import Activty from "../activity/Activity"
import Pets from "../pets/Pets"
import Upcoming from "../upcoming/Upcoming"
import "./Dashboard.css"

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div>
        <h4>Upcoming Bookings</h4>
        <Upcoming />
        <md-divider style={{ margin: "10px 0" }}></md-divider>
        <h4>Recent Activity</h4>
        <Activty />
      </div>
      <Pets />
    </div>
  )
}

export default Dashboard
