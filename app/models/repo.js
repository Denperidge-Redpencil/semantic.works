import Model, {attr} from '@ember-data/model';

export default class RepoModel extends Model {
    @attr title;
    @attr description;
    @attr category;
    @attr imageUrl;
}
