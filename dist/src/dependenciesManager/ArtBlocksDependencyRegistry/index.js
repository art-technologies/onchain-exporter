"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCDNLinkForDependency = void 0;
const contracts_1 = require("../../../generated/contracts");
async function getCDNLinkForDependency(dependencyName, provider, dependencyRegistryContract) {
    if (!dependencyRegistryContract) {
        throw "dependencyRegistryContract should be defined!";
    }
    const dependencyRegistry = contracts_1.DependencyRegistryV0__factory.connect(dependencyRegistryContract, provider);
    const result = await dependencyRegistry.getDependencyDetailsFromString(dependencyName);
    if (result.availableOnChain) {
        throw "Implementation needed for on-chain files!";
    }
    console.log(`Warning! File ${dependencyName} is not available on-chain, using CDN version instead...`);
    return await (await fetch(result.preferredCDN)).text();
}
exports.getCDNLinkForDependency = getCDNLinkForDependency;
