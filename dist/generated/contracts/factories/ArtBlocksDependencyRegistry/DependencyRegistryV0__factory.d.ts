import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DependencyRegistryV0, DependencyRegistryV0Interface } from "../../ArtBlocksDependencyRegistry/DependencyRegistryV0";
export declare class DependencyRegistryV0__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreRegistryAddress";
            readonly type: "address";
        }];
        readonly name: "CoreRegistryAddressUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "website";
            readonly type: "string";
        }];
        readonly name: "DependencyAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "additionalCDNIndex";
            readonly type: "uint256";
        }];
        readonly name: "DependencyAdditionalCDNRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "additionalCDN";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "additionalCDNIndex";
            readonly type: "uint256";
        }];
        readonly name: "DependencyAdditionalCDNUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "additionalRepositoryIndex";
            readonly type: "uint256";
        }];
        readonly name: "DependencyAdditionalRepositoryRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "additionalRepository";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "additionalRepositoryIndex";
            readonly type: "uint256";
        }];
        readonly name: "DependencyAdditionalRepositoryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }];
        readonly name: "DependencyPreferredCDNUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }];
        readonly name: "DependencyPreferredRepositoryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "DependencyRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "DependencyScriptUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "website";
            readonly type: "string";
        }];
        readonly name: "DependencyWebsiteUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }];
        readonly name: "LicenseTextUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }];
        readonly name: "LicenseTypeAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "ProjectDependencyOverrideAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }];
        readonly name: "ProjectDependencyOverrideRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }];
        readonly name: "SupportedCoreContractAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }];
        readonly name: "SupportedCoreContractOverrideAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }];
        readonly name: "SupportedCoreContractOverrideRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }];
        readonly name: "SupportedCoreContractRemoved";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "dependencyWebsite";
            readonly type: "string";
        }];
        readonly name: "addDependency";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "additionalCDN";
            readonly type: "string";
        }];
        readonly name: "addDependencyAdditionalCDN";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "additionalRepository";
            readonly type: "string";
        }];
        readonly name: "addDependencyAdditionalRepository";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "script";
            readonly type: "string";
        }];
        readonly name: "addDependencyScript";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "scriptPointer";
            readonly type: "address";
        }];
        readonly name: "addDependencyScriptPointer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "text";
            readonly type: "string";
        }];
        readonly name: "addLicenseText";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }];
        readonly name: "addLicenseType";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "addProjectDependencyOverride";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }];
        readonly name: "addSupportedCoreContractOverride";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "contract_";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "adminACLAllowed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "adminACLContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyAdditionalCDN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyAdditionalRepository";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDependencyCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "getDependencyDetails";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "nameAndVersion";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "licenseType";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }, {
            readonly internalType: "uint24";
            readonly name: "additionalCDNCount";
            readonly type: "uint24";
        }, {
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }, {
            readonly internalType: "uint24";
            readonly name: "additionalRepositoryCount";
            readonly type: "uint24";
        }, {
            readonly internalType: "string";
            readonly name: "dependencyWebsite";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "availableOnChain";
            readonly type: "bool";
        }, {
            readonly internalType: "uint24";
            readonly name: "scriptCount";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "dependencyNameAndVersion";
            readonly type: "string";
        }];
        readonly name: "getDependencyDetailsFromString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "nameAndVersion";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "licenseType";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }, {
            readonly internalType: "uint24";
            readonly name: "additionalCDNCount";
            readonly type: "uint24";
        }, {
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }, {
            readonly internalType: "uint24";
            readonly name: "additionalRepositoryCount";
            readonly type: "uint24";
        }, {
            readonly internalType: "string";
            readonly name: "dependencyWebsite";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "availableOnChain";
            readonly type: "bool";
        }, {
            readonly internalType: "uint24";
            readonly name: "scriptCount";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyNameAndVersion";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyNameAndVersionForProject";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDependencyNamesAndVersions";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyScript";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyScriptBytecodeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDependencyScriptBytecodeStorageVersion";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "getDependencyScriptCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getLicenseText";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }];
        readonly name: "getLicenseTextChunkCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getLicenseType";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLicenseTypeCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLicenseTypes";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getSupportedCoreContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSupportedCoreContractCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSupportedCoreContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "adminACLContract_";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "coreContractAddress";
            readonly type: "address";
        }];
        readonly name: "isSupportedCoreContract";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "removeDependency";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "removeDependencyAdditionalCDN";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "removeDependencyAdditionalRepository";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }];
        readonly name: "removeDependencyLastScript";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }];
        readonly name: "removeLicenseLastText";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "projectId";
            readonly type: "uint256";
        }];
        readonly name: "removeProjectDependencyOverride";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }];
        readonly name: "removeSupportedCoreContractOverride";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "input";
            readonly type: "string";
        }];
        readonly name: "stringToBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_coreRegistryAddress";
            readonly type: "address";
        }];
        readonly name: "updateCoreRegistryAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "additionalCDN";
            readonly type: "string";
        }];
        readonly name: "updateDependencyAdditionalCDN";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "additionalRepository";
            readonly type: "string";
        }];
        readonly name: "updateDependencyAdditionalRepository";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "preferredCDN";
            readonly type: "string";
        }];
        readonly name: "updateDependencyPreferredCDN";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "preferredRepository";
            readonly type: "string";
        }];
        readonly name: "updateDependencyPreferredRepository";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "script";
            readonly type: "string";
        }];
        readonly name: "updateDependencyScript";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "scriptPointer";
            readonly type: "address";
        }];
        readonly name: "updateDependencyScriptPointer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dependencyNameAndVersion";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "dependencyWebsite";
            readonly type: "string";
        }];
        readonly name: "updateDependencyWebsite";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "licenseType";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "text";
            readonly type: "string";
        }];
        readonly name: "updateLicenseText";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DependencyRegistryV0Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): DependencyRegistryV0;
}
