/* eslint-disable no-unused-vars */
import { Cycle } from '.'

export enum ActionTypes {
  create = 'create',
  interrupt = 'interrupt',
  finish = 'finish',
}

export function createCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.create,
    payload: newCycle,
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.interrupt,
  }
}

export function finishCycleAction() {
  return {
    type: ActionTypes.finish,
  }
}
