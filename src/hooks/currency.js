import { useTranslation } from 'react-i18next';

export function useCurrency(data) {
  const { i18n } = useTranslation();

  if(!data) {
    return null;
  }

  const currencyFormat = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: data.currency,
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return currencyFormat.format(data.amount);
}
