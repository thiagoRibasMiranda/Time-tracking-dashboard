import './CardActivity.css';
import {ReactComponent as IconEllipsis} from './images/icon-ellipsis.svg'
import Icon from "./icon"


function CardActivity(data) {
  const { current, previous } = data.time
  const { title } = data

  return (
    <div className='CardActivity'>
      <Icon title={title}/>
      <div className='ActivityData'>
        <div>
          <p>{title}</p>
          <IconEllipsis className='IconEllipsis' fill="#BBC0FF" />
        </div>
        <div>
          <p>{current}hrs</p>
          <p>{data.period} - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default CardActivity;
