
const initialState: any = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case 'test1':
            console.log(1)
            state.allIds.push(5)
            state.allIds = state.allIds.slice()
        default:
            return state;
    }
}
