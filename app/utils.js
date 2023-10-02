export { inject as service } from '@ember/service';
import { set } from '@ember/object';

import config from './config/environment';


function parseTitle(title, forOpenGraph=false) {
    if (typeof (title) == "string") {
        title = [title];
    }
    title.push(config.meta.siteName);

    if (!forOpenGraph) {
        return title.join(" | ");
    } else {
        return `${title[0]} by ${config.meta.siteName}`;
    }
}

export function setHeadData(
    context,
    title = [],
    description=config.meta.description,
    siteName=config.meta.siteName,
    locale=config.meta.locale,
    image="favicon.png",
    origin=window.location.origin,
    href=window.location.href.replace(window.location.search, "")
) {
    set(context.headData, "type", "website");
    set(context.headData, "title", parseTitle(title));
    set(context.headData, "ogTitle", parseTitle(title, true));
    set(context.headData, "description", description);
    set(context.headData, "siteName", siteName);
    set(context.headData, "locale", locale);
    set(context.headData, "image", image);
    set(context.headData, "origin", origin);
    set(context.headData, "href", href);
    //set(context.headData, "image", {{rootURL}});

}

/*
    "ember-meta": {
      description: "An open-source technology stack of re-usable, linked-data powered microservices",
      url: "https://semantic.works/",
      imgSrc: "{{rootURL}}/favicon.png",
    },

*/