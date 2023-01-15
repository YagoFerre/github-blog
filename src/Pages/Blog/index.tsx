import { Profile } from '../../components/Profile'
import { PostCard } from './components/PostCard'
import { SearchForm } from './components/SearchForm'
import { PostContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Profile />

      <PostContainer>
        <SearchForm />
        <PostCard />
      </PostContainer>
    </div>
  )
}
