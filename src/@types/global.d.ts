import { MySQLPool } from '@fastify/mysql'

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPool
  }
}
