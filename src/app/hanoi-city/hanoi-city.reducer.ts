import { Action, createReducer, on } from '@ngrx/store';
import { add_district_all_list, add_district_api, add_district_every_element } from './hanoi-city.actions';
import { HanoiCity } from './hanoi-city';
export const initialState: string[] = [];
// https://provinces.open-api.vn/api/d/
const _districtReducer = createReducer(initialState,
  on(add_district_every_element, (state, { new_district }) => [...state, new_district]),
  on(add_district_all_list, (_, { district_list }) =>  district_list)
);
 
export function districtReducer(state: string[] | undefined, action: Action) {
  return _districtReducer(state, action);
}

export const initialStateAPI: HanoiCity[] = [];

export const HanoiCityAPI = createReducer(initialStateAPI, 
    on(add_district_api, (state, { data_api }) => [...data_api]
    )
  )