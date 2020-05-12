const models = require('../models')

const getAllVillains = async (_request, response) => {
  try {
    const villains = await models.villains.findAll({ attributes: ['name', 'movie', 'slug'] })

    return response.send(villains)
  } catch (error) {
    return response.status(500).send('Cannot get villains')
  }
}

const getVillainBySlug = async (request, response) => {
  try {
    const { slug } = request.params
    const matchedVillain = await models.villains.findOne({
      where: { slug },
      attributes: ['name', 'movie', 'slug'],
    })

    return matchedVillain
      ? response.send(matchedVillain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Cannot get villain')
  }
}

const createNewVillain = async (request, response) => {
  try {
    const { name, movie, slug } = request.body

    if (!name || !movie || !slug) {
      return response.status(400).send('The following data is required: name, movie, slug')
    }

    const newVillain = await models.villains.create({ name, movie, slug })

    return response.status(201).send(newVillain)
  } catch (error) {
    return response.status(500).send('Cannot create villain')
  }
}

module.exports = { getAllVillains, getVillainBySlug, createNewVillain }
