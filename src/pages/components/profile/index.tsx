import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'
import { Container, Info } from './styles'
import { useTheme } from 'styled-components'

export function Profile() {
  const { colors } = useTheme()
  return (
    <Container>
      <img src="https://github.com/lucasflaquer.png" alt="" />
      <div>
        <header>
          <h2>Lucas Flaquer</h2>
          <a href="https://github.com/lucasflaquer">
            github <FaArrowUpRightFromSquare size={12} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam
          dignissim aenean malesuada suscipit.
        </p>
        <Info>
          <div>
            <FaGithub size={18} color={colors['base-label']} />
            <span>lucas flaquer</span>
          </div>
          <div>
            <FaBuilding size={18} color={colors['base-label']} />
            <span>Catho</span>
          </div>
          <div>
            <FaUserGroup size={18} color={colors['base-label']} />
            <span>20 seguidores</span>
          </div>
        </Info>

      </div>
    </Container>
  )
}
