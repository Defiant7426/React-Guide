import { formatCurrency } from "../helpers";
import { OrderItem } from "../types/index";

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (itemId: number) => void;
}


export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-4xl font-black ">Consumo</h2>

        <div className="space-y-3 mt-10">
            {
            order.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-t border-gray-400 py-5 last-of-type:border-b">

                    <div>
                    <p>{item.name} x {item.cantidad}</p>
                    <p className="text-lg font-black">
                        Total: {formatCurrency(item.price * item.cantidad)}
                    </p>
                    </div>

                    
                    <button className="bg-red-500 text-white h-8 w-8 rounded-lg font-black"
                        onClick={() => removeItem(item.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
