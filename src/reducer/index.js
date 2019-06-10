import React, { useReducer } from 'react';
import { Points } from '../Constants';
// initialize the initial state as empty
const initialState = { items: {} };

let reducer = (state = initialState, action) => {
  // if action type is either 'A'||'B'||C'||'D'||'E'
  if (action.type !== 'reset') {
    // get the item parameters requested by user
    let CurrentItem = Points.find(item => item.game === action.type);
    const { value, bonusValue, bonusNumber } = CurrentItem;

    // Update the previous item points if already present or create a new item object
    const newItem =
      state.items[action.type] ||
      (state.items[action.type] = {
        game: action.type,
        count: 0,
        price: 0,
        bonus: 0
      });
    newItem.count += 1;
    // calculate the bonus point on the basis of bonusNumber
    const bonusCount = parseInt(newItem.count / bonusNumber);
    const countLeft = newItem.count - bonusNumber * bonusCount;
    // total price/points for a game
    const itemPrice =
      bonusValue && bonusCount
        ? bonusValue * bonusCount + value * countLeft
        : value * newItem.count;
    newItem.price = itemPrice;

    // calculate the bonus from the tota price
    newItem.bonus =
      newItem.count >= CurrentItem.bonusNumber
        ? newItem.price - CurrentItem.bonusNumber * CurrentItem.value
        : 0;
    return { ...state };
  }
  // reset or start the new game
  else return { items: {} };
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
