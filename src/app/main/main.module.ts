import { DataManagementComponent } from './data-management/data-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';


import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NgZorroAntdModule } from './ng-zorro-antd.module';


import {
  QuoteRequestComponent, UsedEngineComponent,
  QuoteIssueComponent,
  OrderTrackingComponent,
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    QuoteRequestComponent,
    UsedEngineComponent,
    QuoteIssueComponent,
    OrderTrackingComponent,
    DataManagementComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
