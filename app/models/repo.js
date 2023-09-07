import Model, {attr, hasMany} from '@ember-data/model';

export default class RepoModel extends Model {
    @attr title;
    @attr description;
    @attr category;
    @attr defaultBranch;
    @attr imageUrl;

    @hasMany("repo-revision") revisions;
}
