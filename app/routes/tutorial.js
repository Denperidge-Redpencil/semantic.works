import Route from '@ember/routing/route';

/* Semantic.works/tutorial ; include the tutorials from mu-project */

export default class TutorialRoute extends Route {
    model() {
        return this.store.query("repo", {
            filter: {
                "title": "mu-project"
            },
            include: "revisions"
        }).then(function(repos) {
            let repo = repos.get("firstObject");        
            return repo.revisions.then((revisions) => {
                return revisions.get("firstObject").tutorials;
            });
        });
    }
}
