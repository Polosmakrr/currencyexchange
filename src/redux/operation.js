import * as actions from './action';
import axios from 'axios';

const key = '58523e74d513c7f18b37ad6c';

axios.defaults.baseURL = 'https://v6.exchangerate-api.com/v6/';

export const fetchCurrency = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get(`${key}/codes`)
    .then(({ data }) => {
      dispatch(actions.fetchSuccess(data));
    })

    .catch(error => dispatch(actions.fetchError(error)));
};

export const fetchConvert = (fromCurrency, toCurrency, amount) => dispatch => {
  dispatch(actions.fetchConvert());

  axios
    .get(`${key}/pair/${fromCurrency}/${toCurrency}/${amount}`)
    .then(({ data }) => {
      dispatch(actions.fetchConvertSuccess(data));
    })

    .catch(error => dispatch(actions.fetchConvertError(error)));
};

export const fetchConvertReverce = (fromCurrency, toCurrency, amount) => dispatch => {
  dispatch(actions.fetchConvertReverce());

  axios
    .get(`${key}/pair/${toCurrency}/${fromCurrency}/${amount}`)
    .then(({ data }) => {
      dispatch(actions.fetchConvertReverceSuccess(data));
    })

    .catch(error => dispatch(actions.fetchConvertReverceError(error)));
};
