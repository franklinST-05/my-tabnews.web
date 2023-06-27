import { CreateUser } from './CreateUser';
import { FindUserByEmail } from './FindUserByEmail';
import { FindUserByUsername } from './FindUserByUsername';

export * from './CreateUser';
export * from './FindUserByEmail';
export * from './FindUserByUsername';

export type UserRepo = CreateUser & FindUserByEmail & FindUserByUsername;