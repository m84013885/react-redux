import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import { useStore, useSelector, useDispatch } from '../../../../utils/redux'

const Test = () => {
    const store = useStore()
    // 获取全局
    console.log(store.getState())

    // 获取个别
    const counter = useSelector((state: any) => state.test)
    return (
        <div>{counter}</div>
    )
}


export default Test