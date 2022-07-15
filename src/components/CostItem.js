import { CostDate } from "./CostDate";
import { useState } from "react";
import "../Cost.css";

export const CostItem = (props) => {

    const [description, setDescription] = useState(props.item.description);

    return (
        <div className="wrap">
            <div>
                <CostDate date={props.item.date}/>
            </div>
            <div>
                <p>{props.item.description}</p>
                <p className="amount">{props.item.amount}</p>
            </div>
        </div>
    )
}
