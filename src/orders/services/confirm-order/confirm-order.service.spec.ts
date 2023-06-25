import { Test, TestingModule } from "@nestjs/testing";

import { CONFIRM_ORDER } from "@orders/services/confirm-order/confirm-order.interface";
import { ConfirmOrderService } from "@orders/services/confirm-order/confirm-order.service";

describe("ConfirmOrder", () => {
  let provider: ConfirmOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CONFIRM_ORDER,
          useClass: ConfirmOrderService,
        },
      ],
    }).compile();

    provider = module.get<ConfirmOrderService>(ConfirmOrderService);
  });

  it("should be defined", () => {
    expect(provider).toBeDefined();
  });
});
