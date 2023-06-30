import { z } from 'zod';

const PostSchema = z.object({
    id: z
        .number({
            description: 'O ID deve ser um número válido',
            invalid_type_error: 'O ID deve ser um número válido',
            required_error: 'O ID é necessário',
        })
        .positive('O ID deve ser um número positivo'),

    title: z
        .string({
            description: 'O titulo deve ser válido',
            invalid_type_error: 'O titulo deve ser válido',
            required_error: 'O titulo é necessário',
        })
        .trim()
        .min(3, 'O titulo deve conter no mínimo 3 caracteres')
        .nonempty('O titulo não pode ser vazio'),

    categories: z
        .array(
            z.string({
                description: 'As categorias devem ser válidas',
                invalid_type_error: 'As categorias devem ser válidas',
                required_error: 'As cateorias são necessárias',
            }).trim().nonempty('O nome das categorias não podem ser vazias')
        )
        .optional(),

    slug: z
        .string({
            description: 'O slug deve ser válido',
            invalid_type_error: 'O slug deve ser válido',
            required_error: 'O slug é necessário',
        })
        .trim()
        .min(3, 'O slug deve conter no mínimo 3 caracteres')
        .nonempty('O slug não pode ser vazio'),

    description: z
        .string({
            description: 'A descrição deve ser válido',
            invalid_type_error: 'A descrição deve ser válido',
            required_error: 'A descrição é necessário',
        })
        .min(12, 'A descrição deve conter no mínimo 12 caracteres')
        .nonempty('A descrição deve ser válido'),

    body: z
        .string({
            description: 'O body deve ser válido',
            invalid_type_error: 'O body deve ser válido',
            required_error: 'O body é obrigatório',
        })
        .min(320, 'O body deve ter pelo menos 320 caracteres'),
});

const CreatePostSchema = PostSchema.pick({
    title: true,
    slug: true,
    categories: true,
    description: true,
    body: true,
});

export { PostSchema, CreatePostSchema };