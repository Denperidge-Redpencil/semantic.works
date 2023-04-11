import Route from '@ember/routing/route';

const CATEGORY_WEIGHTS = {
    core: 0,
    templates: 1,
    microservices: 2,
    "ember-addons": 3,
    tools: 4
};

const CATEGORY_EXCLUSIONS = [
    "archive"
];

export default class DocsRoute extends Route {
    async model() {
        let repos = await this.store.findAll("repo", {reload: true});
        let categories = [];
        repos.forEach(repo => {
            let repoCategory = repo.category.substring(repo.category.lastIndexOf("/") + 1);

            if (CATEGORY_EXCLUSIONS.indexOf(repoCategory) > -1) {
                return
            }

            let category = categories.find(category => category.name == repoCategory);
            if (category == undefined) {
                category = {
                    name: repoCategory,
                    value: []
                }
                categories.push(category);
            }

            category.value.push({
                name: repo.title,
                link: true,
                value: repo
            });
            
        });

        categories.sort(function(a, b) {
            return CATEGORY_WEIGHTS[a.name] > CATEGORY_WEIGHTS[b.name]
        })

        console.log(categories)

        return categories;



        /*
        return this.store.findAll("repo", { include: "repo-revisions"}).map((val) => 
            val.title
        );*/
    }
}
