import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  activeTab: TabComponent;

  ngAfterContentInit() {
    this.activeTab = this.tabs.toArray()[0];
  }

  setActiveTab(activeTab: TabComponent) {
    this.activeTab = activeTab;
  }
}
