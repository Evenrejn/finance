// import { CostsDiagram } from "./CostsDiagram";
import { Diagram } from "./Diagram/Diagram";

export const CostFilter = (props) => {
     
    const onChangeYear = (event) => {
        // console.log(event.target.value)
        props.setYear(event.target.value);
    }

    return (
        <div className="filter-wrap">
            <div className="year-title">
                <label className="year-title">Отбор по году</label>
                <select value={props.year} onChange={onChangeYear} className="year-select" name="Отбор по году">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
            <Diagram/>
            {/* <CostsDiagram costs={filteredCosts}/> */}
        </div>
    )
}