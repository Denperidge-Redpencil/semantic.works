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
                // Get revision, remove leading # because otherwise it renders for some reason
                return revisions.get("firstObject").tutorials.replace(/^#{1,} /, "");
            });
        });
    }
}
