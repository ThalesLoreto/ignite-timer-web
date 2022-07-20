import styled, { css } from 'styled-components'

export type Variants = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: Variants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    margin: 8px;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};

    /** ${props => css`background-color: ${buttonVariants[props.variant]}`} */
`
