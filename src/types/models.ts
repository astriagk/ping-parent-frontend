export interface ParentProfile {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  profileImageUrl?: string;
  role: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
}

export interface ParentAddress {
  userId: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UpdateParentProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  profileImageUrl?: string;
}

export interface UpdateParentAddressRequest {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
