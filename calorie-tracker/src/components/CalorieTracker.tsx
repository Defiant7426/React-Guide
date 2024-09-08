import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProp = {
    activities: Activity[]
    }

export default function CalorieTracker({activities}: CalorieTrackerProp) {

    //contadores
    const totalCalories = useMemo(() => activities.reduce((acc, activity) => acc + activity.calories, 0), [activities])

  return (
    <>
    
    <h2 className="text-4xl font-bold text-white text-center my-5">Resumen de calorias</h2>

    <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 ">
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange-400">{totalCalories}</span>
            Consumidas</p>
    </div>
    
    </>
  )
}
