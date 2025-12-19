// User slice state types
export type UserProfile = {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  avatar?: string;
};

export type UserState = {
  profile: UserProfile | null;
  loading: boolean;
  error?: string;
};
