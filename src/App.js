import './App.css';
import { useState, useEffect } from 'react';
import CardUser from './components/CardUser/CardUser';
import CardActivity from './components/CardActivity/CardActivity';

function App() {
  const [userName] = useState("Thiago Ribas")
  const [data, setData] = useState([]);
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");
  const getData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }
  useEffect(() => {
    getData()
    setTime("weekly")
    setPeriod("Last Week")
  }, [])
  
  return (
    <div>
      <CardUser name={userName} data-testid="card-user" />
      {
        data.map((d, index) => 
          <CardActivity
            title={d.title}
            time={d.timeframes[time]}
            period = {period}
            data-testid="card-activities"
            key={index}
          />
        )
      }
    </div>
  );
}

export default App;
