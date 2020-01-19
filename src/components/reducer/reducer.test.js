import { reducer } from "./reducer";

it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEcual({
        step: -1,
        mistakes: 0
    });
});

it(`Should increment current step by a given number`,
    expect(reducer({
        step: 0,
        mistakes: 0
    }, {
        type: `increment_step`,
        payload: 1
    }).Ecual({
        step: 1,
        mistakes: 0
    })))