import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, { message: 'Informe a tarefa' }),
  minutesAmount: z.number().min(1).max(60),
})

export type Inputs = z.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<Inputs>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

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
