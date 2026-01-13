export type UserRole = 'concierge' | 'manager';

export type RideStatus = 'creating' | 'matching' | 'assigned' | 'arriving' | 'onboard' | 'enroute' | 'completed' | 'cancelled';

export type VehicleType = 'sedan' | 'suv' | 'luxury' | 'van';

export type PaymentType = 'card' | 'cash';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  hotelId: string;
  hotelName: string;
  deviceBound: boolean;
  deviceName?: string;
  kycStatus: 'pending' | 'approved' | 'rejected';
  isMember: boolean;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  photo: string;
  vehicle: string;
  vehiclePlate: string;
  rating: number;
  eta?: number;
}

export interface Guest {
  phone?: string;
  email?: string;
  present: boolean;
}

export interface Ride {
  id: string;
  status: RideStatus;
  guestInfo: Guest;
  pickupLocation: string;
  destination?: string;
  vehicleType: VehicleType;
  paymentType: PaymentType;
  fare: number;
  commission: number;
  driver?: Driver;
  createdBy: string;
  createdAt: Date;
  completedAt?: Date;
  addOns?: string[];
  cashConfirmed?: boolean;
  rating?: number;
  tip?: number;
}

export interface Commission {
  date: string;
  rides: number;
  total: number;
}