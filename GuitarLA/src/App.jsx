import { useEffect, useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db }  from "./data/db"

function App() {

  const [data, setData] = useState(db)
  const [carrito, setCarrito] = useState([])

  function addToCard(item){
    const itemExist = carrito.findIndex((guitar)  => guitar.id === item.id) // -1 si no existe el item en el carrito
    if(itemExist >= 0){ // si el item existe en el carrito
      const newCarrito = carrito.map((guitar) => { // recorro el carrito y la modificacion lo guardo en una copia
        if(guitar.id === item.id){ // si el id del item es igual al id del item que estoy agregando 
          guitar.cantidad++  // incremento la cantidad
          return guitar  // retorno el item con la cantidad incrementada
        } else{ // si el id del item no es igual al id del item que estoy agregando
          return guitar // retorno el item sin modificar
        }
      })
      setCarrito(newCarrito) // actualizo el carrito
    }
    else{
      setCarrito([...carrito, {...item, cantidad: 1}]) // agrego el item al carrito con cantidad 1
    }
  } 

  function removeFromCarrito(id) {
    const newCarrito = carrito.filter((guitar) => guitar.id !== id) // filtro el carrito para que no contenga el item que quiero eliminar
    setCarrito(newCarrito) // actualizo el carrito
  }

  return (
    <>
      <Header 
        carrito={carrito}
        removeFromCarrito={removeFromCarrito}
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
