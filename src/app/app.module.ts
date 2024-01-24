import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
