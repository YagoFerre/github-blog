import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  InfoContainer,
  ProfileCard,
  ProfileContainer,
  ProfileContent,
} from './styles'

interface User {
  name?: string
  html_url?: string
  avatar_url?: string
  bio?: string
  login?: string
  company?: string
  followers?: number
}

export function Profile() {
  const [user, setUser] = useState<User>({})

  async function loadUser() {
    const response = await api.get('/users/YagoFerre')

    setUser(response.data)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfileCard>
        <img src={user.avatar_url} alt="" />

        <ProfileContent>
          <header>
            <h2>{user.name}</h2>
            <a href={user.html_url}>
              GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          </header>

          <p>{user.bio}</p>

          <InfoContainer>
            <div>
              <GithubLogo size={18} weight="fill" />
              {user.login}
            </div>
            <div>
              <Buildings size={18} weight="fill" />
              {user.company ? user.company : 'No company'}
            </div>
            <div>
              <Users size={18} weight="fill" />
              {user.followers} Seguidores
            </div>
          </InfoContainer>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
