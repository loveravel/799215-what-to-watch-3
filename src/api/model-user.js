export default class ModelUser {
  constructor(data) {
    this.id = data.id || null;
    this.email = data.email || ``;
    this.name = data.name || ``;
    this.avatarUrl = data.avatar_url || ``;
  }

  toInitial() {

  }

  static parseUser(data) {
    return new ModelUser(data);
  }
}
