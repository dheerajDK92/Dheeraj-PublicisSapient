import { Component, OnInit } from "@angular/core";
import { eventDispatcher, store } from "../../store/index";
import { ActionTypes } from "../../store/actions";
import { LaunchService } from "src/app/service/launch.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  launchList: any = [];
  years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  constructor(private _launchService: LaunchService) {
    store.subscribe((state) => {
      const { launchList } = state;
      this.launchList = launchList[0];
    });
  }

  ngOnInit(): void {
    this._launchService.getSpaceXPrograms();
  }
  /**
   * filters start
   */
  selectedYearFilterValue: number = null;
  launchYearClick(selectedYear) {
    if (this.selectedYearFilterValue != selectedYear) {
      this.selectedYearFilterValue = selectedYear;
      this.applyFilters();
    }
  }
  launchTrueFalse: boolean = null;
  launchTrueFalseClick(value) {
    if (this.launchTrueFalse != value) {
      this.launchTrueFalse = value;
      this.applyFilters();
    }
  }
  landingTrueFalse: boolean = null;
  landingTrueFalseClick(value) {
    if (this.landingTrueFalse != value) {
      this.landingTrueFalse = value;
      this.applyFilters();
    }
  }

  applyFilters() {
    this._launchService.getSpaceXProgramsWithFilters(
      this.launchTrueFalse,
      this.landingTrueFalse,
      this.selectedYearFilterValue
    );
  }
}
