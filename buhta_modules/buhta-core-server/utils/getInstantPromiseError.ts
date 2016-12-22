
export function getInstantPromiseError<T>(error: any): Promise<T> {
    return new Promise<T>(
        (resolve: (obj: T) => void, reject: (err: string) => void) => {
            reject(error);
        });
}