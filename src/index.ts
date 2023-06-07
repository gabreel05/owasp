import fastify from 'fastify'
import MySQL from '@fastify/mysql'

const server = fastify()

server.register(MySQL, {
  connectionString: 'mysql://hacker:aW50cnVkZXI=@localhost/owasp',
})

server.listen({ port: 3000 }, (err, address) => {
  err
    ? console.error(`Error starting server: `, err)
    : console.log(`Server listening on ${address}`)
})
