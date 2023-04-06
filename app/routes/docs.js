import Route from '@ember/routing/route';

export default class DocsRoute extends Route {
    model() {
        this.store.findAll("repo").then(function (repos) {
            console.log(repos)
        })
    }
}
