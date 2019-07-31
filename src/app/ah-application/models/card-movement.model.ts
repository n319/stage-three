export interface ICardMovement {
  fromListIdx: number;
  fromCardIdx: number;
  toListIdx: number;
  toCardIdx: number;
}

export class CardMovementModel implements ICardMovement {
  fromListIdx: number;
  fromCardIdx: number;
  toListIdx: number;
  toCardIdx: number;

  constructor(fromListIdx: number, toListIdx: number, fromCardIdx?: number, toCardIdx?: number) {
    this.fromListIdx = fromListIdx;
    this.toListIdx = toListIdx;

    this.fromCardIdx = fromCardIdx;
    this.toCardIdx = toCardIdx;
  }
}
