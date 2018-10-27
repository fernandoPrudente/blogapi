import responses from '../responses';
import postService from '../services/post.service'

export default {
    list: (req, res) => {
        return postService
        .getList()
        .then(responses.ok(res));
    },
    create: (req, res) => {
        return postService.save(req.body)
            .then(responses.ok(res));
    }
}