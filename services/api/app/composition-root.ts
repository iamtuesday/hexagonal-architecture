import { Api } from "./api";
import { ControlAuthenticatorStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { RepoQueryerStub } from "../adapters/drivens/repo-querier-stub-adapter";
import { AuthenticatorProxyAdapater } from "../adapters/drivers";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQueryerStub = new RepoQueryerStub();
  const apiMock = new Api(controlAuthenticatorStub, repoQueryerStub);

  const authenticatorProxyAdapater = new AuthenticatorProxyAdapater(apiMock);

  return {
    authenticatorProxyAdapater,
  };
};

export const { authenticatorProxyAdapater } = compositionMock();

const registerMock = {
    name: "John Doe",
    email: "jhon@gmail.com"
}

authenticatorProxyAdapater.login("user@gmail.com", "123456789")
authenticatorProxyAdapater.register(registerMock, "123456789")