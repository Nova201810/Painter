import { writable, Writable } from 'svelte/store';

interface ColorsState {
  data: null | string[],
  error: boolean,
};

const initialColorsState = {
  data: null,
  error: false,
};

const colors: Writable<ColorsState> = writable(initialColorsState);

const setColorsData = (data: string[]) => {
  colors.set({
    data,
    error: false
  });
};

const setColorsError = () => colors.set({ data: null, error: true });

const subscribeColors = colors.subscribe;

export { setColorsData, setColorsError, subscribeColors };