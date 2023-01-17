import { useNavigate } from 'react-router-dom'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostCardContainer } from './styles'

interface PostCardProps {
  issue: {
    title: string
    body: string
    number: number
    created_at: string
  }
}

export function PostCard({ issue }: PostCardProps) {
  const fragment = issue.body.substring(0, 176) + '...'
  const formattedDate = relativeDateFormatter(issue.created_at)

  const navigate = useNavigate()

  function handleRedirect() {
    navigate(`post/${issue.number}`)
  }

  return (
    <PostCardContainer>
      <div onClick={handleRedirect}>
        <header>
          <h2>{issue.title}</h2>
          <p>{formattedDate}</p>
        </header>

        <p>{fragment}</p>
      </div>
    </PostCardContainer>
  )
}
