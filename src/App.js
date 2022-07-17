import { Costs } from "./components/Costs";
import { CostsForm } from "./components/CostsForm";

export const App = () => {

  const saveCostDataHandler = (inputCostData) => {
    console.log(inputCostData)
  }
  return (
    <>
      <div>Учет расходов</div>
      <CostsForm onSaveCostData={saveCostDataHandler}/>
      <Costs/>
    </>
  );
}

