
import test from "node:test";
import assert from "node:assert";
import { PropertyService } from "../services/propertyService.js";

test("Crear propiedad", () => {
  const service = new PropertyService();

  const property = service.create({
    type: "house",
    title: "Test",
    pricePerNight: 100
  });

  assert.ok(property.id);
});

