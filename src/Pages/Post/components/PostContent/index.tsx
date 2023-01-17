import { ContentContainer, ContentPost } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <ContentContainer>
      <ContentPost>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </ContentPost>
    </ContentContainer>
  )
}
