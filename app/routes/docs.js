import Route from '@ember/routing/route';

export default class DocsRoute extends Route {
    async model() {
        let repos = await this.store.findAll("repo");
        let categories = [];
        repos.forEach(repo => {
            let repoCategory = repo.category.substring(repo.category.lastIndexOf("/") + 1);

            let category = categories.find(category => category.name == repoCategory);
            if (category == undefined) {
                categories.push({
                    name: repoCategory,
                    value: [repo]
                })
            } else {
                category.value.push({
                    name: repo.title,
                    link: true,
                    value: repo
                });
            }
        });


        return categories;



        /*
        return this.store.findAll("repo", { include: "repo-revisions"}).map((val) => 
            val.title
        );*/
    }
}
