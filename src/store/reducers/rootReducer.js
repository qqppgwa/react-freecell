import {
    MOVE_CARD,
} from '../actions/rootActions';
let cards = []
for (let i = 1; i <= 52; i++) {
    const typeCard = (i) => {
        let no = Math.ceil(i / 13)
        if (no === 1) {
            return 'spade'
        } else if (no === 2) {
            return 'heart'
        } else if (no === 3) {
            return 'club'
        } else if (no === 4) {
            return 'diamond'
        }
    }
    let obj = {
        id: i,
        type: typeCard(i), //1: spade 2: heart 3:club 4:diamond
    }
    cards.push(obj);
}
const shuffle = arr => {
    let _floor = Math.floor,
        _random = Math.random,
        len = arr.length,
        i,
        j,
        arri,
        n = _floor(len / 2) + 1
    while (n--) {
        i = _floor(_random() * len)
        j = _floor(_random() * len)
        if (i !== j) {
            arri = arr[i]
            arr[i] = arr[j]
            arr[j] = arri
        }
    }
    return arr
}

shuffle(cards)
let newList = []
for (let i = 0; i < cards.length; i += 6) {
    let a = cards.slice(i, i + 6)
    // console.log(a)
    if (a.length < 6) {
        // console.log(newList)
        // newList = a.map((el, idx) => {
        //   return newList[idx].concat(el)
        // })
        for (let j = 0; j < a.length; j++) {
            newList[j] = newList[j].concat(a[j])
        }
    } else {
        newList.push(a)
    }
}
// console.log(newList)




const initialCard = {
    left: [
        [],
        [],
        [],
        []
    ],
    right: [
        [],
        [],
        [],
        []
    ],
    bottom: newList
}

;
const rootReducerCard = (state = initialCard, {
    type,
    payload
}) => {
    switch (type) {
        case MOVE_CARD:
            return {
                ...state

            };

        default:
            return state;
    }
}
export {
    rootReducerCard
};