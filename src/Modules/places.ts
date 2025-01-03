class Places {
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  id: number
  destacado: Boolean
  tipo: string

  constructor(
    id: number,
    capa: string,
    titulo: string,
    avaliacao: number,
    descricao: string,
    destacado: Boolean,
    tipo: string
  ) {
    this.id = id
    this.descricao = descricao
    this.capa = capa
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.tipo = tipo
    this.destacado = destacado
  }
}

export default Places
