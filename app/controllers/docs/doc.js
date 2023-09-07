import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocController extends Controller {
    queryParams = [
        {revisionRepoTag: "revision"},
        "section"
    ]

    @tracked revision;
    @tracked section;
    
    @action
    selectRevision(revision) {
        this.revisionRepoTag = revision.repoTag;
        this.revision = revision;
        this.section = this.section || revision.sections[0];

        this.target.currentState.router.transitionTo({
            queryParams: { revision: revision }
        })

        //this.section = this.section || revision.sections[0];
    }

    @action
    selectSection(section) {
        this.section = section;


        
        this.target.currentState.router.transitionTo({
            queryParams: { 
                revision: this.revision.repoTag,
                section: section 
            }
        });
    }
    

}
