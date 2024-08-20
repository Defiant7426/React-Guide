import { OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: OrderItem) => {
        setOrder([...order, item])
    }


  return (
    
  )
}
