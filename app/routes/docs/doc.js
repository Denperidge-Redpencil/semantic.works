import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { inject as service } from '@ember/service'

export default class DocsDocRoute extends Route {
    @service router;

    model(params) {
        let repoName = params.name;

        return this.store.query("repo", {
            filter: {
                "title": repoName
            },
            include: "revisions"
        }).then(function(repos) {
            return repos.get("firstObject");            
        })
    }


    async sendRevisionToController(controller, model, transition) {
        let revisionParam = transition.to.queryParams.revision;
        let revisions = await model.revisions;
        let revisionObject = revisions.find((revision) => revision.repoTag == revisionParam);

        if (revisionObject == null) {
            revisionObject = revisions.get("firstObject");
        }

        controller.revision = revisionObject;
        controller.section = revisionObject.sections[0];
    }

    async setupController(controller, model, transition) {
        super.setupController(controller, model, transition)
        this.sendRevisionToController(controller, model, transition);
    }
}
