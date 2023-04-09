import classes from './CandleStick.module.css';
import { useState } from 'react';

const CandleStick = (props) => {
  const { amount, day, max } = props;

  const [isShown, setIsShown] = useState(false);
  const showValueHandler = () => {
    setIsShown((prevValue) => !prevValue);
  };

  const valueClasses = isShown
    ? `${classes.value} ${classes.shown}`
    : `${classes.value}`;

  const editedValue = `$${amount}`;

  const candleHeight = (amount / max) * 10 + 'rem';

  return (
    <div className={`${classes['small-container']}`}>
      <p className={valueClasses}>{editedValue}</p>
      <div
        className={classes['chart-div']}
        onMouseOver={showValueHandler}
        onMouseOut={showValueHandler}
        style={{ height: candleHeight }}
      />
      <p className={classes.day}>{day}</p>
    </div>
  );
};

export default CandleStick;
