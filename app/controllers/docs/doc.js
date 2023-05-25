import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocController extends Controller {
    queryParams = ["revision","section"];

    
    @action
    selectRevision(revision) {
        this.target.currentState.router.transitionTo({
            queryParams: { revision: revision }
        })

        this.section = this.section || revision.sections[0];
    }

    @action
    selectSection(section) {
        this.target.currentState.router.transitionTo({
            queryParams: { 
                revision: this.revision,
                section: section 
            }
        });
    }
    

}
