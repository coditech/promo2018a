# Windows Build Tools

You will need those for node-gyp.

Install ms build:

```sh
npm config set msvs_version 2015
```

And set the python path

```sh
npm config set python %userprofile%\.windows-build-tools\python27\python.exe
```

(or yarn)

Then install `node-gyp` globally

You also need to set the python path in your environment variables:

- Open System Properties (Type it in the start menu, or use the keyboard shortcut Win + Pause )
- Switch to the Advanced tab.
- Click Environment Variables...
- Select PATH in the System variables section.
- Click Edit.
- Add Python's path to the end of the list (the paths are separated by semicolons).