import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: "123token",
    refreshToken: "refreshToken123",
}

const permissionsMock: Permissions = {
    admin: true,
    user: false,
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
   getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
      return Promise.resolve(authDetailsMock);
   }

   getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
   }
}