export interface Message {
  status?: 'NEW' | 'Responded';
  title: string;
  author: string;
  date: string;
  body: string;
  attachments?: number;
}
