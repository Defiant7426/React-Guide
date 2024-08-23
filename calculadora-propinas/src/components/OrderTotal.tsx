import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {

        order: OrderItem[];

}

export default function OrderTotal({order}: OrderTotalProps) {

    const subtotalAmount = useMemo(() => {
        return order.reduce((acc, item) => {
            return acc + (item.price * item.cantidad)
        }, 0)
    }, [order])

  return (
    <>
    
        < div className="space-y-3">

            <h2 className="font-black text-2xl">Totales y propinas</h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-black text-lg"> {formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina sugerida del 10%: {' '}
                <span className="font-black text-lg"> {formatCurrency(subtotalAmount*0.1)}</span>
            </p>

            <p>Total a Pagar: {' '}
                <span className="font-black text-lg"> {formatCurrency(subtotalAmount*1.1)}</span>
            </p>

        </div>

        <button>


        </button>
    
    </>
  )
}
