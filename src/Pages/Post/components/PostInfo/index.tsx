import {
  ArrowSquareOut,
  GithubLogo,
  CaretLeft,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { relativeDateFormatter } from '../../../../utils/formatter'
import {
  PostInfoContainer,
  PostInfoCard,
  PostInfoContent,
  InfoContainer,
} from './styles'

interface PostInfoProps {
  issuePage: {
    title: string
    created_at: string
    number: number
    html_url: string
    comments: number
    user: {
      login: string
    }
  }
}

export function PostInfo({ issuePage }: PostInfoProps) {
  const formattedDate = relativeDateFormatter(issuePage?.created_at)

  return (
    <PostInfoContainer>
      <PostInfoCard>
        <PostInfoContent>
          <header>
            <NavLink to="/">
              <CaretLeft size={12} weight="bold" />
              VOLTAR
            </NavLink>
            <a href={issuePage.html_url} target="_blank" rel="noreferrer">
              VER NO GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          </header>

          <h2>{issuePage.title}</h2>

          <InfoContainer>
            <div>
              <GithubLogo size={18} weight="fill" />
              {issuePage?.user?.login}
            </div>
            <div>
              <Calendar size={18} weight="fill" />
              {formattedDate}
            </div>
            <div>
              <ChatCircle size={18} weight="fill" />
              {issuePage.comments} Comentários
            </div>
          </InfoContainer>
        </PostInfoContent>
      </PostInfoCard>
    </PostInfoContainer>
  )
}
