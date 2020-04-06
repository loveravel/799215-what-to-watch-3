export default class ModelUser {
  constructor(data) {
    this.id = data.id || null;
    this.email = data.email || ``;
    this.name = data.name || ``;
    this.avatarUrl = data.avatar_url || ``;
  }

  static parseUser(data) {
    if (!data) {
      return {};
    }

    return new ModelUser(data);
  }
}
