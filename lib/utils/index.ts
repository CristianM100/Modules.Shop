export const formatCurrency = ({
    amount,
    local = 'en-US',
    currency = 'USD',
    decimalPlaces = 2
  }: {
    amount: number;
    local?: string;
    currency?: string;
    decimalPlaces?: number;
  }): string => {
    const formatter = new Intl.NumberFormat(local, {
      style: 'currency',
      currency,
      maximumFractionDigits: decimalPlaces
    })
  
    return isNaN(amount) ? '--' : formatter.format(amount)
  }
  
  export const capitalize = (text: string): string => {
    const lower = text.toLowerCase()
    const first = lower.charAt(0).toUpperCase()
    return first + lower.slice(1)
  }