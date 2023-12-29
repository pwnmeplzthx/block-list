export default {
    "main": {
        input: "./src/5-shared/api/schema.yaml",
        output: {
            target: "./src/5-shared/api/generated.ts",
            prettier: true,
            override: {
                mutator: {
                    path: "./src/5-shared/api/api-instance.ts",
                    name: "createInstance"
                }
            }
        }
    }
}