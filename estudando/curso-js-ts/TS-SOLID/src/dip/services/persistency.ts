import { PersistencyProtocol } from '../entities/interface';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order saved');
  }
}
