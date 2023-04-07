import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';

export default class DocsDocRoute extends Route {
    model(params) {
        console.log("ee")
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

    async setupController(controller, model, transition) {
        super.setupController(controller, model, transition)

        let revisionParam = transition.to.queryParams.revision;
        let revisions = await model.revisions;
        let revisionObject = revisions.find((revision) => revision.repoTag == revisionParam); //controller.revision);

        controller.revision = revisionObject;
    }
}
