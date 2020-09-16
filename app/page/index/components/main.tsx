import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg, Swiper } from '../../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../../common/useCommon'

import test from '../assets/jb.svga'
import Test from './test'
import Test1 from './test1'

const Main = () => {
    //     | autoplay | number | 86400000 | 自动切换时间 | 否 |
    // | loop | bool | true | 让Swiper看起来是循环 | 否 |
    // | min | number | 10 | 最小滑动距离(滑动大于此值时切换) | 否 |
    // | changeIndex | func | null | 返回当前的index | 否 |
    // | noTouch | bool | false | 禁止触碰 | 否 |
    // | init | number | 1 | 禁止触碰 | 否 |
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Swiper>
                    <div>123</div>
                    <div>125</div>
                </Swiper>
                <div>123</div>
                {/* <Test /> */}
                {/* <Test1 /> */}
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
            <Msg />
        </React.Fragment>
    )
}

export default Main