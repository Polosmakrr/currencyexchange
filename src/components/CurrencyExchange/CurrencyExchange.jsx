import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, fetchLatestUAH } from '../../redux/operation';
import SelectCurrency from '../selectCurrency/SelectCurrency';

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.currency.currencyData);
  const latestUAH = useSelector(state => state.currency.latestUAH);

  const [USD, setUSD] = useState('');
  const [EUR, setEUR] = useState('');
  const [GBP, setGBP] = useState('');

  const onFetch = () => {
    dispatch(fetchCurrency());
    dispatch(fetchLatestUAH());
  };

  useEffect(() => {
    onFetch();
  }, []);

  const devide = el => {
    return (1 / el).toFixed(2);
  };

  useEffect(() => {
    if (latestUAH.length !== 0) {
      setUSD(devide(latestUAH[0].conversion_rates.USD));
      setEUR(devide(latestUAH[0].conversion_rates.EUR));
      setGBP(devide(latestUAH[0].conversion_rates.GBP));
    }
  }, [latestUAH]);

  return (
    <section className="container">
      <div className="main_block">
        <h1 className="main_block_title">Currency Exchange</h1>
        {latestUAH.length !== 0 && (
          <>
            <div className="main_currency">
              <div className="main_currency_item">
                <p className="main_currency_text">USD</p>
                <p className="main_currency_value">{USD}</p>
              </div>
              <div className="main_currency_item">
                <p className="main_currency_text">EUR</p>
                <p className="main_currency_value">{EUR}</p>
              </div>
              <div className="main_currency_item">
                <p className="main_currency_text">GBP</p>
                <p className="main_currency_value">{GBP}</p>
              </div>
            </div>
          </>
        )}
        {data.length === 0 ? <h2>loading...</h2> : <SelectCurrency data={data} />}
      </div>
    </section>
  );
};

export default CurrencyExchange;
