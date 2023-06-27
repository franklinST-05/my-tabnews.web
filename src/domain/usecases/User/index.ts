import { CreateUser } from './CreateUser';
import { FindUserByEmail } from './FindUserByEmail';
import { FindUserByEmailOrUsername } from './FindUserByEmailOrUsername';
import { FindUserByUsername } from './FindUserByUsername';
import { UpdateUser } from './UpdateUser';

export * from './CreateUser';
export * from './FindUserByEmail';
export * from './FindUserByEmailOrUsername';
export * from './FindUserByUsername';
export * from './UpdateUser';

export type UserRepo = CreateUser & FindUserByEmail & FindUserByUsername & FindUserByEmailOrUsername & UpdateUser;