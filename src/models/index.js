const getRandomId = () => Math.random().toString(36).substr(2)

class Block {
  constructor({ id = getRandomId(), type }) {
    this.id = id
    this.type = type
  }
}

class ImageBlock extends Block {
  constructor(opts) {
    super(opts)
    this.image_id = opts.value
  }
}

class TextBlock extends Block {
  constructor(opts) {
    super(opts)
    this.text = opts.value
  }
}

export const createBlock = opts => {
  switch (opts.type) {
    case 'text':
      return new TextBlock(opts)
    case 'image':
      return new ImageBlock(opts)
  }
}
