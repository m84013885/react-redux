import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img, Msg } from '../../../common/index'
import { useInterval, useKeyPress, useRenderTime } from '../../../common/useCommon'

import test from '../assets/jb.svga'
import Test from './test'
import Test1 from './test1'

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Test />
                <Test1 />
                {/* something */}
                <div className={style.canvas}>
                    <Svga svga={test} />
                </div>
                <Img className={style.test} />
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