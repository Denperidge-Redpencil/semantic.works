import Route from '@ember/routing/route';

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
                let readme = revisions.get("firstObject").readme;
                let tutorials = new RegExp("Tutorials((.|\n)*)", "gmi").exec(readme)
                return tutorials
            });
        });
    }
}
