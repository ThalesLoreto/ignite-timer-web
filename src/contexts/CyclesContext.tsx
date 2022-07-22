import { createContext, ReactNode, useReducer, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { reducer, Cycle } from '../reducers/cycles'
import {
  createCycleAction,
  finishCycleAction,
  interruptCycleAction,
} from '../reducers/cycles/actions'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  interruptCurrentCycle: () => void
  createNewCycle: SubmitHandler<CreateCycleData>
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycleState, dispatch] = useReducer(reducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cycleState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const createNewCycle: SubmitHandler<CreateCycleData> = (data) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch(createCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCycleAction())
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(finishCycleAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
