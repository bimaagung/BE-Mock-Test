require('dotenv').config();
const AuthUseCase = require('../../usecase/auth');
const tokenManager = require('../../helper/tokenManager');


describe("auth test", () => { 
     describe('login test', () => { 
        test("should isSuccess: false, statusCode: 404, and reason 'account not available'", async () => { 
            // Arrange 
            const user = {
                id: 1,
                name: 'User A',
                pin: 1234,
                createAt: Date.now(),
                updateAt: Date.now()
            }
            mockUserRepository = {
                getUserByPin: jest.fn().mockReturnValue(null)
            }

            const authUC = new AuthUseCase(mockUserRepository, tokenManager);

            // Action
            const result = await authUC.login(user.pin)

            // Assert
            expect(result.isSuccess).toBeFalsy();
            expect(result.statusCode).toEqual(404);
            expect(result.reason).toEqual('account not available');
            expect(mockUserRepository.getUserByPin).toHaveBeenCalledWith(user.pin);

         })
    
        test("should isSuccess: true, statusCode: 200, and data is correctly", async () => { 
            // Arrange 
            const user = {
                id: 1,
                name: 'User A',
                pin: 1234,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            mockUserRepository = {
                getUserByPin: jest.fn().mockReturnValue(user)
            }

            const authUC = new AuthUseCase(mockUserRepository, tokenManager);

            // Action
            const result = await authUC.login(user.pin)

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(200);
            expect(result.data).toHaveProperty('user');
            expect(result.data).toHaveProperty('token');
            expect(result.data.user).toEqual({
                id: user.id,
                name: user.name,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })

             expect(mockUserRepository.getUserByPin).toHaveBeenCalled();
         })
     })
 })