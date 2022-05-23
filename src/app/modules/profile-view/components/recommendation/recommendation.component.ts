import { Component, OnInit } from '@angular/core';
import { vm } from 'src/app/modules/profile-view/models/example.vm';
import { SerService } from 'src/app/modules/profile-view/services/ser.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  Examples!:vm[];
  constructor( private ser:SerService) { }

  ngOnInit(): void {
    this.ser.gettodos().subscribe((res:any[])=>{
      this.Examples=res.map((d:vm)=>{
        const data=new vm();
        data.init(d);
        return data;
      });
      console.log("Examples",this.Examples);
    })
  }

}
