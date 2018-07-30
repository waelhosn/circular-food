
import { Menu } from '../models/menu.model';

// importing Actions
import * as FoodActions from './menu.action';

export interface State {
    loading: boolean;
    results: Menu[];
    selectedFood: Menu;
    
};

const initialState: State =  {
    loading: false,
    results: [],
    selectedFood: null
   
}

export function reducer(state = initialState, action: FoodActions.Actions): State {
    switch (action.type) {
        case FoodActions.SEARCH: {
            return {
                ...state,
                loading: true
            }
        }
        case FoodActions.SEARCH_DONE: {
            return {
                ...state,
                loading: false,
                results: action.payload.menu
            }
        }
        
        case FoodActions.GET_FOOD: {
            return {
                ...state,
                selectedFood: state.results[action.payload]
            }
        }
        

        default: {
            return state;
        }

    }
}