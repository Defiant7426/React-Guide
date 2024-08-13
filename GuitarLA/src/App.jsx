
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import useCarrito from "./components/hooks/useCarrito"

function App() {

  const { 
    data, 
    carrito,
    addToCard,
    removeFromCarrito,
    clearCarrito,
    addOneUnitToCarrito,
    restOneUnitFromCarrito,
    isEmpty,
    carritoTotal } = useCarrito()

  return (
    <>
      <Header 
        carrito={carrito}
        removeFromCarrito={removeFromCarrito}
        restOneUnitFromCarrito={restOneUnitFromCarrito}
        addOneUnitToCarrito={addOneUnitToCarrito}
        clearCarrito={clearCarrito}
        isEmpty={isEmpty}
        carritoTotal={carritoTotal}
      />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar 
              key={guitar.id} 
              guitar={guitar} 
              addToCard={addToCard}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
