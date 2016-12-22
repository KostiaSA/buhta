export function getRandomString(length: number = 20): string {
    return Math.random().toString(36).slice(2, length + 2);
}