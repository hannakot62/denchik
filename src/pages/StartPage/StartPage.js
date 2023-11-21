import React from "react"
import style from "./StartPage.module.css"

export default function StartPage(){
    return (
        <div className={style.wrapper}>
        <div className={style.container}>

            <h1>ТАК</h1>
            <h1>СКОЛЬКО</h1>
            <h1>ЛЕТ</h1>
            <h1 className={style.den}>ДЕ</h1>
            <h1 className={style.chik}>ЧИ</h1>
            <div className={style.y}>У</div>
            <div className={style.q}>?</div>


        </div>
            <button >УЗНАТЬ</button>
        </div>
    )
}