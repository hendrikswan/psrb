import expect from 'expect';
import formContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('formContainerReducer', () => {
  it('returns the initial state', () => {
    expect(formContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
