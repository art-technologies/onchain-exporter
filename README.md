# Verse OnChain exporter

## Introduction

This tool allows to export Verse generative project files and metadata from Ethereum blockchain to your computer. Project files are downloaded to directory called `project`.

## Installation

1. Clone github repository
2. Run `yarn` to wdownload dependencies

## Usage

### Export files by contract address and token Id

```sh
yarn start --contract 0xbeed938770b07adf60ddacc551763ac76e0e5566 --token 115854877
```

### Export files by OpenSea link

```sh
yarn start --opensea https://opensea.io/assets/ethereum/0xbeed938770b07adf60ddacc551763ac76e0e5566/115854877
```

Example response. All data you see below is obtained from Ethereum blockchain.

```
╔═════════════════════════════════════════════════════════════════════════════════════╗
║                                       Project                                       ║
╟──────────────────────┬──────────────────────────────────────────────────────────────╢
║ Artist               │ Jacek Markusiewicz                                           ║
╟──────────────────────┼──────────────────────────────────────────────────────────────╢
║ Collection           │ Barbarians                                                   ║
╟──────────────────────┼──────────────────────────────────────────────────────────────╢
║ License              │ CC BY-NC 4.0 [see HTML header for 3d party licenses]         ║
╟──────────────────────┼──────────────────────────────────────────────────────────────╢
║ Description          │ The concept of barbarism always refers to “the other”, accen ║
║                      │ tuating the dichotomy between us and them, right and wrong,  ║
║                      │ form and matter, space and time, human and nature. Yet here, ║
║                      │ in this landscape of contradictions, these divisions are not ║
║                      │ so clear-cut after all.                                      ║
╚══════════════════════╧══════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════════════════╗
║                                         NFT                                         ║
╟──────────────────────┬──────────────────────────────────────────────────────────────╢
║ Token ID             │ 115854877                                                    ║
╟──────────────────────┼──────────────────────────────────────────────────────────────╢
║ Title                │ Barbarians #10                                               ║
╟──────────────────────┼──────────────────────────────────────────────────────────────╢
║ Hash                 │ 0xfcb880f61ed740f4f9c2fdb325126815fee0b105a4792d34ddd8af6f76 ║
║                      │ 0178f2                                                       ║
╚══════════════════════╧══════════════════════════════════════════════════════════════╝

Project saved at ./project/index.html
```

## Help

Use `yarn start --help` for more details.

Contact us at support[@]verse.works.
