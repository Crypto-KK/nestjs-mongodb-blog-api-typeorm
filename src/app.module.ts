import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://10.211.55.6/nest-blog-api"),
    UsersModule
  ],
})
export class AppModule {}
