// Section 1
import {
  State,
  Action,
  StateContext,
  Selector,
  createSelector
} from '@ngxs/store';
import { UniqueArray, Dictionary } from '../helpers/custom-types';
import { TeapotStatus } from '../models/teapot.model';
import { DummySetState } from '../actions/teapot.actions';

// Section 2
export class TeapotStateModel {
  teapotIds: UniqueArray<string>;
  teapotStatusById: Dictionary<TeapotStatus>;
  teapotsMessage: string;
}

// Section 3
@State<TeapotStateModel>({
  name: 'teapot',
  defaults: {
    teapotIds: [],
    teapotStatusById: {},
    teapotsMessage: ''
  }
})
export class TeapotState {
  static status(teapotId: string) {
    return createSelector([TeapotState], (state: TeapotStateModel) => {
      const toReturn = state.teapotIds
        .filter(id => id === teapotId)
        .map(id => state.teapotStatusById[id]);
      return toReturn;
    });
  }

  @Action(DummySetState)
  dummySetState(
    context: StateContext<TeapotStateModel>,
    action: DummySetState
  ) {
    context.setState({
      ...action.newState
    });
  }
}
