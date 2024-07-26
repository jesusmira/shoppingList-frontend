
import { HistoryAll, HistoryOne } from "../components/HistoryPage";
import { useAppSelector } from "../hooks/dbstore";

export const HistoryPage:React.FC = () => {

  // const lista = useGroupedProducts();
  const { showHistory } = useAppSelector((state) => state.history);

  return (
          <>
            {
              ( showHistory === 1)? <HistoryAll /> : <HistoryOne />
            }
          </>
  )
}
