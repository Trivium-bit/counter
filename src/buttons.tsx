import classes from './buttons.module.css';


type ButtonsPropsType = {
    counter: (value: number) => void
    resetCounter: (value: number) => void
    screen: number
}

function Buttons(props: ButtonsPropsType) {
    return (
        <div className={classes.buttons}>
            <div>
                <button className={props.screen < 5 ? classes.butCounter : classes.redButCounter} disabled={props.screen > 4} onClick={ () => {props.counter(0)} }>Inc</button> 
                <button className={props.screen !== 0 ? classes.butReset : classes.redButReset} disabled={props.screen == 0} onClick={ () => {props.resetCounter(0)} }>Reset</button> 
            </div>
        </div>
    );
}

export default Buttons

