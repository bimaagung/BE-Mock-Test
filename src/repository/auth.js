/* eslint-disable consistent-return */
const { User } = require('../models');

class AuthRepository {
  constructor() {
    this._userModel = User;
  }

  async addUser(user) {
    const result = this._userModel.push(user);
    return result;
  }

  async getUserByPin(pin) {
    const result = this._userModel.findOne({ where: { pin } });
    return result;
  }
}

module.exports = AuthRepository;
