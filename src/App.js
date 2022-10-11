import './App.css';
import CardUser from './components/CardUser/CardUser';

function App() {
  const userName = "Thiago Ribas"
  return (
    <div>
      <CardUser name={userName} data-testid="card-user" />
    </div>
  );
}

export default App;
