import {generateAuthenticationString} from "dh-marvel/services/marvel/marvel-auth.service";

describe('MarvelAuthService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2020, 3, 1));
    })
    afterEach(() => {
        jest.useRealTimers();
    })
    describe('when generating an authentication string', () => {
        it('should return a valid query string', async () => {
            const authenticationString = generateAuthenticationString();
            expect(authenticationString).toBe('ts=1585717200000&apikey=PUBLIC_KEY&hash=3046f14bdcbe3ca1407cae88718a07f3')
        })
    })

})