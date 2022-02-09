import classes from "./Caard.module.css"


const Caard=(props)=>{
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Caard;