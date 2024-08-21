import { MenuItem, OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        const newItem : OrderItem = {
            ...item,
            cantidad: 1
        }
        setOrder([...order, newItem])
    }

    console.log(order)


  return {
    addItem
  }
}
