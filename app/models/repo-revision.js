import Model, {attr} from '@ember-data/model';

const sectionKeys = ["readme", "tutorials", "howToGuides", "explanation", "reference"];

export default class RepoRevisionModel extends Model {
    @attr imageTag;
    @attr imageUrl;
    @attr repoTag;
    @attr repoUrl;
    @attr readme;

    @attr tutorials;
    @attr howToGuides;
    @attr explanation;
    @attr reference;

    get sections() {
        let sections = [];//{};

        for (let i = 0; i < sectionKeys.length; i++) {
            const key = sectionKeys[i];
            const value = this[key];
            if (value != "" && value != "None") {
                //defined[key] = value;
                sections.push(key);
            }
        }
        
        return sections;
    }



    toString() {
        return this.repoTag;
    }
}
