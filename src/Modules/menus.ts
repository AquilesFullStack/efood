class Menu {
  image: string
  title: string
  description: string
  id: number

  constructor(id: number, image: string, title: string, description: string) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
  }
}

export default Menu
