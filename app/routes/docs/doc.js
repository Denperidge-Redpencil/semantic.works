import Route from '@ember/routing/route';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class DocsDocRoute extends Route {

    model(params) {
        let repoName = params.name;
        let revision = this.revision;        

        return this.store.query("repo", {
            filter: {
                "title": repoName
            },
            include: "revisions"
        }).then(function(repos) {
            let repo = repos.get("firstObject");
            
            return { 
                repo: repo,
                revisions: repo.revisions.map((revision) => revision.repoTag)
            };
        })
        
        //return `<zero-md src='${repo.contentBaseUrl}README.md'></zero-md>`;
    }
}
