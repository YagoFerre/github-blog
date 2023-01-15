import {
  ArrowSquareOut,
  GithubLogo,
  CaretLeft,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import {
  PostInfoContainer,
  PostInfoCard,
  PostInfoContent,
  InfoContainer,
} from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoCard>
        <PostInfoContent>
          <header>
            <a href="">
              <CaretLeft size={12} weight="bold" />
              VOLTAR
            </a>
            <a href="">
              VER NO GITHUB
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          </header>

          <h2>JavaScript data types and data structures</h2>

          <InfoContainer>
            <div>
              <GithubLogo size={18} weight="fill" />
              Yago Ferreira
            </div>
            <div>
              <Calendar size={18} weight="fill" />
              Há 1 dia
            </div>
            <div>
              <ChatCircle size={18} weight="fill" />5 Comentários
            </div>
          </InfoContainer>
        </PostInfoContent>
      </PostInfoCard>
    </PostInfoContainer>
  )
}
