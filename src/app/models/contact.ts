export class Contact {
  constructor(name?: string, email?: string, devis?: boolean, message?: string) {
    this.name = name;
    this.email = email;
    this.devis = devis;
    this.message = message;
  }
  id: number;
  name: string;
  email: string;
  devis: boolean;
  message: string;
}
