export { inject as service } from '@ember/service';
import { set } from '@ember/object';

import config from './config/environment';


function parseTitle(title) {
    if (typeof (title) == "string") {
        title = [title];
    }
    title.push(config.siteName);
    return title.join(" | ");
}

export function setHeadData(
    context,
    title = [],
    description=config.meta.description,
    siteName=config.meta.siteName,
    locale=config.meta.locale,
    image="favicon.png",
) {
    set(context.headData, "title", parseTitle(title));
    set(context.headData, "description", description);
    set(context.headData, "siteName", siteName);
    set(context.headData, "locale", locale);
    set(context.headData, "image", image);
    //set(context.headData, "image", {{rootURL}});

}

/*
    "ember-meta": {
      description: "An open-source technology stack of re-usable, linked-data powered microservices",
      url: "https://semantic.works/",
      imgSrc: "{{rootURL}}/favicon.png",
    },

*/