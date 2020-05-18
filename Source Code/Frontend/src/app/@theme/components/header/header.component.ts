import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbSearchService } from '@nebular/theme';
import { DataService} from "../../../dataService";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  message:string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private data: DataService,
              private searchService: NbSearchService,
              private layoutService: LayoutService) {

            this.searchService.onSearchSubmit().subscribe((data: any) => {
              this.data.changeMessage(data.term)
            })
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
}
