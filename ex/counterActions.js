/**
 * However it's an ActionCreators, then it will return an Object
 */
export function inc() {
  return { type: 'INC' };
}

export function dec() {
  return { type: 'DEC' };
}

export function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value,
  };
}
