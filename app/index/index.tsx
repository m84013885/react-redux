import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider, createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux'
import './index.common.css'
import Main from "./components/main"
import myStore from '../redux'

const dpr = window.devicePixelRatio || 1
const docEl = document.documentElement
// detect 0.5px supports
if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
}


const MyContext = React.createContext(null)
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector = createSelectorHook(MyContext)

ReactDOM.render(<Provider context={MyContext} store={myStore}><Main /></Provider>, document.getElementById("main"))