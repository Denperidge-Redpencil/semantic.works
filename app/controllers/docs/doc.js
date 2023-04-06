import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocController extends Controller {
    queryParams = ["revision"]
    @tracked revision;


    init() {
        console.log(this.model)
        super.init(...arguments)
        console.log(this.model)

        if (this.revision == null) {
            console.log("No revision selected")
            console.log(this)
        }

        try {
            console.log(this.revision)
        } catch {
            console.log("No revision selected")
            console.log(this)
        }
 
    }

    @action
    selectRevision(revision) {
-        this.target.currentState.router.transitionTo({
            queryParams: {revision: revision}
        })
    }

}
