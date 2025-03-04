"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndValidateJson = exports.createDependencyValidator = void 0;
const ajv_1 = require("ajv");
/**
 * Creates a validator function from a given JSON schema.
 */
function createDependencyValidator(schemaJson) {
    // We'll compile your schema with Ajv from an in-memory string.
    const ajv = new ajv_1.default({ strictTuples: false });
    return ajv.compile(schemaJson);
}
exports.createDependencyValidator = createDependencyValidator;
/**
 * Validates JSON against a provided Ajv validator function.
 */
function parseAndValidateJson(jsonString, validate) {
    let data;
    try {
        data = JSON.parse(jsonString);
    }
    catch (error) {
        throw new Error('Invalid JSON string');
    }
    const valid = validate(data);
    if (!valid) {
        // Collect validation errors into a single message
        const errors = validate.errors
            ?.map((err) => `${err.instancePath} ${err.message}`)
            .join(', ');
        throw new Error(`JSON does not match the schema: ${errors}`);
    }
    return data;
}
exports.parseAndValidateJson = parseAndValidateJson;
