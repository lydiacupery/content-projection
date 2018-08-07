import { TeapotStateModel } from '../state/teapot.state';

// TODO: using this because reset state not working
export class DummySetState {
  static readonly type = 'DUMMY_SET_STATE';
  constructor(public newState: TeapotStateModel) {}
}
