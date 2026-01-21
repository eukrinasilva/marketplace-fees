export type FeeType = 'fixed' | 'percentage';

export class FeeConfiguration {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly fixedFeeCents: number,
    public readonly percentageFee: number,
    public readonly marketplace: string
  ) {}

  public calculateFee(saleAmountCents: number): number {
    const percentagePart = Math.round((saleAmountCents * this.percentageFee) / 100);
    const totalFee = percentagePart + this.fixedFeeCents;
    
    return totalFee;
  }

  public calculateNetValue(saleAmountCents: number): number {
    return saleAmountCents - this.calculateFee(saleAmountCents);
  }
}