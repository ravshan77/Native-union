import { ITEM_TYPE } from "./item-type"

export const addCard = (item) => ({
    type:ITEM_TYPE.ADD_CARD,
    payload:item,
})

export const decreaseCard = (item) => ({
    type:ITEM_TYPE.DECAREASE_CARD,
    payload:item,
})

export const removeCard = (item) => ({
    type:ITEM_TYPE.REMOVE_CARD,
    payload:item
})

export const showModal = (item) => ({
    type:ITEM_TYPE.SHOW_MODAL,
    payload:item
})

export const modalCard = (item) => ({
    type:ITEM_TYPE.MODAL_CARD,
    payload:item
})

export const emptyCard = (item) => ({
    type:ITEM_TYPE.EMPTY_CARD,
    payload:item
})