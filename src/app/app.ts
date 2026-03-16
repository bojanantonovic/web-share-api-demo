import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ShareCsv} from './share-csv/share-csv'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShareCsv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
