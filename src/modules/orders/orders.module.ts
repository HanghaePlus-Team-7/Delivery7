import { Module } from "@nestjs/common";

import { OrdersController } from "@root/modules/orders/orders.controller";
import { CONFIRM_ORDER } from "@root/modules/orders/services/confirm-order/confirm-order.interface";
import { ConfirmOrderService } from "@root/modules/orders/services/confirm-order/confirm-order.service";

@Module({
  controllers: [OrdersController],
  providers: [
    {
      provide: CONFIRM_ORDER,
      useClass: ConfirmOrderService,
    },
  ],
})
export class OrdersModule {}
