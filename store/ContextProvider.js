import ApiContext from './api-context';
import { useEffect, useState } from 'react';

const ContextProvider = (props) => {
  const [expensesData, setExpensesData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const sfoc = async () => {
      const response = await fetch(
        'https://expenses-bbb7d-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      );

      const data = await response.json();

      setExpensesData(data);
      setIsLoading(false);
    };

    sfoc();
  }, []);

  const total = expensesData?.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const ctxData = {
    data: expensesData,
    isLoading,
    total,
  };

  return (
    <ApiContext.Provider value={ctxData}>{props.children}</ApiContext.Provider>
  );
};

export default ContextProvider;
