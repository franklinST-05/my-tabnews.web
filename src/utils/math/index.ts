/**
 * Safely converts a value to a number.
 * @param value The value to be converted.
 * @param fallback The value to be returned if the conversion fails. (optional)
 * @returns The value converted to a number, or the specified fallback value if the conversion fails.
 */
export const safeNumber = (value: unknown, fallback: number | undefined = undefined): number | undefined => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
        return fallback;
    }
    
    return parsedValue;
};
