# Promo 2018 - first cohort

Websites and final projects created by Codi 2018

### Additional websites not listed in this repo:

*Group Projects*

- [Codi Talents](http://coditalent.tk)
- [Razor](http://172.104.155.254:3000)
- [Minila]()
- [Mini Studio](mini-studio.ml)

*Personal Projects*

- [ScoreX](http://172.104.155.254:3090)

## INSTALL

Due to the large repeated amount of modules, [pnpm](https://pnpm.js.org) is used in lieu of npm. Install it first

```sh
$ npm install --global pnpm
```

then

Pull each git submodule
```sh
$ pnpm git:init
```


run the local included `install` script:

```sh
$ pnpm install
```


This will:

- download every project from git
- enter each directory
- run `pnpm install` in each directory

*note*: on Windows 10, you need to install a specific Meteor version. Use `meteor update --release 1.6.1.2-rc.0`. You will also need `node-gyp`, which you can setup in one command from an admin shell `npm install --global --production windows-build-tools`. IT *seems* that to do that, you need to turn off Windows Defender.

## RUN

Check all the required dependencies are available

```sh
$ pnpm run requirements
```

Install whatever is missing, then

Build the projects:

```sh
$ pnpm run build:all
```

Use the included `start` script:

```sh
$ pnpm run <NAME>
```

Where `<NAME>` is the name of a student project (directory), e.g, `npm run amr_gharz`

or

```sh
$ pnpm start
```

to run all projects

## OTHER USEFUL SCRIPTS

run `pnpm install` in each subdirectory
```sh
$ pnpm install 
```

Update each submodule to its latest version
```sh
$ pnpm run git:update
```

Install a specific project
```sh
$ pnpm run install:<NAME>
```

Build a specific project
```sh
$ pnpm run build:<NAME>
```

## LICENSE

MIT
