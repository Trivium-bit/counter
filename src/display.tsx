import classes from './display.module.css';

type DisplaPropsType = {
    screen: number
}

function Display(props: DisplaPropsType) {
    return (
        <div className={props.screen === 5 ? classes.redDisplay : classes.display }>
        {props.screen}
        </div>
    );

}

export default Display;