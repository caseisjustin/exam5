enum loadStatus{
  loading="loading",
  inTransit="inTransit",
  delivered="delivered"
}
export class Model {
  id: string;
  loadOwner: string;
  dispatcher: string;
  driver: string;
  price: bigint;
  pickUpAddr: string;
  deliveryAddre: string;
  status: loadStatus
}
