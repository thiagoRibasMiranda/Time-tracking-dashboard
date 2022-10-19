import {ReactComponent as IconExercise} from './images/icon-exercise.svg'
import {ReactComponent as IconPlay} from './images/icon-play.svg'
import {ReactComponent as IconSelfCare} from './images/icon-self-care.svg'
import {ReactComponent as IconSocial} from './images/icon-social.svg'
import {ReactComponent as IconStudy} from './images/icon-study.svg'
import {ReactComponent as IconWork} from './images/icon-work.svg'

const iconTypes = {
  Exercise: IconExercise,
  Play: IconPlay,
  SelfCare: IconSelfCare,
  Social: IconSocial,
  Study: IconStudy,
  Work: IconWork
};

const IconComponent = (title) => {
  const na = title.title.replace(/\s/g, "");
  let Icon = iconTypes[na];
  return <Icon />;
};

export default IconComponent;