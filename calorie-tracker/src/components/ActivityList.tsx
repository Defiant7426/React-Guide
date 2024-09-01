import { Activity } from "../types";

type ActivityListProp = {
    activities: Activity[];

}

export default function ActivityList({ activities }: ActivityListProp) {
  return (
    <>
    <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

    {activities.map((activity) => (
        <div key={activity.id} className="px-5 py-3 border-b border-slate-300 flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold text-slate-600">{activity.name}</h3>
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

