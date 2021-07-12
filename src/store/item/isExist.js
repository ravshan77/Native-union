const isExist = (card,newCard) => {
    return  card.find((item) => item.name === newCard.name)
}

export default isExist;