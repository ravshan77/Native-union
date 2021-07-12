import isExist from "./isExist"

export const addItemCard = (card,newCard) =>{

    if (isExist(card, newCard)) {
        return card.map((item)=>{
            return item.name === newCard.name ? {...item,count: item.count + 1, totalCost:item.cost * (item.count+1)} : item;
        })
    }

    return [...card, {...newCard,count:1,totalCost:newCard.cost}]
}

export const decareseItemCard = (card, newCard) =>{

    if (isExist(card, newCard).count === 1) {
       return card.filter((item) =>  item.name !== newCard.name);
    }
    
    return card.map((item) => 
        item.name === newCard.name ? { ...item, count: item.count - 1 ,totalCost: item.cost * (item.count - 1)} : item
    );
};

export const removeCard = (card, newCard) =>{

    if (isExist(card, newCard)) {
        return card.filter((item) =>  item.name !== newCard.name);
    }

    return card;
};


// CHEGIRMA

// function acts(chegirma, ...narx) {
//     let total = narx.reduce((a, b) => a + b)

//     return total * (1 - chegirma)
// }

// let actsya = acts(0.1, 30)
// console.log(actsya)
