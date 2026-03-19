const {
  validatePhoneNumber,
  isValidMMPhoneNumber,
  getTelecomName,
  getPhoneNetworkType,
  validateMultiple,
  OPERATORS,
} = require("mm-tel-validator");

console.log("=== MM Tel Validator Test (JavaScript) ===\n");

// Test 1: Validate individual phone numbers
console.log("1. Individual Phone Number Validation:");
const testNumbers = [
  "09977889900", // Ooredoo
  "0977889900",  // Telenor
  "09682345677",  // MyTel
  "0931234567",  // MEC
  "092500123",   // MPT
  "+959977889900", // International format
  "959977889900",  // Without +
  "invalid",     // Invalid
  // Myanmar decimal numbers
  "+၉၅၉၂၅၀၆၀၁၅၅၂", // Myanmar digits with +
  "၀၉၂၅၀၆၀၁၅၅၂",   // Myanmar digits without +
];

testNumbers.forEach((num) => {
  const result = validatePhoneNumber(num);
  console.log(`\n  Input: ${num}`);
  console.log(`  Valid: ${result.isValid}`);
  if (result.isValid) {
    console.log(`  Operator: ${result.operator} ${result.operatorIcon}`);
    console.log(`  Network: ${result.networkType}`);
    console.log(`  Color: ${result.operatorColor}`);
  }
});

// Test 2: Quick validation
console.log("\n\n2. Quick Validation (isValidMMPhoneNumber):");
console.log(`  09977889900: ${isValidMMPhoneNumber("09977889900")}`);
console.log(`  0977889900: ${isValidMMPhoneNumber("0977889900")}`);
console.log(`  invalid: ${isValidMMPhoneNumber("invalid")}`);

// Test 3: Get operator name
console.log("\n\n3. Get Operator Name:");
console.log(`  09977889900: ${getTelecomName("09977889900")}`);
console.log(`  0977889900: ${getTelecomName("0977889900")}`);
console.log(`  09682345677: ${getTelecomName("09682345677")}`);

// Test 4: Get network type
console.log("\n\n4. Get Network Type:");
console.log(`  09977889900: ${getPhoneNetworkType("09977889900")}`);
console.log(`  0977889900: ${getPhoneNetworkType("0977889900")}`);

// Test 5: Batch validation
console.log("\n\n5. Batch Validation:");
const batchResult = validateMultiple([
  "09977889900",
  "0977889900",
  "09682345677",
  "invalid",
]);
console.log(`  Total: ${batchResult.total}`);
console.log(`  Valid: ${batchResult.valid}`);
console.log(`  Invalid: ${batchResult.invalid}`);

// Test 6: Operators config
console.log("\n\n6. Available Operators:");
console.log(OPERATORS);

console.log("\n=== Test Complete ===");
