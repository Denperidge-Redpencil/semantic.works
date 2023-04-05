import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DocsRoute extends Route {
    @service store;

    model() {
        return this.store.findAll("repos");
        /*
        .then(function(repos) {
            console.log(repos[10].get("title"))
        });
        */
        //.then((data) => {console.log(data)});
    }

}
