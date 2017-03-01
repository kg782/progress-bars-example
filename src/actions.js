export function setData({ data }) {
  return {
    type: 'SET_DATA',
    payload: {
      data,
    },
  };
}

export function setIndex({ index }) {
  return {
    type: 'SET_INDEX',
    payload: {
      index,
    },
  };
}

export function setProgress({ index, delta }) {
  return {
    type: 'SET_PROGRESS',
    payload: {
      index,
      delta,
    },
  };
}
