import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalFilters({
    catch(exception) {
      console.error(exception);
      throw exception;
    },
  });
}
bootstrap();
