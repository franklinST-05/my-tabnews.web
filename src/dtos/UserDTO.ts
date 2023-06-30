export interface UserDTO {
    name: string;
    username: string;
    email: string;
    verified: boolean;
}

export class UserDTO {
    public constructor({ name, username, email, verified }: UserDTO) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.verified = verified;
    }
}