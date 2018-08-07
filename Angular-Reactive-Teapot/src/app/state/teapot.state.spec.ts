import { TeapotStateModel, TeapotState } from './teapot.state';
import { TeapotStatus } from '../models/teapot.model';
import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '../../../node_modules/@ngxs/store';
import { DummySetState } from '../actions/teapot.actions';

describe('Order State Selectors', () => {
  const futureDate = new Date('10/20/2020');

  it('getRequestedDate should get requested date', () => {
    const teapotStateModel: TeapotStateModel = {
      teapotIds: ['1', '2'],
      teapotStatusById: {
        '1': TeapotStatus.ON,
        '2': TeapotStatus.OFF
      },
      teapotsMessage: ''
    };
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TeapotState])]
    });

    const store: Store = TestBed.get(Store);

    store.dispatch(new DummySetState(teapotStateModel));

    const selector = TeapotState.status('1');
    const slice = store.selectSnapshot(selector);
    expect(slice).toEqual([TeapotStatus.ON]);
  });
});
