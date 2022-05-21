import { createAction } from '@reduxjs/toolkit';

export const fetchRequest = createAction('fetchRequest');
export const fetchSuccess = createAction('fetchSuccess');
export const fetchError = createAction('fetchError');

export const fetchConvert = createAction('fetchConvert');
export const fetchConvertSuccess = createAction('fetchConvertSuccess');
export const fetchConvertError = createAction('fetchConvertError');

export const fetchConvertReverce = createAction('fetchConvertReverce');
export const fetchConvertReverceSuccess = createAction('fetchConvertReverceSuccess');
export const fetchConvertReverceError = createAction('fetchConvertReverceError');
