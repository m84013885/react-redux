import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import { connect } from "react-redux"

import { useSelector, useDispatch } from '../../../../utils/redux'

const Test = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: any) => state.todos.allIds)
    useEffect(() => {
        console.log(todos)
    }, [todos])
    return (
        <React.Fragment>
            <button onClick={
                () => {
                    const dis = dispatch({ type: 'test1' })
                    console.log(dis)
                }
            }>
                按钮
            </button>
            {todos.map((c: any, i: number) => {
                return <span key={i}>{c}</span>
            })}
        </React.Fragment>

    )
}

export default Test
