import fastify from 'fastify'

const server = fastify()

server.listen({ port: 3000 }, (err, address) => {
  err
    ? console.error(`Error starting server: `, err)
    : console.log(`Server listening on ${address}`)
})
