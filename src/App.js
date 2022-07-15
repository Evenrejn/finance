import { Costs } from "./components/Costs";
import { CostsForm } from "./components/CostsForm";

export const App = () => {
  return (
    <>
      <div>Учет расходов</div>
      <CostsForm/>
      <Costs/>
    </>
  );
}

