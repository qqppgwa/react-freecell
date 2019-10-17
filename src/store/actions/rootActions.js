export const MOVE_CARD = ' MOVE_CARD';



export const MoveCard = name1 => ({

    type: MOVE_CARD,
    payload: {
        name1
    }
});