import classes from './ChartContainer.module.css';
import CandleStick from './CandleStick';
import { useContext } from 'react';
import ApiContext from '@/store/api-context';

const ChartContainer = () => {
  const ctx = useContext(ApiContext);

  let max = 0;

  ctx.data?.forEach((item) => {
    if (item.amount > max) {
      max = item.amount;
    }
  });

  console.log(max);

  if (ctx.data) {
    return (
      <div className={classes['big-container']}>
        {ctx.data.map((item) => (
          <CandleStick
            amount={item.amount}
            day={item.day}
            max={max}
            key={item.day}
          />
        ))}
      </div>
    );
  }

  // return (
  //   <div className={classes['big-container']}>
  //     <CandleStick amount="99" day="mon" />
  //     <CandleStick amount="33.12" day="tue" />
  //     <CandleStick amount="95.12" day="wed" />
  //     <CandleStick amount="90.07" day="thu" />
  //     <CandleStick amount="22.00" day="fri" />
  //     <CandleStick amount="77.79" day="sat" />
  //     <CandleStick amount="53.42" day="sun" />
  //   </div>
  // );
};

export default ChartContainer;
