import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;

  public activeTab: TabComponent;

  public ngAfterContentInit() {
    this.activeTab = this.tabs.toArray()[0];
  }

  public setActiveTab(activeTab: TabComponent) {
    this.activeTab = activeTab;
  }
}
