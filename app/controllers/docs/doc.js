import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocController extends Controller {
    @tracked revision = null;
    @tracked readme = null;

    @action
    selectRevision(revision) {
        this.revision = revision;
    }

}
