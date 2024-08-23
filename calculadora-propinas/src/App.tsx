import MenuItems from './components/MenuItems'
import OrderContents from './components/OrderContents'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import OrderTotal from './components/OrderTotal'
import TipPercentageFormat from './components/TipPercentageFormat'

function App() {
  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 bg-slate-200 px-5">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents 
            order={order} 
            removeItem={removeItem} 
          />

          <TipPercentageFormat
            
          />

          <OrderTotal 
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
