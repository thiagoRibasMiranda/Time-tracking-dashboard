// import './CardActivity.css';

function CardActivity(data) {
  const { current, previous } = data.time

  return (
    <div>
      <div>
        <p>{data.title}</p>
        <p>{current}hrs</p>
      </div>
      <div>
        <p>{data.period} - {previous}hrs</p>
      </div>
    </div>
  );
}

export default CardActivity;
