import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Hability } from 'src/app/models/i.models';

@Component({
  selector: 'app-bar-grafic',
  templateUrl: './bar-grafic.component.html',
  styleUrls: ['./bar-grafic.component.scss']
})
export class BarGraficComponent {

  @Input() habilities: Hability[] = [];

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @Output() onElementSelect: EventEmitter<Hability> = new EventEmitter<Hability>();

  public radarChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
  };

  public backgroundColor : string[] = ["#92d5ce", "#2f9ea2", "#9f7eee", "#5325a0", "#311868"] 
  public radarChartLabels: string[] = [];
  public radarChartDatasets: ChartConfiguration<'bar'>['data']['datasets'] = [
    {  
      data: [] , 
      label: 'Habilidades' , 
      backgroundColor: this.backgroundColor, 
      borderColor: this.backgroundColor
    }
  ];

  ngOnInit(): void {
    console.log('habilities' , this.habilities);
    // this.radarChartLabels = [];
    this.radarChartDatasets[0].data = [];
    this.habilities.forEach((hability: Hability) => {
      this.radarChartLabels.push(hability.name);
      this.radarChartDatasets[0].data?.push(hability.percent *100);
      // this.radarChartDatasets.push({  
      //   data: [hability.percent *100] , 
      //   label: hability.name , 
      //   backgroundColor: this.backgroundColor[0], 
      //   borderColor: this.backgroundColor[1]
      // });
    });
    this.chart?.update();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.radarChartLabels = [];
  //   this.radarChartDatasets[0].data = [];
  //   this.habilities.forEach((hability: Hability) => {
  //     this.radarChartLabels.push(hability.name);
  //     this.radarChartDatasets[0].data?.push(hability.percent *100);
  //     // this.radarChartDatasets.push({  
  //     //   data: [hability.percent *100] , 
  //     //   label: hability.name , 
  //     //   backgroundColor: this.backgroundColor[0], 
  //     //   borderColor: this.backgroundColor[1]
  //     // });
  //   });
  //   this.chart?.update();
  // }

  public chartClicked($event: any) { 
    this.onElementSelect.emit(this.habilities[$event.active[0].index]);
  }
}
