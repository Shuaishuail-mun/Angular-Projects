import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlpacaGeneratorComponent } from './alpaca-generator/alpaca-generator.component';
import { ResultComponent } from './result/result.component';
import { StylesComponent } from './styles/styles.component';
import { RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';

@NgModule({
  declarations: [
    AppComponent,
    AlpacaGeneratorComponent,
    ResultComponent,
    StylesComponent,
    VocabularyComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'vocabulary-test',
        component: VocabularyComponent,
        children: [
          {path:'first-step', component: FirstStepComponent},
          {path:'second-step', component: SecondStepComponent},
          {path:'third-step', component: ThirdStepComponent},
          {path:'fourth-step', component: FourthStepComponent},
          {path:'', redirectTo:'first-step', pathMatch:'full'}
        ]
      },
      {path:'alpaca', component:AlpacaGeneratorComponent},
      {path:'', redirectTo:'alpaca', pathMatch:'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
