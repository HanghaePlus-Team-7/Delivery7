import { OrderStatus } from "@orders/entities/order-status";

import { StoreEntity } from "@store/store.entity";

import { UserEntity } from "@user/user.entity";

export class OrdersEntity {
  id: bigint;
  paymentType: string; // 지금은 string, 추후에 enum 생성 후 변경
  status: OrderStatus;
  paymentStatus: boolean;
  paidAt: Date;
  user: UserEntity;
  store: StoreEntity;
  OrderSheet: [];
  orderedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: Partial<OrdersEntity>) {
    Object.assign(this, params);
  }

  static forConfirmOrder(id: bigint) {
    return new OrdersEntity({ id, status: OrderStatus.CONFIRMED });
  }
}
