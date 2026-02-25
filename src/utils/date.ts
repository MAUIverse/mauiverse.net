type DateInput = Date | string | number;

const LOCAL_TIMEZONE: string | undefined = (() => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return undefined;
  }
})();

function toDate(input: DateInput): Date {
  return input instanceof Date ? input : new Date(input);
}

export function formatLongDateUS(input: DateInput): string {
  return toDate(input).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatLongWeekdayDateUS(input: DateInput): string {
  return toDate(input).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTimeWithZoneUS(input: DateInput): string {
  return toDate(input).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    ...(LOCAL_TIMEZONE ? { timeZone: LOCAL_TIMEZONE } : {}),
    timeZoneName: 'short',
  });
}
