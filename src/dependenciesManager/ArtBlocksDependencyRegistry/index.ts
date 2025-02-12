import { DependencyRegistryV0__factory } from "../../../generated/contracts";
import { ethers } from "ethers";

export async function getCDNLinkForDependency(
    dependencyName: string,
    provider: ethers.providers.JsonRpcProvider
) {
    const dependencyRegistryContract = process.env.DEPENDENCY_RESOLVE_TYPE__ARTBLOCKS__REGISTRY_CONTRACT
    if (typeof dependencyRegistryContract === "undefined") {
        throw "dependencyRegistryContract should be defined!"
    }

    const dependencyRegistry = DependencyRegistryV0__factory.connect(
        dependencyRegistryContract,
        provider
    );
    const result = await dependencyRegistry.getDependencyDetailsFromString(dependencyName);
    if (result.availableOnChain) {
        throw "Implementation needed for on-chain files!"
    }

    console.log(`Warning! File ${dependencyName} is not available on-chain, using CDN version instead...`)
    return await (await fetch(result.preferredCDN)).text()
}
