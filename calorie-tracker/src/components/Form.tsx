import { cotegories } from "../data/categories"
import { useState } from "react"

export default function Form() {

  const [activity, setActivity] = useState({
    category: 2,
    name: "",
    calories: 0
  })

  return (
    <form className="space-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 gap-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Categoría
            </label>
            <select
            className="shadow appearance-none border border-slate-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={activity.category}
            >
            {cotegories.map(category=> (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
            </select>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Actividad
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2"
            id="name"
            type="text"
            placeholder="Ejemplo: Correr 5km"
            value = {activity.name}
            />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">
            Calorías
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2"
            id="calories"
            type="name"
            placeholder="Ejemplo: 300 o 500"
            value = {activity.calories}
            />
        </div>

        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          value={"Guardar comida o ejercicio"}
        >
        
        

        </input>
    </form>
  )
}