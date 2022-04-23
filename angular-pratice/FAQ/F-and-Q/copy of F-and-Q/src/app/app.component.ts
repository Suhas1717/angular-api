import { Component } from '@angular/core';
import { FAndQService } from './f-and-q.service';
import { FaqComponent } from './faq/faq.component';
import { FaqModule } from './faq/faq.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'F-and-Q';
  data:any = [];

  putObj!:FaqModule;


  constructor(private faq:FAndQService){
    this.faq.getData().subscribe(data => {
      console.warn(data);
      //to testing purpose console the fetched data
      this.data = data;
    })
  }
  ngOnit(){
    this.faq.deleteData(this.data).subscribe(data=>{
      this.data = data;
    })
  }
  
  

}
