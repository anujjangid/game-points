import React, { useReducer } from 'react';
import { Points } from '../Constants';
const initialState = { items: {} };

let reducer = (state = initialState, action) => {
  if (action.type !== 'reset') {
    let CurrentItem = Points.find(item => item.game === action.type);
    const { value, bonusValue, bonusNumber } = CurrentItem;

    const newItem =
      state.items[action.type] ||
      (state.items[action.type] = {
        game: action.type,
        count: 0,
        price: 0,
        bonus: 0
      });
    newItem.count += 1;
    const bonusCount = parseInt(newItem.count / bonusNumber);
    const countLeft = newItem.count - bonusNumber * bonusCount;
    const itemPrice =
      bonusValue && bonusCount
        ? bonusValue * bonusCount + value * countLeft
        : value * newItem.count;
    newItem.price = itemPrice;
    newItem.bonus =
      newItem.count >= CurrentItem.bonusNumber
        ? newItem.price - CurrentItem.bonusNumber * CurrentItem.value
        : 0;
    return { ...state };
  } else return { items: {} };
};

const CounterContext = React.createContext(initialState);
function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}
export { CounterContext, CounterProvider };
