class AuthUseCase {
  constructor(userRepository, tokenManager) {
    this._userRepository = userRepository;
    this._tokenManager = tokenManager;
  }

  async login(pin) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    const user = await this._userRepository.getUserByPin(pin);

    if (user === null) {
      result.isSuccess = false;
      result.reason = 'account not available';
      result.statusCode = 400;
      return result;
    }

    // Delete password in result object userByPin
    const userPayload = {
      id: user.id,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    const token = this._tokenManager.generateToken(userPayload);

    result.isSuccess = true;
    result.data = {
      user: userPayload,
      token,
    };
    result.statusCode = 200;
    return result;
  }
}

module.exports = AuthUseCase;
