import Route from '@ember/routing/route';
import { service, setHeadData } from '../utils'

export default class IndexRoute extends Route {
    @service headData;

    afterModel() {
        setHeadData(this, "Home");
    }
}
