import './CardActivity.css';
import {ReactComponent as IconEllipsis} from './images/icon-ellipsis.svg'
import Icon from "./icon"


function CardActivity(data) {
  const { current, previous } = data.time
  const { title } = data
  const na = title.replace(/\s/g, "");

  return (
    <div className={`CardActivity ${na}`} data-testid="card-activity">
      <div className='Icon'>
        <Icon title={title}/>
      </div>
      <div className='ActivityData'>
        <div className='Title'>
          <p>{title}</p>
          <IconEllipsis className='IconEllipsis' fill="#BBC0FF" />
        </div>
        <div className='Times'>
          <p className='Time'>{current}hrs</p>
          <p>{data.period} - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default CardActivity;
