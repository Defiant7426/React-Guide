import { useEffect, useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db }  from "./data/db"

function App() {

  const [data, setData] = useState(db)
  const [carrito, setCarrito] = useState([])

  const MIN_ITEMS = 0
  const MAX_ITEMS = 5

  function addToCard(item){
    const itemExist = carrito.findIndex((guitar)  => guitar.id === item.id) // -1 si no existe el item en el carrito
    if(itemExist >= 0){ // si el item existe en el carrito
      addOneUnitToCarrito(item.id) // agrego una unidad al item
    }
    else{
      setCarrito([...carrito, {...item, cantidad: 1}]) // agrego el item al carrito con cantidad 1
    }
  } 

  function removeFromCarrito(id) {
    const newCarrito = carrito.filter((guitar) => guitar.id !== id) // filtro el carrito para que no contenga el item que quiero eliminar
    setCarrito(newCarrito) // actualizo el carrito
  }

  function restOneUnitFromCarrito(id){
    const newCarrito = carrito.map((guitar) => {
      if(guitar.id === id){
        guitar.cantidad--
        return guitar
      } else{
        return guitar
      }
    }).filter((guitar) => guitar.cantidad > MIN_ITEMS)
    setCarrito(newCarrito)
  }

  function addOneUnitToCarrito(id){
    const newCarrito = carrito.map((guitar) => {
      if(guitar.id === id && guitar.cantidad < MAX_ITEMS){
        guitar.cantidad++
        return guitar
      } else{
        return guitar
      }
    })
    setCarrito(newCarrito)
  }

  return (
    <>
      <Header 
        carrito={carrito}
        removeFromCarrito={removeFromCarrito}
        restOneUnitFromCarrito={restOneUnitFromCarrito}
        addOneUnitToCarrito={addOneUnitToCarrito}
      />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar 
              key={guitar.id} 
              guitar={guitar} 
              setCarrito={setCarrito}
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
