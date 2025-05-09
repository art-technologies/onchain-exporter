import Ajv, { ValidateFunction } from 'ajv';

/**
 * Creates a validator function from a given JSON schema.
 */
export function createDependencyValidator(schemaJson: any): ValidateFunction {
  // We'll compile your schema with Ajv from an in-memory string.
  const ajv = new Ajv({ strictTuples: false });
  return ajv.compile(schemaJson);
}

/**
 * Validates JSON against a provided Ajv validator function.
 */
export function parseAndValidateJson(
  jsonString: string,
  validate: ValidateFunction
) {
  let data: unknown;
  try {
    data = JSON.parse(jsonString);
  } catch (error) {
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
