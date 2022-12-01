/* eslint-disable consistent-return */
class AuthRepository {
  constructor(localDB) {
    this._localDB = localDB;
  }

  async addUser(user) {
    const result = this._localDB.push(user);
    return result;
  }

  async getUserByName(name) {
    const result = this._localDB.push((data) => {
      if (data.name === name) return true;
    });
    return result;
  }
}

module.exports = AuthRepository;
