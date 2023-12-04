export const formatCurrency = (currency: any) => {
    return new Intl.NumberFormat("en-IN", { style: 'currency', currency: 'INR' }).format(currency);
}