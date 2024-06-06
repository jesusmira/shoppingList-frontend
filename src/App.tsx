import { useAppSelector } from './hooks/dbstore';
import { ShoppingList } from './pages/ShoppingList';
import { AppRouter } from './router/AppRouter'
import { Navbar } from './ui/components/Navbar'
import { ShowItem } from './pages/ShowItem';
import { NewItem } from './pages/NewItem';

function App() {

  const { show } = useAppSelector((state) => state.rightPanel);
  return (
    <main className=" font-quicksand flex flex-row gap-0  ">
      <AppRouter />
      <Navbar />

      {
        (show === 1) ? <ShoppingList /> : 
        (show === 2) ? <ShowItem /> :
        <NewItem />
      }
      
    </main>
  )
}

export default App
