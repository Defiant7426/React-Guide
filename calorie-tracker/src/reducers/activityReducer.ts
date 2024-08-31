import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity', // Guardar actividad
    payload: { newActivity:Activity } // Nueva actividad
}

type ActivityState = {
    activities: Activity[]
}

export const initialState:ActivityState = {
    activities: []
}

export const activityReducer = (
    state:ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        console.log("Guardando actividad", action.payload.newActivity)
    }
    return state
} 