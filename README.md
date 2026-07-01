# ALETWEBSITE

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/alet-website/browser/` directory. By default, the production build optimizes your application for performance and speed.

## Deployment

This project is configured for static deployment. Build artifacts are output to `dist/alet-website/browser/`.

### Deploying to aletcloud

1. Push this repository to GitHub/GitLab
2. In aletcloud, create a new project and connect the repository
3. Set build command: `npm run build`
4. Set publish/output folder: `dist/alet-website/browser`
5. Do NOT enable Docker-based deployment

### Deploying to other static hosts

For Vercel, Netlify, or similar platforms, configure the build settings to match the commands above.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Security Notes

- Environment files (`environment.ts`, `environment.prod.ts`) are gitignored. Copy `environment.example.ts` to create them.
- Contact form uses EmailJS; configure credentials in environment files.
- Service worker is enabled only in production builds.
