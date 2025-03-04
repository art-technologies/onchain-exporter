import { ValidateFunction } from 'ajv';
/**
 * Creates a validator function from a given JSON schema.
 */
export declare function createDependencyValidator(schemaJson: any): ValidateFunction;
/**
 * Validates JSON against a provided Ajv validator function.
 */
export declare function parseAndValidateJson(jsonString: string, validate: ValidateFunction): unknown;
