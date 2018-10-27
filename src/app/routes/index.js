import postController from '../controllers/post.controller';

export default (express, app) => {

 const routeApi = express.Router();
 app.use('/api', routeApi);

 routeApi.get('/posts', postController.list);
 
}