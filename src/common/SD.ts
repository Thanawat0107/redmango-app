export const baseUrl = "https://6db065e85a33.ngrok-free.app"
export const baseUrlAPI = baseUrl + "/api/";

export const userTest = '50067186-ae17-4836-a6f1-6584bac559ee';

export enum SD_Roles {
  ADMIN = "admin",
  CUTOMER = "customer",
}

export enum SD_Status {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  BEING_COOKED = "Being Cooked",
  READY_FOR_PICKUP = "Ready for Pickup",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export enum SD_Categories {
  APPETIZER = "Appetizer",
  ENTREE = "Entree",
  DESSERT = "Dessert",
  BEVERAGES = "Beverages",
}

export enum SD_SortTypes {
  PRICE_LOW_HIGH = "Price Low - High",
  PRICE_HIGH_LOW = "Price High - Low",
  NAME_A_Z = "Name A - Z",
  NAME_Z_A = "Name Z - A",
}

export enum SD_PerPage {
  PERPAGE0 = "1",
  PERPAGE1 = "2",
  PERPAGE2 = "5",
  PERPAGE3 = "10",
  PERPAGE4 = "20",
}