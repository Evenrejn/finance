import { DiagramBar } from "./DiagramBar";
import "../../Cost.css";

export const Diagram = (props) => {

    const costsPriceArr = props.dataSets.map(dataCost => dataCost.value);

    const maxCost = Math.max(...costsPriceArr);
    return (
        <div className="year-wrap">
            {props.dataSets.map(dataSet => <DiagramBar 
            key={dataSet.label} 
            value={dataSet.value} 
            maxValue={maxCost} 
            label={dataSet.label}/>)}
        </div>
    )
}