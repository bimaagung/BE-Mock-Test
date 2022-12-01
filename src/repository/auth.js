/* eslint-disable consistent-return */
const { User } = require('../models');

class AuthRepository {
  constructor() {
    this._User = User;
  }

  async addUser(user) {
    const result = this._localDB.push(user);
    return result;
  }

  async getUserByPin(pin) {
    const result = this._User.findOne({ where: { pin } });
    return result;
  }
}

module.exports = AuthRepository;
