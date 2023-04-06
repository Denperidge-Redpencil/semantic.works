import Model, {attr} from '@ember-data/model';

export default class RepoRevisionModel extends Model {
    @attr imageTag;
    @attr imageUrl;
    @attr repoTag;
    @attr repoUrl;
    @attr readme;

    toString() {
        return this.repoTag;
    }
}
