import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocController extends Controller {
    queryParams = ["revision"];

    
    @action
    selectRevision(revision) {
-        this.target.currentState.router.transitionTo({
            queryParams: {revision: revision}
        })
    }
    

}
