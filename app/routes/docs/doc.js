import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { inject as service } from '@ember/service'
import {action} from '@ember/object';
import { setHeadData } from '../../utils';

export default class DocsDocRoute extends Route {
    @service router;
    @service headData;

    repo;

    async model(params) {
        let repoName = params.name;

        let repo = (await this.store.query("repo", {
            filter: {
                ":exact:title": repoName
            },
            include: "revisions"
        })).get("firstObject");

        this.repo = repo;

        return repo;
    }

    afterModel() {
        setHeadData(
            this, 
            [this.repo.title, "docs"],
            this.repo.description)
    }


    async sendRevisionToController(controller, model, transition) {
        let revisionParam = transition.to.queryParams.revision;
        let sectionParam = transition.to.queryParams.section;
        
        let revisions = await model.revisions;
        let revisionObject = revisions.find((revision) => revision.repoTag == revisionParam);

        if (revisionObject == null) {
            revisionObject = revisions.find((revision) => revision.repoTag == this.repo.defaultBranch) || revisions.get("firstObject");   
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
