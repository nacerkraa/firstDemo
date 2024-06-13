import { Component } from '@angular/core';
import { RouterLink, OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  providers: [RouterLink, OutletContext],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstDemo';
}
