import { MenuItem, OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        console.log("Agregando item", item)
    }


  return {
    addItem
  }
}
