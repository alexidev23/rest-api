import { Router } from 'express'
// Forma recomendada para importar un json
// import { readJSON } from '../utils.js'
import { movieController } from '../controllers/movies.js'

export const moviesRouter = Router()
// Primera forma para importar un json
// Por el momento usar fileSystem
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
// Forma recomendada para importar un json
// const movies = readJSON('./movies.json')

moviesRouter.get('/', movieController.getAll)
moviesRouter.post('/', movieController.create)

moviesRouter.get('/:id', movieController.getById)
moviesRouter.delete('/:id', movieController.delete)
moviesRouter.patch('/:id', movieController.update)
