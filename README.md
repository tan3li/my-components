# Severa UI Components

Severa UI component library with Storybook.

## Development

Start development server.

```
npm run storybook
```

When build is finished Storybook should open on your browser, and you can start coding.

### Adding new icons

1. Make sure icons are properly defined:
    - `height="24"`
    - `width="24"`
    - `viewBox="0 0 24 24"`
    - no specific colors in `fill` or `stroke`
2. Rename icon files to lowercase `MyIcon.svg` → `myicon.svg`.
3. Add icon files to `src/icons` folder.
4. Export icon files in `src/icons/index.ts`.
5. (Optional) Add metadata for icons:
    - Open metadata file `src/docs/doccomponents/icongallery/iconmetadata.ts`
    - Add metadata object per icon to `iconMetadata` object

## Translations

Translation files for English and Finnish languages for Storybook can be found under public/locales.
When adding new translations, follow the same structure from the Severa-UI project to ensure compatibility.

## Testing

Storybook tests can be run as follows. You need to have Storybook running in the background.

```
npm run test-storybook
```

If you get error message about Playwright, you need to install the browsers for it.

```
npx playwright install --with-deps
```

There are also unit tests which can be run with default test script.

```
npm run test
```

## Building

Build Storybook as a static web application.

```
npm run build-storybook
```

This is useful if you want to verify everything works before deployment. You can use any web server to view the application. If using IIS, make sure to add MIME type .json for the site.

## Deployment

Storybook is deployed to Chromatic. GitHub actions should handle this automatically but can be done manually as follows.

```
npm run chromatic -t <your-project-token>
```

or

```
npx chromatic --project-token=<your-project-token>
```

Project token can be found from project settings in Chromatic.

## Release

Before releasing bump up the version number via "Bump version" GitHub action.

If need to bump version manually, you can run:

```
npm version [<newversion> | major | minor | patch]
```

### Semantic versioning:

1. MAJOR version when you make incompatible API changes
2. MINOR version when you add functionality in a backward compatible manner
3. PATCH version when you make backward compatible bug fixes

Create new release in GitHub using the created version tag.
