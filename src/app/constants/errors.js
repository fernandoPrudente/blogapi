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

export const throwUserError = (name) => {
    const message = messages[name];
    
    if(message !== undefined)
        throw new UserError(name, message);
    
    throw new Error(name)
}