import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";

type ActivityListProp = {
    activities: Activity[];

}

export default function ActivityList({ activities }: ActivityListProp) {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    ,[activities])

  return (
    <>
    <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

    {activities.map((activity) => (
        <div key={activity.id} className="px-5 py-3 border-b border-slate-300 flex justify-between items-center">
            <div className="space-y-2 relative">
                <h3 className={`text-lg font-bold text-white -top-8 -left-8 px-10 ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                    {categoryName(activity.category)}</h3>
                <p className="text-2xl font-boldz pt-2">{activity.name}</p>
                <p className="text-sm text-slate-400">Calorías: {activity.calories}</p>
            </div>
            <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer">Editar</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">Eliminar</button>
            </div>
        </div>
    ))}
    </>
    
  )
}

