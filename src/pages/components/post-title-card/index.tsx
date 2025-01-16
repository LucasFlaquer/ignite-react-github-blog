import {
  FaAngleLeft,
  FaArrowUpRightFromSquare, FaCalendar, FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { Container, Info } from './styles'
import { useTheme } from 'styled-components'

export function PostTitleCard() {
  const { colors } = useTheme()
  return (
    <Container>
      <header>
        <a href="#" target="_blank" rel="noreferrer">
          <FaAngleLeft size={12} />
          Voltar
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          ver no github <FaArrowUpRightFromSquare size={12} />
        </a>
      </header>
      <h1>JavaScript data tyupes and data structures</h1>
      <Info>
        <div>
          <FaGithub size={18} color={colors['base-label']} />
          <span>lucasflaquer</span>
        </div>
        <div>
          <FaCalendar size={18} color={colors['base-label']} />
          <span>há 1dia</span>
        </div>
        <div>
          <FaComment size={18} color={colors['base-label']} />
          <span>5 comentários</span>
        </div>
      </Info>

    </Container>
  )
}
