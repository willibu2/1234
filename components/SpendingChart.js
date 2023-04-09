import classes from './SpendingChart.module.css';
import { useContext } from 'react';
import Card from './UI/Card';
import ChartContainer from './ChartContainer';
import ApiContext from '@/store/api-context';

const SpendingChart = () => {
  const ctx = useContext(ApiContext);

  return (
    <Card className={classes.main}>
      <h1>Spending - Last 7 days</h1>
      <ChartContainer />
      <div className={classes.line} />
      <div className={classes.container}>
        <div className={classes['first-container']}>
          <p className={classes['total-title']}>Total this month</p>
          <h1>{ctx.total}</h1>
        </div>
        <div className={classes['second-container']}>
          <p className={classes.percentage}>+2.4%</p>
          <p className={classes.text}>from last month</p>
        </div>
      </div>
    </Card>
  );
};

export default SpendingChart;
