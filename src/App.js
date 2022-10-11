import './App.css';
import CardUser from './components/CardUser/CardUser';
import CardActivity from './components/CardActivity/CardActivity';

function App() {

  const userName = "Thiago Ribas"
  const activityData = {
    title: "Social",
    current: 5,
    previous: 10,
    period: "Last Week"
  };

  return (
    <div>
      <CardUser name={userName} data-testid="card-user" />
      <CardActivity activityData={activityData} data-testid="card-activities" />
    </div>
  );
}

export default App;
