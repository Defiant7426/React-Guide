import { useMemo } from "react"
import { Activity } from "../types"
import CaloryDisplay from "./CaloryDisplay"

type CalorieTrackerProp = {
    activities: Activity[]
    }

export default function CalorieTracker({activities}: CalorieTrackerProp) {

    //contadores
    const totalCalories = useMemo(() => activities.reduce((acc, activity) => acc + activity.calories, 0), [activities])

    const caloriesBurned = useMemo(() => activities.filter(activity => activity.category === 2).reduce((acc, activity) => acc + activity.calories, 0), [activities])

    const caloriesConsumed = useMemo(() => activities.filter(activity => activity.category === 1).reduce((acc, activity) => acc + activity.calories, 0), [activities])


  return (
    <>
    
    <h2 className="text-4xl font-bold text-white text-center my-5">Resumen de calorias</h2>

    <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 ">
            <CaloryDisplay
                calories={totalCalories}
                text="Consumidas"
            />
            <CaloryDisplay
                calories={caloriesBurned}
                text="Ejercicios"
            />
            <CaloryDisplay
                calories={caloriesConsumed}
                text="Comidas"
            />
    </div>
    
    </>
  )
}
