import { ADD_COMMENT } from '../actions/commentAction';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.imageUrl]: [
          ...(state[action.payload.imageUrl] || []),
          action.payload.text
        ]
      };
  }
}
