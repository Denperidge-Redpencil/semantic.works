import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { inject as service } from '@ember/service'
import {action} from '@ember/object';

export default class DocsDocRoute extends Route {
    @service router;

    defaultBranch;

    async model(params) {
        let repoName = params.name;

        let repo = (await this.store.query("repo", {
            filter: {
                ":exact:title": repoName
            },
            include: "revisions"
        })).get("firstObject");

        this.defaultBranch = repo.defaultBranch;

        return repo;
    }



    async sendRevisionToController(controller, model, transition) {
        let revisionParam = transition.to.queryParams.revision;
        let sectionParam = transition.to.queryParams.section;
        
        let revisions = await model.revisions;
        let revisionObject = revisions.find((revision) => revision.repoTag == revisionParam);

        if (revisionObject == null) {
            revisionObject = revisions.find((revision) => revision.repoTag == this.defaultBranch) || revisions.get("firstObject");   
        }

        controller.revision = revisionObject;
        controller.revisionRepoTag = revisionObject.repoTag;
        controller.section = sectionParam || revisionObject.sections[0];
        console.log(sectionParam, revisionObject.sections[0], controller.section)
    }

    async setupController(controller, model, transition) {
        super.setupController(controller, model, transition)
        this.sendRevisionToController(controller, model, transition);
    }
}
