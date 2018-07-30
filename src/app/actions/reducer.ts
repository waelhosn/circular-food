import { Food } from '../models/food.model';
import { Menu } from '../models/menu.model';

// importing Actions
import * as FoodActions from './menu.action';

export interface State {
    loading: boolean;
    results: Menu[];
    selectedFood: Food;
    foodList: Food[];
};

const initialState: State =  {
    loading: false,
    results: [],
    selectedFood: null,
    foodList: []
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
        case FoodActions.FETCH_FOOD: {
            return {
                ...state,
                loading: true
            }
        }
        case FoodActions.FETCH_FOOD_DONE: {
            return {
                ...state,
                loading: false,
                selectedFood: action.payload
            }
        }
        case FoodActions.ADD_FOOD: {
            return {
                ...state,
                foodList: [...state.foodList, state.selectedFood]
            }
        }
        case FoodActions.GET_FOOD: {
            return {
                ...state,
                selectedFood: state.foodList[action.payload]
            }
        }
        // case FoodActions.REMOVE_FOOD: {
        //     return {
        //         ...state,
        //         basket: state.foodList.filter(food => 
        //         food.id !== action.payload.id)
        //     }
        // }

        default: {
            return state;
        }

    }
}