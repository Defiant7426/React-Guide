import { MenuItem, OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

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

    const removeItem = (itemId: number) => {
        const updatedOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    cantidad: orderItem.cantidad - 1
                }
            }
            return orderItem
        })

        setOrder(updatedOrder.filter((orderItem) => orderItem.cantidad > 0))
    }


  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem
  }
}
