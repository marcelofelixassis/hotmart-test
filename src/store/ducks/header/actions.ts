import { action } from 'typesafe-actions';
import { HeaderTypes, Header } from './types';

export const loadHeader = () => action(HeaderTypes.LOAD_HEADER);
export const loadSuccess = (data: Header) => action(HeaderTypes.LOAD_SUCCCES, data);