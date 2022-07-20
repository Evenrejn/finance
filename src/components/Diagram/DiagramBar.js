import "../../Cost.css";

export const DiagramBar = (props) => {

    let barHeight = '0%';

    if (props.maxValue > 0) {
        barHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }

    return (
        <div className="month-wrap">
            <div className="month" style={{height: barHeight}}></div>
            <p className="month-name">{props.label}</p>
        </div>
    )
}