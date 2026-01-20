import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  imports: [MatToolbarModule, MatIcon],
  styleUrl: './header.scss',
})

export class Header {

}

