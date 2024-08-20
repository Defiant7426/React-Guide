import { OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = () => {
        //setOrder([...order, item])
        //console.log("Agregando item", item)
        console.log("Agregando item")
    }


  return {
    addItem
  }
}
