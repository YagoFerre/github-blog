import { MagnifyingGlass } from 'phosphor-react'
import { InputContent, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <InputContent>
        <input type="text" placeholder="Buscar conteúdo" />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </InputContent>
    </SearchFormContainer>
  )
}
