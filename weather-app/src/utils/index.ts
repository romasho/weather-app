export function getTomorrow() {
  const now = new Date();

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return String(tomorrow);
}

export function getToday() {
  const now = new Date();

  const today = now.toISOString().split('T')[0];

  return String(today);
}
