import { OrderItem } from "../types"
import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [total, setTotal] = useState(0)
    const [auth, setAuth] = useState(false)


  return (
    
  )
}
