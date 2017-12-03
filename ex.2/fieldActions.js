export function changeValue(e){
  console.log('asdf');
  return {
    type: 'VALUE_CHANGED',
    payload: e.target.value,
  }
};
