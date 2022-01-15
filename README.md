# NetworkSpeed

This project is to find out most suitable network station for a device at a given point (x, y).

## Built with
* Angular 13
* Typescript 4.5

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Contribution

The branch `master` is renamed to `main`.  
Don't push code directly into `main` or `develop` branches.

### Git Workflow Init

To initialize the git workflow, use the following command  
`git flow init`

### Branch naming conventions

create branches under groups  
like `group/task_name`

Groups:

- feature/ - Feature which are to be added
- bugfix/ - Bug fixes
- hotfix/ - Hotfix branches
- release/ - Create release to merge with main branch
- junk/ - Throwaway branch created to experiment

eg: feature/addNetworkStation

### Create new feature branch

To create new feature branch, use the following command  
`git flow feature start feature_branch_name`  
To merge create PR for feature branch to merge it into `develop` branch

### Create new bugfix branch

To create new bugfix branch, use the following command  
`git flow bugfix start bugfix_branch_name`  
To merge create PR for bugfix branch to merge it into `develop` branch

### Create new release branch

To create new Release branch, use the following command  
`git flow release start 0.1.0`  
To merge create PR for release branch to merge it into `main` branch

### Create new Hotfix branch

To create new Hotfix branch, use the following command  
`git flow hotfix start hotfix_branch_name`  
To merge create PR for Hotfix branch to merge it into both `develop` and `main` branch

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
