# Cloud Functions Typescript Template

This repo is to help get building faster with typescript on Google
[Cloud Functions](https://cloud.google.com/functions).

It includes:

- Pre built tests using mocha and chai to get started easily.
- Hosting the function locally on port 8080.
- Cloudbuild yaml file for easy integration to continuous delivery if required.
- Github Actions for testing and branch status checks on PR merges.

Requires Node v20 or higher.

## Usage

### Local hosting

`npm start` will kick up the server and host your code on port 8080.

You can then run something like:

```bash
curl -X POST -H "Content-Type: application/json" \
    -d '{"message": "Hello my friend"}' \
    http://localhost:8080
```

To see how your function would respond once deployed.

### Testing

`npm test` will run all tests in the /tests folder.

## Deployment

You can run `npm run deploy` to deploy the current latest version. You should be authenticated with the gcloud CLI to do this.

You can also run `npm run deploy20` to deploy node version 20 if you prefer.
