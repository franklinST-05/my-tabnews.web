export interface SchemaHandler<Schema, Data> {
    (schema: Schema, data: Data): { error: string | undefined };
}