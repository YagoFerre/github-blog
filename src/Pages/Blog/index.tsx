import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { IssuesContext } from '../../contexts/IssuesContext'
import { PostCard } from './components/PostCard'
import { SearchForm } from './components/SearchForm'
import { PostContainer } from './styles'

export function Blog() {
  const { issues } = useContext(IssuesContext)

  return (
    <div>
      <Profile />

      <SearchForm />
      <PostContainer>
        {issues.map((issue) => (
          <PostCard key={issue.number} issue={issue} />
        ))}
      </PostContainer>
    </div>
  )
}
