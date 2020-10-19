import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { eventDispatcher } from "../store";
import { ActionTypes } from "../store/actions";
@Injectable({
  providedIn: "root",
})
export class LaunchService {
  constructor(private _http: HttpClient) {}

  getSpaceXPrograms() {
    this._http.get(environment.apiURL).subscribe(
      (res) => {
        eventDispatcher.next({ type: ActionTypes.GET_LAUNCH, payload: res });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getSpaceXProgramsWithFilters(launchSuccess, landSuccess, Year) {
    let URLLink = ``;
    if (
      !this.isNull(Year) &&
      this.isNull(launchSuccess) &&
      this.isNull(landSuccess)
    ) {
      URLLink = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${Year}`;
    } else if (
      this.isNull(Year) &&
      !this.isNull(launchSuccess) &&
      this.isNull(landSuccess)
    ) {
      URLLink = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccess}`;
    } else if (
      this.isNull(Year) &&
      this.isNull(launchSuccess) &&
      !this.isNull(landSuccess)
    ) {
      URLLink = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=${landSuccess}`;
    } else if (
      !this.isNull(Year) &&
      !this.isNull(launchSuccess) &&
      this.isNull(landSuccess)
    ) {
      URLLink = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&launch_year=${Year}`;
    } else if (
      !this.isNull(Year) &&
      !this.isNull(launchSuccess) &&
      !this.isNull(landSuccess)
    ) {
      URLLink = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${Year}`;
    }
    this._http.get(URLLink).subscribe(
      (res) => {
        eventDispatcher.next({ type: ActionTypes.GET_LAUNCH, payload: res });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  isNull(val) {
    return val === null || val === undefined || val === "";
  }
}
