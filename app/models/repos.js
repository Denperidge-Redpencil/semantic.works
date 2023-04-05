import Model, { attr } from '@ember-data/model';

export default class ReposModel extends Model {
    @attr("string") title;
    @attr("string") description;
    @attr("string") category;
    @attr("string") imageUrl;

    
}
