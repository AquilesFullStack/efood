class Places {
  image: string
  title: string
  nota: string
  description: string
  id: number
  destaque: string[]
  tipo: string[]
  to?: string

  constructor(
    id: number,
    image: string,
    title: string,
    nota: string,
    description: string,
    destaque: string[],
    tipo: string[],
    to?: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.nota = nota
    this.tipo = tipo
    this.destaque = destaque
    this.to = to
  }
}

export default Places
