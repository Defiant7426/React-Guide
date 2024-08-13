import { useEffect, useState, useMemo } from "react"
import { db } from "../../data/db.js"

export default function useCarrito() {
  
  const initialCarrito = () => {
    const localStorageCarrito = localStorage.getItem("carrito")
    return localStorageCarrito ? JSON.parse(localStorageCarrito) : []
  }

  const [data] = useState(db)
  const [carrito, setCarrito] = useState(initialCarrito)

  const MIN_ITEMS = 0
  const MAX_ITEMS = 5

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

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

  function clearCarrito(carrito){
    setCarrito([])
  }

  // state derivado 
  const isEmpty = useMemo( () => carrito.length === 0, [carrito]) //no se hace render de la aplicacion hasta que cambie el estado de carrito
  // esto hace que "isEmpty" ya no sea una funcion, por lo que podemos llamarlo solo con "isEmpty"
  // si no se quitan los parentisis puede que no funcione correctamente
  const carritoTotal = useMemo(() => carrito.reduce((acc, item) => acc + item.price*item.cantidad, 0), [carrito])



  return{
    data, 
    carrito,
    addToCard,
    removeFromCarrito,
    clearCarrito,
    addOneUnitToCarrito,
    restOneUnitFromCarrito,
    isEmpty,
    carritoTotal
  }
}

