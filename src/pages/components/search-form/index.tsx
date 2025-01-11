import { Container, FormHeader } from './styles'

export function SearchForm() {
  return (
    <Container>
      <FormHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </FormHeader>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </Container>
  )
}
