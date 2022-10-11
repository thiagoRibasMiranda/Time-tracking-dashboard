// import './CardActivity.css';

function CardActivity(data) {

  const { title, current, previous, period } = data.activityData

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{current}hrs</p>
      </div>
      <div>
        <p>{period} - {previous}hrs</p>
      </div>
    </div>
  );
}

export default CardActivity;
