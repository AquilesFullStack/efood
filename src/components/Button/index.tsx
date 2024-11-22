import { ButtonContainer, ButtonLink } from './styles'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) {
      navigate(to)
    }
    if (onClick) {
      onClick()
    }
  }

  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={handleClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to || ''} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
