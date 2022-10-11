// import './CardUser.css';

function CardUser(data) {
  return (
    <div>
      <div>
        <p>Report for</p>
        <p>{data.name}</p>
      </div>
      <div>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  );
}

export default CardUser;
