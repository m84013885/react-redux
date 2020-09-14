
// 初始化数据
let initialState: any = 1

// 返回数据，或者根据返回action变化返回内容
export default function (state = initialState, action: any) {
    switch (action.type) {
        case 'test':
            console.log(1)
            state = state + 1
        default:
            return state
    }
}
