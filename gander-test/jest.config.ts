import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
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
    moduleDirectories: ['node_modules', '<rootDir>/', 'pages', 'services'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
export default jestConfig