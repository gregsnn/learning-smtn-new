import { MessagingProtocol } from '../entities/interface';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(`Message: ${message}`);
  }
}
