import { Component, OnInit} from '@angular/core';
import { MarinServiceService } from 'src/app/services/marin-service.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { MatTableDataSource } from '@angular/material';
import { Container } from 'src/app/Container';




@Component({
  selector: 'app-containers-page',
  templateUrl: './containers-page.component.html',
  styleUrls: ['./containers-page.component.scss']
})
export class ContainersPageComponent implements OnInit {

  tableColumn = ['AITOR','SOG_MCOLH','GOBH_MCOLH','AORKH_MCOLH','MCOLH_N7','MCOLH_AAAA', 'TAOR_QTSR_EBRI','QOD_MCHSN','STTOS_RASHI_4_1',
'LQOCH_SHM_MQOTSR_EBRI','LQOCH_SHM_LOEZI_QTSR','LQOCH_QOD_LQOCH'];



dataSource: MatTableDataSource<Container>;
  
public show:boolean = false;
public tableHide:any = 'Show';
searchText: string = "";



constructor(private marinService:MarinServiceService ) { }




ngOnInit() {
  this.marinService.getAllContainers().subscribe((result)=>{
    this.dataSource = new MatTableDataSource(result);

  }
  )
  }


toggle(){
  this.show = !this.show;

  if(this.show){
    this.tableHide = "Hide";
  }else{
    this.tableHide = "Show";
  }
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}




