import { createStore } from 'redux';

// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  index: 0,
};

const store = createStore((state = initialState, action) => {
  // TODO: Add action handlers (aka "reducers")
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: {
          ...action.payload.data,
          // Modify bars data type as we don't want use array index as react key.
          buttons: action.payload.data.buttons.map((delta, index) => ({
            delta,
            index,
          })),
          bars: action.payload.data.bars.map((progress, index) => ({
            progress,
            index,
          })),
        },
      };
    case 'SET_INDEX':
      return {
        ...state,
        index: action.payload.index,
      };
    case 'SET_PROGRESS':
      return {
        ...state,
        data: {
          ...state.data,
          bars: state.data.bars.map((bar, index) => {
            if (index === action.payload.index) {
              return {
                ...bar,
                progress: Math.max(0, bar.progress + action.payload.delta),
              };
            }
            return bar;
          }),
        },
      };
    default:
      return state;
  }
});

export default store;
