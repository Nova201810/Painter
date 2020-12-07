import { writable, Writable } from 'svelte/store';

interface PicturesState {
  data: null | string[],
  error: boolean,
};

const initialPicturesState = {
  data: null,
  error: false,
};

const pictures: Writable<PicturesState> = writable(initialPicturesState);

const setPicturesData = (data: string) => {
  pictures.update((currentData) => ({
    data: currentData.data ? [...currentData.data, data] : [data],
    error: false
  }));
};

const setPicturesError = () => pictures.set({ data: null, error: true });

const subscribePictures = pictures.subscribe;

export { setPicturesData, setPicturesError, subscribePictures };