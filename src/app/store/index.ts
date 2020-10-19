import { Subject } from "rxjs";
import { ActionTypes } from "./actions";

interface InitialState {
  launchList: Array<Object>;
}

let state: InitialState = {
  launchList: [],
};

interface Event {
  type: String;
  payload?: Object;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_LAUNCH:
      state = {
        launchList: [data.payload],
      };
      store.next(state);
      break;
    default:
      break;
  }
});
