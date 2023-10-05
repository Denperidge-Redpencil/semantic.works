import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsController extends Controller {
    runAgainstEveryCategory(callback) {
        let categories = document.querySelectorAll(".category > ul");
        for (let i=0; i < categories.length; i++) {
            callback(categories[i]);
        }
    }

    @action
    displayCategory(selectedCategoryName) {
        this.runAgainstEveryCategory((category) => {
            if (category.id != selectedCategoryName) {
                category.style.display = "none";
            } else {
                category.style.display = category.style.display == "initial" ? "none" : "initial";
            } 
        });

    }
}
