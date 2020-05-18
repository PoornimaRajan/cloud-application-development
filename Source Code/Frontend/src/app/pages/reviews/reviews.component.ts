import { Component } from '@angular/core';
import { DataService} from "../../dataService";
@Component({
  selector: 'ngx-ecommerce',
  styleUrls: ['./e-commerce.component.scss'],
  templateUrl: './e-commerce.component.html',
})
export class ReviewsComponent {
  private message:string;
  private positivereviews:string;
  private negativereviews:string;
  private feature:any
  constructor(private data: DataService){
    this.data.currentMessage.subscribe(message => {
      this.message = message
      console.log(this.message);
    });
  }
  getData(phoneId): Observable<Photo[]> {
    return this.http.get('http://35.233.61.218:7000/getPhoneSpecs/'+phoneId)
      .map(res => {
		  this.positivereviews = res.reviews[1];
		  this.negativereviews = res.reviews[0];
		  this.feature = res.feature;
		  }
		 );
  }
}
