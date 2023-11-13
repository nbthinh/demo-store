import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add_district_all_list, add_district_api, add_district_every_element } from './hanoi-city.actions';
import { Observable } from 'rxjs';
import { HanoiCityService } from './hanoi-city.service';
import { HanoiCity } from './hanoi-city';

@Component({
  selector: 'app-hanoi-city',
  templateUrl: './hanoi-city.component.html',
  styleUrls: ['./hanoi-city.component.css']
})
export class HanoiCityComponent {
  constructor(
    private store: Store<{district: string[], district_api: HanoiCity[]}>,
    private hanoi_city_service: HanoiCityService
  ){}
  district_list: string[] = ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ', 'Quận Long Biên', 'Quận Cầu Giấy', 'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Hoàng Mai', 'Quận Thanh Xuân', 'Quận Hà Đông', 'Quận Bắc Từ Liêm', 'Quận Nam Từ Liêm', 'Thị xã Sơn Tây', 'Huyện Ba Vì', 'Huyện Chương Mỹ', 'Huyện Đan Phượng', 'Huyện Đông Anh', 'Huyện Gia Lâm', 'Huyện Hoài Đức', 'Huyện Mê Linh', 'Huyện Mỹ Đức', 'Huyện Phú Xuyên', 'Huyện Phúc Thọ', 'Huyện Quốc Oai', 'Huyện Sóc Sơn', 'Huyện Thạch Thất', 'Huyện Thanh Oai', 'Huyện Thanh Trì', 'Huyện Thường Tín', 'Huyện Ứng Hòa'];
  district_observable$!: Observable<string[]>;
  district_observable_api$!: Observable<HanoiCity[]>;
  data!: string[] | string;
  api_district$!: any;
  ngOnInit(){
    // this.store.dispatch(add_district_all_list({ district_list: this.district_list}));
    for (let i = 0; i < this.district_list.length; i++) {
      this.store.dispatch(add_district_every_element({new_district: this.district_list[i]}))
    }

    this.district_observable$ = this.store.select("district")
    
    this.district_observable$.subscribe((x) => {
      this.data = x
    })

    let data_api = this.hanoi_city_service.get_data_from_api()
    data_api.subscribe(x => { 
        // console.log("Mac cai quan x = ", typeof(x), x.length)
        this.store.dispatch(add_district_api({ data_api: x }))
      }
    )
    this.district_observable_api$ = this.store.select("district_api")
    this.district_observable_api$.subscribe((x) => {
      console.log("x = ", x)
    })
  }
  checkTypeOfData() {
    return this.data instanceof Array
  }
}
