# Promo 2018 - first cohort

Websites and final projects created by Codi 2018

### Additional websites not listed in this repo:

- [Codi Talents](//coditalent.tk)

## INSTALL

run the local included `install` script:

```sh
$ npm git:init
```

then

```sh
$ npm install
```

This will:

- download every project from git
- enter each directory
- run `npm install` in each directory

## RUN

Check all the required dependencies are available

```sh
$ npm run requirements
```

Install whatever is missing, then

Use the included `start` script:

```sh
$ npm run <NAME>
```

Where `<NAME>` is the name of a student project (directory), e.g, `npm run amr_gharz`

or

```sh
$ npm start
```

to run all projects

## OTHER USEFUL SCRIPTS

run `npm install` in each subdirectory
```sh
$ npm install 
```

Update each submodule to its latest version
```sh
$ npm run git:update
```

Install a specific project
```sh
$ npm run install:<NAME>
```

Build all projects
```sh
$ npm run build:all
```

Build a specific project
```sh
$ npm run build:<NAME>
```

## LICENSE

MIT