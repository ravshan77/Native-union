import { ITEM_TYPE } from "./item-type";
import { addItemCard, decareseItemCard, removeCard } from "./item-utils";

const initialState = {
  card: [],
  modal: false,
  modalInfo: "",
};

const StoreData = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ITEM_TYPE.ADD_CARD:
      return {
        ...state,
        card: addItemCard(state.card, payload),
      };
    case ITEM_TYPE.DECAREASE_CARD:
      return {
        ...state,
        card: decareseItemCard(state.card, payload),
      };
    case ITEM_TYPE.MODAL_CARD:
      return {
        ...state,
        modalInfo: payload,
      };
    case ITEM_TYPE.SHOW_MODAL:
      return {
        ...state,
        modal: payload,
      };
    case ITEM_TYPE.REMOVE_CARD:
      return {
        ...state,
        card: removeCard(state.card, payload),
      };
    case ITEM_TYPE.EMPTY_CARD:
      return {
        ...state,
        card: payload
      }  

    case "ADD_POST":
      return [...state, action.post];

    default:
      return state;
  }
};

export default StoreData;
