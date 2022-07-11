module.exports = {
    collectCoverage: true,
    coverageReporters: [
        'cobertura',
        'html',
        'text-summary'
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    jest: {
        automock: false,
        setupFiles: [
            "./setupJest.js"
        ]
    }
}