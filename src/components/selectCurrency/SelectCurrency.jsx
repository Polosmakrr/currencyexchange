import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConvert, fetchConvertReverce } from '../../redux/operation';

const SelectCurrency = ({ data }) => {
  const convertedData = useSelector(state => state.currency.convertData);
  const convertedDataReverce = useSelector(state => state.currency.convertDataReverce);

  const dispatch = useDispatch();

  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amountTo, setAmountTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');

  const getConvert = () => {
    dispatch(fetchConvert(fromCurrency, toCurrency, amountFrom));
  };
  const getConvertReverce = () => {
    dispatch(fetchConvertReverce(fromCurrency, toCurrency, amountTo));
  };

  const onChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'from-currency') {
      setAmountFrom(value);
    }
    if (name === 'to-currency') {
      setAmountTo(value);
    }
  };

  const onSelect = e => {
    const { name, value } = e.currentTarget;

    if (name === 'to-currency') {
      setToCurrency(value);
    }
    if (name === 'from-currency') {
      setFromCurrency(value);
    }
  };

  useEffect(() => {
    if (toCurrency === '' || fromCurrency === '') {
      return;
    }
    if (amountFrom !== '') {
      getConvert();
    }
    if (amountTo !== '') {
      getConvertReverce();
    }
  }, [amountFrom, amountTo, fromCurrency, toCurrency]);

  useEffect(() => {
    if (convertedData.length !== 0) {
      document.querySelector('#to-currency').value = convertedData[0].conversion_result.toFixed(2);
    }
    if (amountFrom === '') {
      document.querySelector('#to-currency').value = '';
    }
  }, [amountFrom, convertedData]);

  useEffect(() => {
    if (convertedDataReverce.length !== 0) {
      document.querySelector('#from-currency').value =
        convertedDataReverce[0].conversion_result.toFixed(2);
    }
    if (amountTo === '') {
      document.querySelector('#from-currency').value = '';
    }
  }, [amountTo, convertedDataReverce]);

  const focus = () => {
    if (amountFrom === '') {
      setAmountTo('');
    }
    if (amountTo === '') {
      setAmountFrom('');
    }
  };

  return (
    <>
      {fromCurrency === '' || toCurrency === '' ? (
        <p className="description">Chose the currency, please</p>
      ) : (
        <>
          <p className="description">
            Pair {fromCurrency} & {toCurrency}
          </p>
        </>
      )}
      {convertedData.length !== 0 && (
        <p className="description currency">
          1 {fromCurrency} = {convertedData[0].conversion_rate} {toCurrency}
        </p>
      )}
      <div className="exchange_block">
        <div className="exchange_form">
          <select className="exchange_select" name="from-currency" id="" onChange={onSelect}>
            {data.map(item =>
              item.map(it => (
                <option key={it[0]} value={it[0]}>
                  {it[0]}-{it[1]}
                </option>
              )),
            )}
          </select>
          <input
            className="exchange_input"
            id="from-currency"
            name="from-currency"
            type="number"
            min="0"
            onChange={onChange}
            onFocus={focus}
            disabled={fromCurrency === '' || toCurrency === ''}
          />
        </div>

        <div className="exchange_form">
          <select className="exchange_select" name="to-currency" id="" onChange={onSelect}>
            {data.map(item =>
              item.map(it => (
                <option key={it[0]} value={it[0]}>
                  {it[0]}-{it[1]}
                </option>
              )),
            )}
          </select>
          <input
            className="exchange_input"
            id="to-currency"
            name="to-currency"
            type="number"
            min="0"
            onChange={onChange}
            onFocus={focus}
            disabled={fromCurrency === '' || toCurrency === ''}
          />
        </div>
      </div>
    </>
  );
};

export default SelectCurrency;
