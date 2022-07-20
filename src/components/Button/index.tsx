import { ButtonContainer, Variants } from "./Button.styles";

interface ButtonProps {
  variant?: Variants
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
