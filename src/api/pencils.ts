import { setColorsData, setColorsError } from '../store/colors';

const getPencils = () => {
  fetch('/api/pencils', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'same-origin',
    body: JSON.stringify({ count: 6 })
  })
    .then(res => res.json())
    .then(data => {
      const pencils = data?.data?.colors;
      setColorsData(pencils);
    })
    .catch(() => {
      setColorsError();
    })
};

export { getPencils, getPencils as default };