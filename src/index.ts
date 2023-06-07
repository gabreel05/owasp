import fastify from 'fastify'
import MySQL from '@fastify/mysql'

const server = fastify()

server.register(MySQL, {
  host: '127.0.0.1',
  user: 'hacker',
  password: 'aW50cnVkZXI=',
  database: 'owasp',
})

server.get('/users', (request, reply) => {
  server.mysql.query('SELECT * FROM users', (err, result) => {
    reply.send(err || result)
  })
})

server.listen({ port: 3000 }, (err, address) => {
  err
    ? console.error(`Error starting server: `, err)
    : console.log(`Server listening on ${address}`)
})
