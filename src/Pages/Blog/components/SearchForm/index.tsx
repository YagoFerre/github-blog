import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { InputContent, SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </div>

      <InputContent>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </InputContent>
    </SearchFormContainer>
  )
}
