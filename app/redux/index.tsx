import { createStore, combineReducers } from "redux"

// 注入数据与方法
import todos from "./store/todos"
import test from "./store/test"

// 创建Store与注入
export default createStore(combineReducers({ todos, test }))