import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-30',
        value: .30,
        label: '30%'
    },
]

type TipPercentageFormatProps = {
    setTip: Dispatch<SetStateAction<number>>;
    tip: number;
}

export default function TipPercentageFormat({setTip, tip}: TipPercentageFormatProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">
            Propina:
        </h3>
        <form >
            {tipOptions.map((option) => (
            <div key={option.id} className="flex gap-2">
                <input 
                    type="radio" 
                    id={option.id} 
                    value={option.value} 
                    name="tip" 
                    onChange={(e) => setTip(+e.target.value)}
                    checked={tip === option.value // verifica si el valor de la propina es igual al valor de la opción
                    }
                />
                <label htmlFor={option.id}>{option.label}</label>
            </div>
            ))}
        </form>
    </div>
  )
}
