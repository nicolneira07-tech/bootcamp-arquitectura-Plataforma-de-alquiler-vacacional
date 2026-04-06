
export class PropertyFactory {
  static create(type, data) {
    switch (type) {
      case "house":
        return { ...data, type: "house", garden: true };
      case "apartment":
        return { ...data, type: "apartment", elevator: true };
      default:
        return { ...data, type: "basic" };
    }
  }
}
