import { useState } from "react";
import { Costs } from "./components/Costs";
import { CostsForm } from "./components/CostsForm";

const INITIAL_COSTS = [
  {
      id: 1,
      date: "2022", 
      description: "Икея фужерчики", 
      amount: "999.99р",
  },
  {
      id: 2,
      date: "2022",
      description: "Икея постельное белье", 
      amount: "4999.00р",
  },
  {
      id: 3,
      date: "2021", 
      description: "Вафельки", 
      amount: "799.99р",
  },
]

export const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const saveCostDataHandler = (inputCostData) => {
    setCosts(prevInputCostData => {
      return [inputCostData, ...prevInputCostData]
    });
  }


  return (
    <>
      <div>Учет расходов</div>
      <CostsForm onSaveCostData={saveCostDataHandler}/>
      <Costs costs={costs}/>
    </>
  );
}

const View = () => {
  return (
    <div>
      <buttom>Show me</buttom>
    </div>
  )
}