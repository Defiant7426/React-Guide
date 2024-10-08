import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {

        order: OrderItem[];
        tip: number;
        placeOrder: () => void

}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

    const subtotalAmount = useMemo(() => {
        return order.reduce((acc, item) => {
            return acc + (item.price * item.cantidad)
        }, 0)
    }, [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  return (
    <>
    
        < div className="space-y-3">

            <h2 className="font-black text-2xl">Totales y propinas</h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-black text-lg"> {formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina sugerida del 10%: {' '}
                <span className="font-black text-lg"> {formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a Pagar: {' '}
                <span className="font-black text-lg"> {formatCurrency(totalAmount)}</span>
            </p>

        </div>

        <button
            className="bg-teal-400 text-white font-black p-3 rounded-lg w-full disabled:opacity-50"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    
    </>
  )
}
