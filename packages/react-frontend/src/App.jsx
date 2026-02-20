import './App.css';
import RideForm from './RideForm';
import CreateRide from './CreateRide';

function App() {
  //post(ride)

  //updateRideList(ride)

  return (
    <div className="app">
      <nav className="navbar">
        <span className="navbar-logo">POLYPOOL</span>
        <button className="createRide-button">Create Ride</button>
      </nav>
      <main className="main-content">
        <CreateRide />
      </main>
    </div>
  );
}

export default App;
