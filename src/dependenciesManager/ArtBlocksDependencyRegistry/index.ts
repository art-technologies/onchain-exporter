import { DependencyRegistryV0__factory } from "../../../generated/contracts";
import { ethers } from "ethers";

export async function getCDNLinkForDependency(
    dependencyName: string,
    provider: ethers.providers.JsonRpcProvider,
    dependencyRegistryContract: string
) {
    if (!dependencyRegistryContract) {
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
