import { CostItem } from "./CostItem";

export const Card = (props) => {
    return <CostItem key={props.i} item={props.item}/>
}

