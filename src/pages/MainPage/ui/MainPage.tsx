import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from 'app/asyncActions/customers';
import cls from './MainPage.module.scss';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cashValue);
  const customers = useSelector((state: any) => state.customers.customersValue);

  const add = () => {
    dispatch({ type: 'ADD_CASH', payload: 1 });
  };

  const get = () => {
    dispatch({ type: 'GET_CASH', payload: 1 });
  };

  const addCustomer = (name: string) => {
    const newCustomer = {
      id: Date.now(),
      name,
    };
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: newCustomer,
    });
  };

  const addManyCustomer = () => {
    dispatch(fetchCustomers() as any);
  };

  const removeCustomer = (id: any) => {
    dispatch({ type: 'REMOVE_CUSTOMER', payload: id });
  };

  return (
    <div className={ cls.mainPage }>
      <div className="pageContent">
        <div>
          <div>
            cash:
            {cash}
          </div>
          <button onClick={ add }>+ cash</button>
          <button onClick={ get }>- cash</button>
        </div>
        <br />
        <div>
          customers:
          {customers.map((item: any) => (
            <div key={ item.id }>
              {item.name}
              <button onClick={ () => removeCustomer(item.id) }>x</button>
            </div>
          ))}
        </div>
        <button onClick={ () => addCustomer(String(prompt())) }>+ customer</button>
        <button onClick={ addManyCustomer }>Получить клиентов из БД</button>
      </div>
    </div>
  );
};

export default MainPage;
