export class PropertyFactory {
  static create(data) {
    return {
      id: Date.now(),
      ...data,
      createdAt: new Date(),
      license: null
    };
  }
}