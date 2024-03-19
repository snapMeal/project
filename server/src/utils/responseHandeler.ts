export const APIResponse = (
    message: string,
    status: number,
    data: any,
    success: boolean = true
) => {
    return { message, success, status, data };
};
