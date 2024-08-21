import { MenuItem, OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

        const itemExist = order.find((orderItem) => orderItem.id === item.id)

        if (itemExist) {
            const updatedOrder = order.map((orderItem) => {
                if (orderItem.id === item.id) {
                    return {
                        ...orderItem, // Copia todas las propiedades del objeto
                        cantidad: orderItem.cantidad + 1 // Actualiza la cantidad
                    }
                }
                return orderItem
            })
            setOrder(updatedOrder)
        }else{
          const newItem : OrderItem = {
            ...item,
            cantidad: 1
          }
          setOrder([...order, newItem])
        }

        
    }

    console.log(order)


  return {
    order,
    addItem
  }
}
