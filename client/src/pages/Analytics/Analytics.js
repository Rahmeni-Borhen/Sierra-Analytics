import '../Dashboard.css'
import MainDash from './MainDash/MainDash';
import Sidebar from '../../components/Sidebar';
import RightSide from './RigtSide/RightSide';

function Analytics() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Analytics;



