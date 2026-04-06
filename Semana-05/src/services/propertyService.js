
import { PropertyModel } from "../models/propertyModel.js";

const model = new PropertyModel();

export class PropertyService {
  create(data) {
    return model.create(data);
  }

  getAll() {
    return model.getAll();
  }
}
