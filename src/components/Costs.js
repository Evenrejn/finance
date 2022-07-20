import { Card } from "./Card";
import { CostFilter }  from "./CostFilter";
import { CostsDiagram } from "./CostsDiagram";
import React, { useState } from 'react';

export const Costs = ({ costs }) => {

    const [year, setYear] = useState('2022');

    const getYear = (year) => {
        setYear(year);
    }

    const filteredYear = costs.filter(el => el.date == year);

    let costsContent = <p>Нет расходов в {year} году</p>;

    if (filteredYear.length > 0) {
        costsContent = filteredYear.map((item, i) => <Card key={i} item={item}/>)
    }

    return (
        <div className="costs-wrap">
            <CostFilter setYear={getYear} year={year}/>
            <CostsDiagram costs={filteredYear}/>
            {costsContent}
        </div>
    )
}
