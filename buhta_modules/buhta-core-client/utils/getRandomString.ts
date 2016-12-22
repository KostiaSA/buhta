export function getRandomString(length: number = 20): string {
    // двойная хрень нужна, потому что Safari и iOS для Math.random().toString(36) выдают 10 символов а не 22
    return (Math.random().toString(36).slice(2, 22)+Math.random().toString(36).slice(2, 22)).slice(2, length + 2);
}