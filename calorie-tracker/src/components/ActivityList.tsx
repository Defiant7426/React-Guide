import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo, Dispatch } from "react";
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activityReducer";

type ActivityListProp = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>

}

export default function ActivityList({ activities, dispatch }: ActivityListProp) {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    ,[activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

  return (
    <>
    <h2 className="text-4xl font-bold text-slate-600 text-center my-5">Comida y Actividades</h2>

    {isEmptyActivities && <p className="text-center text-slate-400">No hay actividades</p>}

    {activities.map((activity) => (
        <div key={activity.id} className="px-5 py-3 border-b border-slate-300 flex justify-between items-center">
            <div className="space-y-2 relative">
                <h3 className={`text-lg font-bold text-white -top-8 -left-8 px-10 ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                    {categoryName(activity.category)}</h3>
                <p className="text-2xl font-boldz pt-2">{activity.name}</p>
                <p className="text-sm text-slate-400">Calorías: {activity.calories}</p>
            </div>

            <div className="flex gab-5 items-center">

                <button
                    onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                    
                >
                    <PencilSquareIcon className="h-8 w-8 text-blue-500" />
                </button>

                <button
                    onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                >
                    <XCircleIcon className="h-8 w-8 text-red-500" />
                </button>

            </div>
        </div>
    ))}
    </>
    
  )
}

