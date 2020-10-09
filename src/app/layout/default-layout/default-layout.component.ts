import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less']
})
export class DefaultLayoutComponent implements OnInit {
  ngOnInit(): void {
    return
  }

  public isCollapsed = false
}
