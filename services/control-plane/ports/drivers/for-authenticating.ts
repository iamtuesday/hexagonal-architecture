export interface AuthenticatedUser{
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
}

// export type User  = Omit<AuthenticatedUser, "id" | "token" | "refreshtoken">

export type User  = Pick<AuthenticatedUser, "email"  | "name">

export interface ForAuthentication {
    login: (email: string, password: string) => Promise<AuthenticatedUser>;
    register: (user: User, password: string) => Promise<AuthenticatedUser>;
}