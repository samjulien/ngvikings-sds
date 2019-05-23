export class WeaponsService {
  fireTorpedoes(): Promise<true> {
    return new Promise(resolve => {
      setTimeout(() => resolve(true), 2500);
    });
  }
}
