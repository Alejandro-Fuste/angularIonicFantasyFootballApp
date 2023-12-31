import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-grades',
  templateUrl: 'grades.page.html',
  styleUrls: ['grades.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class GradesPage {
  constructor() {}
}
