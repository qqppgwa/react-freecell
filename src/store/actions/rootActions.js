export const MOVE_CARD = ' MOVE_CARD';



export const moveCard = (card) => {
    console.log(card)
    // console.log(place)
    return {
        type: MOVE_CARD,
        payload: {
            ...card
        }
    }

};