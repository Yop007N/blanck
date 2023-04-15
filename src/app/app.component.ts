import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private navCtrl: NavController) {}

  loggedInUser = "Enrique Bobadilla";
  loggedInInicio = "home";

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }
}
