import { Route, Routes } from 'react-router-dom'
import { ItemPage } from '../pages/ItemPage'
import { HistoryPage } from '../pages/HistoryPage'
import { GraphPage } from '../pages/GraphPage'

export const AppRouter = () => {
  return (
    <>
        
        <Routes>
            <Route path="/" element={<ItemPage />} />
            <Route path="/items" element={<ItemPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/graph" element={<GraphPage />} />


        </Routes>
    </>
  )
}
