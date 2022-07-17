import { Card } from "./Card";

export const Costs = () => {

    let costs = [
        {
            id: 1,
            date: "11-06-2022", 
            description: "Икея фужерчики", 
            amount: "999.99р",
        },
        {
            id: 2,
            date: "12-06-2022",
            description: "Икея постельное белье", 
            amount: "4999.00р",
        },
        {
            id: 3,
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
