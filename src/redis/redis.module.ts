import { Global, Module } from "@nestjs/common";
import { RedisService } from "./redis.service";
import { createClient } from "redis";

@Global()
@Module({
  providers:[
    RedisService,
    // 在 providers 数组中，我们声明了一个 RedisService 和一个名为 REDIS_CLIENT 的自定义提供者。
    // 对于 REDIS_CLIENT 提供者，我们使用了 async 工厂方法来创建 Redis 客户端实例。
    // 在工厂方法中，我们使用 createClient 方法创建了一个 Redis 客户端，并配置了连接信息（这里是本地主机和默认端口）。然后使用 await client.connect() 来确保客户端连接成功，最后返回该客户端实例
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379
          }
        })
        await client.connect();
        return client;
      }
    }
  ],
  exports: [RedisService]
})
export class RedisModule {}
