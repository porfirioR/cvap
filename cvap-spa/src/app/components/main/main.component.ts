import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreApiModel } from '../../models/core-api-model';
import { CoreService } from '../../services/core.service';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    RouterModule

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  data: CoreApiModel = {
    name: 'no data'
  }
  constructor(private readonly coreService: CoreService) {
    
  }
  ngOnInit(): void {
  }

  protected getData = (): void => {
    this.coreService.getData().subscribe({
      next: (value) => {
        this.data = value
      }, error: (e) => {
        
        throw e
      }
    })
  }
}
