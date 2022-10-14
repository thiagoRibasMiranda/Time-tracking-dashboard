// import './CardUser.css';

function CardUser({ name, onPress }) {
  return (
    <div>
      <div>
        <p>Report for</p>
        <p>{name}</p>
      </div>
      <div>
        <button type="button" name="daily" onClick={onPress}>Daily</button>
        <button type="button" name="weekly" onClick={onPress}>Weekly</button>
        <button type="button" name="monthly" onClick={onPress}>Monthly</button>
      </div>
    </div>
  );
}

export default CardUser;
