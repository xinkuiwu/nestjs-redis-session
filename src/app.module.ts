import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionModule } from './session/session.module';
import { RedisModule } from "./redis/redis.module";

@Module({
  imports: [RedisModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
