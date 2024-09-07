import { categories } from "../data/categories"
import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

export default function Form({dispatch, state}: FormProps) {

  const initialState : Activity = {
    id: uuidv4(),
    category: 2,
    name: "",
    calories: 0
  }

  const [activity, setActivity] = useState<Activity>(initialState)

  useEffect(() => {
    if(state.activeId) {
      const selectActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]

      setActivity(selectActivity)
    }
  }, [state.activeId])

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    
    const isNumberrField = ['category', 'calories'].includes(e.target.id)
      

    setActivity({
      ...activity,
      [e.target.id]: isNumberrField ? parseInt(e.target.value) : e.target.value
    })
  }

  const isValidActivity = () => {
    return activity.name.trim() === "" || activity.calories <= 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Evita que se recargue la página
    dispatch({ type: 'save-activity', payload: { newActivity: activity } }) // Envia la acción al reducer
    setActivity({ // Resetea el formulario
      ...initialState,
      id: uuidv4(),
    })
  }

  return (
    <form 
      className="space-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
        <div className="grid grid-cols-1 gap-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Categoría
            </label>
            <select
            className="shadow appearance-none border border-slate-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={activity.category}
            onChange={handleChange}
            >
            {categories.map(cat=> (
                <option key={cat.id} value={cat.id}>
                {cat.name}
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
            onChange={handleChange}
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
            onChange={handleChange} 
            />
        </div>

        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer disabled:opacity-50"
          value={activity.category === 1 ? 'Agregar Comida' : 'Agregar Ejercicio'}
          disabled={isValidActivity()}
        >
        
        

        </input>
    </form>
  )
}