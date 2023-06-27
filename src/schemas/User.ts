import { z } from 'zod';

const UserSchema = z.object({
    id: z
        .number({
            description: 'O ID deve ser um número válido',
            invalid_type_error: 'O ID deve ser um número válido',
            required_error: 'O ID é necessário',
        })
        .positive('O ID deve ser um número positivo'),

    name: z
        .string({
            description: 'O nome deve ser válido',
            invalid_type_error: 'O nome deve ser válido',
            required_error: 'O nome é necessário',
        })
        .trim()
        .min(3, 'O nome deve conter no mínimo 3 caracteres')
        .nonempty('O nome não pode ser vazio'),

    username: z
        .string({
            description: 'O nome de usuario deve ser válido',
            invalid_type_error: 'O nome de usuario deve ser válido',
            required_error: 'O nome de usuario é necessário',
        })
        .trim()
        .min(3, 'O nome de usuario deve conter no mínimo 3 caracteres')
        .nonempty('O nome de usuario não pode ser vazio'),

    email: z
        .string({
            description: 'O email deve ser válido',
            invalid_type_error: 'O email deve ser válido',
            required_error: 'O email é necessário',
        })
        .email('O email deve ser válido'),

    password: z
        .string({
            description: 'A senha deve ser uma sequência de caracteres',
            invalid_type_error: 'A senha deve ser uma sequência de caracteres',
            required_error: 'A senha é obrigatória',
        })
        .min(6, 'A senha deve ter pelo menos 6 caracteres'),

    verified: z.boolean({
        description: 'O atributo verificado deve ser um booleano',
        invalid_type_error: 'O atributo verificado deve ser um booleano',
        required_error: 'O verificado é necessário'
    }),

});

const CreateUserSchema = UserSchema.pick({
    name: true,
    username: true,
    email: true,
    password: true,
});

const AuthUserSchema = UserSchema.pick({
    email: true,
    password: true,
});

const DetailsUserSchema = UserSchema.pick({
    name: true,
    email: true,
    username: true,
});

export { UserSchema, CreateUserSchema, AuthUserSchema, DetailsUserSchema };