export class UserError extends Error{
    constructor(code, message){
        super(message);
        this.code = code;
        this.name = 'UserError';
    }
} 

export const messages = {
    PostCanNotBeNul: 'Post não pode ser nulo'
}

export const throwUserError = (key) => {
    const message = messages[key];
    
    if(message !== undefined)
        throw new UserError(key, message);
    
    throw new Error(key)
}