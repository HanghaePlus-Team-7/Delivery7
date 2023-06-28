import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { setNestApp } from "./common/setNestApp";
import { BigIntToStringInterceptor } from "./common/bigIntToStringInterceptoe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle("Delivery0111 API")
    .setDescription("Delivery0111 API description")
    .setVersion("0.1")
    .addTag("Delivery0111")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  setNestApp(app);
  app.useGlobalInterceptors(new BigIntToStringInterceptor());
  await app.listen(3000);
}
bootstrap();
