import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { setNestApp } from "./common/setNestApp";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setNestApp(app);
  await app.listen(3000);
}
bootstrap();
