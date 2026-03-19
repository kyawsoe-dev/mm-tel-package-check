# MM Tel Package Check

Test suite for the [mm-tel-validator](https://www.npmjs.com/package/mm-tel-validator) package, demonstrating usage in both JavaScript and TypeScript.

## Installation

```bash
npm install
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run test:js` | Run tests using JavaScript (test.js) |
| `npm run test:ts` | Run tests using TypeScript (test.ts) |
| `npm run test` | Run both JavaScript and TypeScript tests |

## Usage

### Run JavaScript tests only
```bash
npm run test:js
```

### Run TypeScript tests only
```bash
npm run test:ts
```

### Run all tests
```bash
npm run test
```

## What's Tested

The tests demonstrate the following features of `mm-tel-validator`:

1. **Individual Phone Number Validation** - `validatePhoneNumber()`
2. **Quick Validation** - `isValidMMPhoneNumber()`
3. **Get Operator Name** - `getTelecomName()`
4. **Get Network Type** - `getPhoneNetworkType()`
5. **Batch Validation** - `validateMultiple()`
6. **Operators Config** - `OPERATORS`

## Supported Myanmar Phone Operators

- Ooredoo
- Telenor (now ATOM)
- MPT
- MEC
- MyTel

## License

ISC
