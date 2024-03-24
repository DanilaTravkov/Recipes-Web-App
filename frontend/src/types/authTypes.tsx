type Token = string;

export interface tokenInterface {
    token: string | null
    login: (token: Token) => void
    logout: () => void
}