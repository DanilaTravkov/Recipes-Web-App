type Token = string;

export interface tokenInterface {
    tokens: any
    login: (tokens: {}) => void
    logout: () => void
}