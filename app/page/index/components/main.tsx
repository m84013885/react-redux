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
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Swiper autoplay={3000}>
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