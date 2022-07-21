import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
        placeholder="Dê um nome para seu projeto"
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
          required: true,
        })}
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
