export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionToTreatASEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },

moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
},
};