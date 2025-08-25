export const sliceText = (maxLength: number, text: string): string => {
  if (typeof text !== 'string') {
    return '';
  }
  const slicedText = text.slice(0, maxLength);
  const suffix = text.length > maxLength ? '...' : '';
  return slicedText + suffix;
};

// This functions returns the argument in proper case
export const firstLetterCaps = (str: string): string => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};

export const hashEmail = (email: string): string => {
  if (typeof email !== 'string') {
    throw new Error('Input must be a string');
  }

  // Extract the first four and last four digits
  const firstFourDigits = email.slice(0, 4);
  const lastTwoDigits = email.slice(-4);

  return `${firstFourDigits}****${lastTwoDigits}`;
};

export function formatCurrencyShort(n: number): string {
  if (n < 1e3) return n.toString();
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;
  return n.toString();
}

export const convertMinutesToHoursAndMinutes = (minutes: number): string => {
  if (typeof minutes !== 'number' || isNaN(minutes)) return '0mins';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.ceil(minutes % 60);

  if (hours < 1) {
    return `${remainingMinutes}mins`;
  } else if (hours === 1) {
    if (remainingMinutes === 1) {
      return `${hours}hr ${remainingMinutes}min`;
    } else {
      return `${hours}hr ${remainingMinutes}mins`;
    }
  } else {
    if (remainingMinutes === 1) {
      return `${hours}hrs ${remainingMinutes}min`;
    } else {
      return `${hours}hrs ${remainingMinutes}mins`;
    }
  }
};

export const formatToCurrency = (
  amount: number,
  currency: string = 'NGN',
): string => {
  if (typeof amount !== 'number') {
    return String(amount);
  }

  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};
