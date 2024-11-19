class Places {
  image: string;
  title: string;
  nota: string;
  description: string;
  id: number;
  to?: string;

  constructor(
    id: number,
    image: string,
    title: string,
    nota: string,
    description: string,
    to?: string,
  ) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.title = title;
    this.nota = nota;
    this.to = to;
  }
}

export default Places;
