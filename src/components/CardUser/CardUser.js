import './CardUser.css';
import userImg from './images/image-jeremy.png'

function CardUser({ name, onPress }) {
  return (
    <div className='CardUser'>
      <div className='UserData'>
        <img src={userImg} alt="UserImg"/>
        <div>
          <p>Report for</p>
          <h1>{name}</h1>
        </div>
      </div>
      <div className='MenuButtons'>
        <button type="button" name="daily" onClick={onPress}>Daily</button>
        <button type="button" name="weekly" onClick={onPress}>Weekly</button>
        <button type="button" name="monthly" onClick={onPress}>Monthly</button>
      </div>
    </div>
  );
}

export default CardUser;
