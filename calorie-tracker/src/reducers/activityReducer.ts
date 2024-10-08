import { Activity } from "../types"

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity:Activity } } |
    { type: 'set-activeId', payload: { id:Activity['id'] } } |
    { type: 'delete-activity', payload: { id:Activity['id'] } } |
    { type: 'restart-activity' }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState:ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state:ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){

        if(state.activeId){
            const newActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
            return {
                ...state,
                activities: newActivities,
                activeId: ''
            }
        }

        return { // Retorna el estado actualizado
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        const newActivities = state.activities.filter(activity => activity.id !== action.payload.id)
        return {
            ...state,
            activities: newActivities
        }
    }

    if(action.type === 'restart-activity'){
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
} 