A test project to identify errors when passing tests using vitest. 
You can check the ForTest component and run tests. Uncomment useRouter() and run tests again, an error will be "TypeError: $setup.translate is not a function".
"Translate" is a fully functional function that does not matter when passing the test. The problem is that I don't have a Router configured and a mockup for it. Unfortunately, vitest gives a false error that I spent a lot of time on it. 
### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Run Tests

```sh
npm run test
```
