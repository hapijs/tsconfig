<a href="https://hapi.dev"><img src="https://raw.githubusercontent.com/hapijs/assets/master/images/family.png" width="180px" align="right" /></a>

# @hapi/tsconfig

#### Shared TypeScript compiler options for hapi modules.

## Usage

Install it next to TypeScript:

```sh
pnpm add -D @hapi/tsconfig typescript
```

Then extend it from the project's `tsconfig.json`:

```json
{
    "extends": "@hapi/tsconfig"
}
```

Only `compilerOptions` are worth sharing this way, `include`, `exclude`, `outDir` and other paths resolve relative to the file declaring them, so they stay in the project's own `tsconfig.json`, along with any option it needs to override:

```json
{
    "extends": "@hapi/tsconfig",
    "compilerOptions": {
        "types": ["node"]
    },
    "include": ["src", "test"]
}
```

The config only type-checks (`noEmit`), builds are left to the project's bundler.
