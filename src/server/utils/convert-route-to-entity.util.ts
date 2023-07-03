const mapping: Record<string, string> = {
  apps: 'app',
  appointments: 'appointment',
  barbershops: 'barbershop',
  services: 'service',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
