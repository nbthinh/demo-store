import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HanoiCity } from './hanoi-city';

export const add_district_every_element = createAction(
    '[Ha Noi City] Add District Every Element',
    props<{ new_district: string }>()
);

export const add_district_all_list = createAction(
    '[Ha Noi City] Add District All List',
    props<{ district_list: string[] }>()
    
);

export const add_district_api = createAction(
    '[Ha Noi City] Add District Get From API',
    props<{ data_api: HanoiCity[] }>()
)