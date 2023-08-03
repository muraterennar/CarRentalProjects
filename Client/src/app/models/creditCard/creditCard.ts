export interface CreditCard{
    id: number;
    customerId: number;
    nameOfTheCardHolder: string;
    cardNumber: string;
    cvv: string;
    expirationMonth: number;
    expirationYear: number;
}