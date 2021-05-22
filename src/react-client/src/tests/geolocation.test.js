import { calculateDistance } from "../functions/geolocation";

test("get distance in km", () => {
  const result = calculateDistance({ start: { lat: 60.2021, lng: 24.9281 }, end: { lat: 60.2103, lng: 24.9391 } });
  expect(result).toBe("1.1");
});
