import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
  id: "123",
  name: "name",
  email: "email",
};

export class RepoQueryerStub implements ForRepoQuerying {
  getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

  createUser(_user: User, _password: string): Promise<RepoUser> {
      return Promise.resolve(userMock);
  }
}
