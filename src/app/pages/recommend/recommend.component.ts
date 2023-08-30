import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { Utils } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit{

  public extras;
  public dataLabels: string[] = [];
  public dataValuesActual: number[] = [];
  public dataValuesExpected: number[] = [];

  constructor(private router: Router) { 
    this.extras = (this.router.getCurrentNavigation()!.extras.state as any).extras;
  }

  ngOnInit(): void {
    this.find();
  }

  public find(): void{
    this.extras.recommend.habilidades.forEach((item: any) => {
      const _element = this.extras.results.find( (element: any) => element.name == item.name);
      this.dataLabels.push(item.name);
      this.dataValuesActual.push( Utils.getNumberByOneDecimal( _element.percent) );
      this.dataValuesExpected.push(item.value);
    });
  }
}