export default {
    ok: res => data => {
        res.status(200).send(data);
    },
    userError: res => message => {
        res.status(302).send(message);
    }
}