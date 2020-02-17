import { IAuthApiService } from '~/services/Apis/auth/IAuth';
import { UserData } from '~/types/models-data/auth/UserData';
import {
    LoginParams,
    LoginResponse,
    RegistrationParams,
    RegistrationResponse,
    RequestResetPasswordParams, ResetPasswordParams
} from '~/services/Apis/auth/types';
import { IHttpService } from '~/services/http/IHttp';
import { inject, injectable } from '~/node_modules/inversify';
import { TYPES } from '~/services/inversify-types';
import { AxiosResponse } from '~/node_modules/axios';

@injectable()
export class AuthApiService implements IAuthApiService {
    static LOGIN_PATH = 'api/auth/login/';
    static RESET_PASSWORD_PATH = 'api/auth/password/verify/';
    static REQUEST_RESET_PASSWORD_PATH = 'api/auth/password/reset/';
    static REGISTER_PATH = 'api/auth/register/';
    static AUTHENTICATED_USER_PATH = 'api/auth/user/';

    constructor(@inject(TYPES.HttpService) private httpService: IHttpService) {

    }

    requestResetPassword(data: RequestResetPasswordParams) : Promise<AxiosResponse<void>>{
        return this.httpService.post<void>(AuthApiService.REQUEST_RESET_PASSWORD_PATH, {
            email: data.email
        }, {
            isApiRequest: true,
        })
    }

    resetPassword(data: ResetPasswordParams) : Promise<AxiosResponse<void>> {
        return this.httpService.post<void>(AuthApiService.RESET_PASSWORD_PATH, {
            token: data.resetToken,
            new_password: data.newPassword
        }, {
            isApiRequest: true,
        })
    }

    login(data: LoginParams) : Promise<AxiosResponse<LoginResponse>>{
        return this.httpService.post<LoginResponse>(AuthApiService.LOGIN_PATH, {
            username: data.username,
            password: data.password
        }, {
            isApiRequest: true,
        })
    }

    register(data: RegistrationParams) : Promise<AxiosResponse<RegistrationResponse>>{
        return this.httpService.post<RegistrationResponse>(AuthApiService.REGISTER_PATH, {
            email: data.email,
            password: data.password,
            name: data.password,
            token: data.inviteToken,
            is_of_legal_age: data.isOfLegalAge,
            are_guidelines_accepted: data.areGuidelinesAccepted
        }, {
            isApiRequest: true
        })
    }

    getAuthenticatedUser() :  Promise<AxiosResponse<UserData>>{
        return this.httpService.get<UserData>(AuthApiService.AUTHENTICATED_USER_PATH, {
            isApiRequest: true,
            appendAuthorizationToken: true
        });
    }
}