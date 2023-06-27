import bcrypt from 'bcrypt';

async function hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(data, salt);
}

async function compare(data: string, encrypted: string): Promise<boolean> {
    try {
        return await bcrypt.compare(data, encrypted);
    } catch (err) {
        return false;
    }
}

export const cryptography = { hash, compare };