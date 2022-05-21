import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from '../../redux/operation';
import SelectCurrency from '../selectCurrency/SelectCurrency';

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.currency.currencyData);

  const onFetch = () => {
    dispatch(fetchCurrency());
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <section className="container">
      <div className="main_block">
        <h1 className="main_block_title">Currency Exchange</h1>
        {data.length === 0 ? <h2>loading...</h2> : <SelectCurrency data={data} />}
      </div>
    </section>
  );
};

export default CurrencyExchange;
