import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import { connect } from "react-redux"

import { useSelector, useDispatch } from '../../../utils/redux-hook'

const Test = (props: any) => {
    const { addTodo } = props
    const counter = useSelector((state: any) => state)
    const dispatch = useDispatch()
    console.log(dispatch)
    return (
        <button onClick={() => dispatch({ type: 'test' })}>点击</button>
    )
}

const qwe = (state: any) => {
    console.log(state)
    return { activeFilter: 123 }
}

// 注入数据或者方法（第一个数据，第二个方法）
// connect
export default Test
