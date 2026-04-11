
export class PropertyFactory {
  static create(data) {
    return {
      id: Date.now(),
      title: data.title,
      location: data.location,
      pricePerNight: data.pricePerNight,
      maxDaysPerYear: data.maxDaysPerYear,
      createdAt: new Date(),
      license: null
    };
  }
}