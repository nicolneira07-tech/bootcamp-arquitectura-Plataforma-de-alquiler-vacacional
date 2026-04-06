
import { PropertyFactory } from "../patterns/factory/PropertyFactory.js";

export class PropertyModel {
  constructor() {
    this.properties = [];
  }

  create(data) {
    const property = PropertyFactory.create(data.type, data);
    property.id = this.properties.length + 1;
    this.properties.push(property);
    return property;
  }

  getAll() {
    return this.properties;
  }

  getById(id) {
    return this.properties.find(p => p.id == id);
  }
}
