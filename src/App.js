import './App.css';
import { useState, useEffect } from 'react';
import CardUser from './components/CardUser/CardUser';
import CardActivity from './components/CardActivity/CardActivity';

function App() {
  const [userName] = useState("Jeremy Robson")
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

  const handleEvent = (e) => {
    const { name } = e.target 
    setTime(name)
    if (name === "daily") setPeriod("Yesterday")
    if (name === "weekly") setPeriod("Last Week")
    if (name === "monthly") setPeriod("Last Month")
  }

  useEffect(() => {
    getData()
    setTime("weekly")
    setPeriod("Last Week")
  }, [])
  
  return (
    <div className='App'>
      <CardUser name={userName} onPress={handleEvent} data-testid="card-user" />
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
