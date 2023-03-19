import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counter.slice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement())
        ).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment())
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
