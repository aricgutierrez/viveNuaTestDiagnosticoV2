import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeBarCustomComponent } from './gauge-bar-custom/gauge-bar-custom.component';
import { BrainCardComponent } from './brain-card/brain-card.component';
import { CategoryComponent } from './category/category.component';
import { AccordionCategoryComponent } from './accordion-category/accordion-category.component';
import { BadgeComponent } from './badge/badge.component';
import { NgChartsModule } from 'ng2-charts';
import { RadarGraficComponent } from './radar-grafic/radar-grafic.component';
import { BarGraficComponent } from './bar-grafic/bar-grafic.component';
import { ModalComponent } from './modal/modal.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    GaugeBarCustomComponent,
    BrainCardComponent,
    CategoryComponent,
    AccordionCategoryComponent,
    BadgeComponent,
    RadarGraficComponent,
    BarGraficComponent,
    ModalComponent,
    DetailContentComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    GaugeBarCustomComponent,
    BrainCardComponent,
    CategoryComponent,
    AccordionCategoryComponent,
    BadgeComponent,
    RadarGraficComponent,
    BarGraficComponent,
    ModalComponent,
    DetailContentComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
