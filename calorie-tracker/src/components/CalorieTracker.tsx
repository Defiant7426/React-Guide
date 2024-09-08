import { Activity } from "../types"

type CalorieTrackerProp = {
    activities: Activity[]
    }

export default function CalorieTracker({activities}: CalorieTrackerProp) {
  return (
    <div>CalorieTracker</div>
  )
}
