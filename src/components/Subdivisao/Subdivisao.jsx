import style from './Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
    <div 
        style={{backgroundColor: props.preta ? "#000" : "#fff"}}
        className={style.subdivisao}></div>
    )
}