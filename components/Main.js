import { useContext } from 'react';

import Balance from './Balance';
import SpendingChart from './SpendingChart';
import Loading from './UI/Loading';
import ApiContext from '@/store/api-context';

const Main = () => {
  const ctx = useContext(ApiContext);

  if (ctx.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Balance />
      <SpendingChart />
    </>
  );
};

export default Main;
