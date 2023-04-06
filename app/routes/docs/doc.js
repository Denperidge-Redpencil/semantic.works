import Route from '@ember/routing/route';

export default class DocsDocRoute extends Route {
    model(params) {
        let repoName = params.name;

        return this.store.query("repo", {
            filter: {
                "title": repoName
            }
        }).then(function(repos) {
            return repos.get("firstObject");
        })
        
        //return `<zero-md src='${repo.contentBaseUrl}README.md'></zero-md>`;
    }
}
