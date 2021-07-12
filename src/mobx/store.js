import { observable, action, toJS } from "mobx";

const store = observable({
  card: 0,
  switchModal: false,
  modalData: '',
});

let card = toJS(store.card)
export const addCard = action(() => {

});

export const removeCard = action(() => {
  
})


export const showModal = action((payload) => {

  store.switchModal = payload;

})

export const modalInfo = action((payload) => {

  store.modalData = payload

})

export const deleteCard = action(() => (store.card = []))

export default store;

