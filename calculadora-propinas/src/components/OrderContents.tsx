import { OrderItem } from "../types/index";

type OrderContentsProps = {
    order: OrderItem[];
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-4xl font-black ">Consumo</h2>

        <div className="space-y-3 mt-10">
            {
                order.length === 0 ? <p>No hay productos en tu orden</p> : null
            }
            {
            order.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <p>{item.name} x {item.cantidad}</p>
                    <p>${item.price * item.cantidad}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
