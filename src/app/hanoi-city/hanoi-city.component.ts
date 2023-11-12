import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add_district_all_list } from './hanoi-city.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hanoi-city',
  templateUrl: './hanoi-city.component.html',
  styleUrls: ['./hanoi-city.component.css']
})
export class HanoiCityComponent {
  district_list: string[] = ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ', 'Quận Long Biên', 'Quận Cầu Giấy', 'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Hoàng Mai', 'Quận Thanh Xuân', 'Quận Hà Đông', 'Quận Bắc Từ Liêm', 'Quận Nam Từ Liêm', 'Thị xã Sơn Tây', 'Huyện Ba Vì', 'Huyện Chương Mỹ', 'Huyện Đan Phượng', 'Huyện Đông Anh', 'Huyện Gia Lâm', 'Huyện Hoài Đức', 'Huyện Mê Linh', 'Huyện Mỹ Đức', 'Huyện Phú Xuyên', 'Huyện Phúc Thọ', 'Huyện Quốc Oai', 'Huyện Sóc Sơn', 'Huyện Thạch Thất', 'Huyện Thanh Oai', 'Huyện Thanh Trì', 'Huyện Thường Tín', 'Huyện Ứng Hòa'];
  district_observable$!: Observable<string[]>;
  constructor(
    private store: Store<{district: string[]}>
  ){
  }
  data!: string[] | string;
  ngOnInit(){
    this.store.dispatch(add_district_all_list({ district_list: this.district_list}));
    this.district_observable$ = this.store.select("district")
    this.district_observable$.subscribe((x) => {
      this.data = x
    })
  }
  checkTypeOfData() {
    return this.data instanceof Array
  }
}
