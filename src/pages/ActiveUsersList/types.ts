export interface User {
  id: number;
  isBanned: boolean;
  lastActivityAt: Date;
  avatarUrl: string;
  fullName: string;
  role: string;
}
