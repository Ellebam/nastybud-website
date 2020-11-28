import { HIDE, SCREEN_RESIZE, SHOW, FETCH } from './types';

export const screenResize = (width) => {
  return {
    type: SCREEN_RESIZE,
    payload: width,
  };
};

export const showSidebar = () => {
  return {
    type: SHOW,
    payload: {},
  };
};

export const hideSidebar = () => {
  return {
    type: HIDE,
    payload: {},
  };
};

export const fetchAPIData = () => {
  return {
    type: FETCH,
    payload: {},
  };
};
