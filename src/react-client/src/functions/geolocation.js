const metresToKm = (metres) => (metres / 1000).toFixed(1);

export const calculateDistance = ({ start, end }) => {
  const R = 6371e3; // metres
  const φ1 = (start.lat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (end.lat * Math.PI) / 180;
  const Δφ = ((end.lat - start.lat) * Math.PI) / 180;
  const Δλ = ((end.lng - start.lng) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return metresToKm(d);
};
