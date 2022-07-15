import { Card } from "./Card";

export const Costs = () => {

    let costs = [
        {
            date: "11-06-2022", 
            description: "Икея фужерчики", 
            amount: "999.99р",
        },
        {
            date: "12-06-2022",
            description: "Икея постельное белье", 
            amount: "4999.00р",
        },
        {
            date: "30-06-2022", 
            description: "Вафельки", 
            amount: "799.99р",
        },
    ]

    return (
        <div className="costs-wrap">
            {costs.map((item, i) => <Card key={i} item={item}/>)}
        </div>
    )
}
