A test project to identify errors when passing tests using vitest. 
You can check the ForTest component and run tests. Uncomment useRouter() and run tests again, an error will be "TypeError: $setup.translate is not a function".
The main problem is that "translate is not a function" is not a problem :)
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
