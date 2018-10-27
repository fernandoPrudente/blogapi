import constants from '../constants';

const {throwUserError, messages} = constants.errors

export default {
    getList: () => {
        return Promise.resolve([
            {
                id: '01',
                title: 'TITULO POST 01'
            }
        ]);
    },
    save: async (model) => {
        if(!model || Object.keys(model).length === 0)
            throwUserError(messages.PostCanNotBeNul)
        
        if(!model.id)
            return Object.assign(model, {
                dateCreated: new Date(),
                id: '001'
            })
        else model;
    }
}
