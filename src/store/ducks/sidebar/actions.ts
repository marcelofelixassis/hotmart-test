import { action } from 'typesafe-actions';
import { SidebarTypes, Sidebar } from './types';

export const loadSidebar = () => action(SidebarTypes.LOAD_SIDEBAR);
export const loadSuccess = (data: Sidebar) => action(SidebarTypes.LOAD_SUCCCES, data);