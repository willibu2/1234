import Card from './UI/Card';
import classes from './Balance.module.css';

const Balance = (props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.balance}>
        <p className={classes.title}>My balance</p>
        <p className={classes.value}>$921.48</p>
      </div>
      <div className={classes.circles}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
      </div>
    </Card>
  );
};

export default Balance;
