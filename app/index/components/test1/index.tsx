import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import { useStore, useSelector, useDispatch } from '../../index'

const Test = () => {
    const store = useStore()
    // 获取全局
    console.log(store.getState())

    // 获取个别
    const counter = useSelector((state: any) => state.test)
    console.log(counter)
    
    return (
        <div>{counter}</div>
    )
}

export default Test