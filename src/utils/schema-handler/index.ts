import { SchemaHandler } from '@/protocols/schema-handler';
import { ZodObject } from 'zod';

const schemaHandler: SchemaHandler<ZodObject<any>, any> = (schema, data) => {
    const isValid = schema.safeParse(data);
    if (!isValid.success) {
        return {
            error: isValid.error.errors[0].message,
        };
    }

    return { error: undefined };
};

export { schemaHandler };