const getRandomId = () => Math.random().toString(36).substr(2)

class Block {
  constructor({ id = getRandomId(), type, order }) {
    this.id = id
    this.type = type
    this.order = order
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

export const createBlock = (opts, block) => {
  let options = opts
  if (block) {
    const updatableProp = { text: 'text', image: 'image_id' }[block.type]
    options = { ...block, value: block[updatableProp], ...opts }
  }

  switch (options.type) {
    case 'text':
      return new TextBlock(options)
    case 'image':
      return new ImageBlock(options)
  }
}
