import { action } from 'typesafe-actions';
import { TimelineTypes, Timeline } from './types';

export const loadTimeline = () => action(TimelineTypes.LOAD_TIMELINE);
export const loadSuccess = (data: Timeline) => action(TimelineTypes.LOAD_SUCCCES, data);
export const addItem = (data: Timeline) => action(TimelineTypes.ADD_ITEM, data);