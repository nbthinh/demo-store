import { Action, createReducer, on } from '@ngrx/store';
import { add_district_all_list, add_district_every_element } from './hanoi-city.actions';
 
export const initialState: string[] = [];
 
const _districtReducer = createReducer(initialState,
  on(add_district_every_element, (state, { new_district }) => [...state, new_district]),
  on(add_district_all_list, (_, { district_list }) =>  district_list)
);
 
export function districtReducer(state: string[] | undefined, action: Action) {
  return _districtReducer(state, action);
}