import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'
import { Container, Info } from './styles'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ProfileInterface {
  name: string
  bio: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
  login: string
}

export function Profile() {
  const { colors } = useTheme()
  const [profile, setProfile] = useState<ProfileInterface>({
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    html_url: '',
    login: '',
    name: '',
  })
  async function fetchProfile() {
    const response = await axios.get(import.meta.env.VITE_PROFILE_URL)
    console.log(response.data)
    setProfile(response.data)
  }
  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <Container>
      <img src={profile.avatar_url} alt="" />
      <div>
        <header>
          <h2>{profile.name}</h2>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            github <FaArrowUpRightFromSquare size={12} />
          </a>
        </header>
        <p>
          {profile.bio}
        </p>
        <Info>
          <div>
            <FaGithub size={18} color={colors['base-label']} />
            <span>{profile.login}</span>
          </div>
          <div>
            <FaBuilding size={18} color={colors['base-label']} />
            <span>{profile.company}</span>
          </div>
          <div>
            <FaUserGroup size={18} color={colors['base-label']} />
            <span>{profile.followers} seguidores</span>
          </div>
        </Info>

      </div>
    </Container>
  )
}
