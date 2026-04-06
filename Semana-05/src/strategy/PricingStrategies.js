
export class NormalStrategy {
  calculate(price) {
    return price;
  }
}

export class DiscountStrategy {
  calculate(price) {
    return price * 0.9;
  }
}

export class HighSeasonStrategy {
  calculate(price) {
    return price * 1.2;
  }
}
