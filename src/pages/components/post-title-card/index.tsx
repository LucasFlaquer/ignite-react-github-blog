import {
  FaAngleLeft,
  FaArrowUpRightFromSquare, FaCalendar, FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { Container, Info } from './styles'
import { useTheme } from 'styled-components'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router'

interface Props {
  githubUrl: string
  title: string
  username: string
  createdAt: Date
  comments: number
}

export function PostTitleCard({
  comments,
  createdAt,
  githubUrl,
  title,
  username,
}: Props) {
  const { colors } = useTheme()

  const createdAtFormatted = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,

  })

  return (
    <Container>
      <header>
        <Link to="/">
          <FaAngleLeft size={12} />
          Voltar
        </Link>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          ver no github <FaArrowUpRightFromSquare size={12} />
        </a>
      </header>
      <h1>{title}</h1>
      <Info>
        <div>
          <FaGithub size={18} color={colors['base-label']} />
          <span>{username}</span>
        </div>
        <div>
          <FaCalendar size={18} color={colors['base-label']} />
          <span>{createdAtFormatted}</span>
        </div>
        <div>
          <FaComment size={18} color={colors['base-label']} />
          <span>{comments} comentários</span>
        </div>
      </Info>

    </Container>
  )
}
