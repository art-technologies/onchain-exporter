import fs from 'fs';
import Ajv from 'ajv';

const schemaFilePath = "./src/dependenciesManager/dependencies.schema.json"

export function parseAndValidateJson(jsonString: string) {
    let data;

    try {
        data = JSON.parse(jsonString);
    } catch (error) {
        throw new Error('Invalid JSON string');
    }

    const schemaFile = fs.readFileSync(schemaFilePath, 'utf8');
    const schema = JSON.parse(schemaFile);

    const ajv = new Ajv({ strictTuples: false });
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        // Collect validation errors into a single message
        const errors = validate.errors?.map(
            (err) => `${err.instancePath} ${err.message}`
        ).join(', ');
        throw new Error(`JSON does not match the schema: ${errors}`);
    }

    return data;
}
