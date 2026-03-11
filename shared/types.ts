export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
// Lead capture for the pitch deck
export interface Lead {
  id: string;
  name: string;
  email: string;
  role: string;
  message: string;
  ts: number;
}
export type CreateLeadPayload = Omit<Lead, 'id' | 'ts'>;
// Minimal real-world chat example types (shared by frontend and worker)
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number; // epoch millis
}