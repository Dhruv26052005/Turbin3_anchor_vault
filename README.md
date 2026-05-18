# Solana Vault

Simple Solana program built with Anchor.

## What It Does

- Create a vault
- Deposit SOL
- Withdraw SOL
- Close the vault

## Workflow

1. Create the vault.
2. Deposit SOL into it.
3. Withdraw SOL when needed.
4. Close the vault when done.

## Project Structure

- `programs/anchor-vault/src/lib.rs` - main vault logic
- `tests/anchor-vault.ts` - tests for the vault flow
- `migrations/deploy.ts` - deploy script

## File Structure

```text
Turbin3_anchor_vault/
├── programs/
│   └── anchor-vault/
│       └── src/
│           └── lib.rs
├── tests/
│   └── anchor-vault.ts
├── migrations/
│   └── deploy.ts
├── Anchor.toml
├── Cargo.toml
├── package.json
└── README.md
```

## Setup

```bash
npm install
anchor build
```

## Run Tests

```bash
anchor test
```

## Deploy

Localnet:

```bash
solana-test-validator
anchor deploy
```

Devnet:

```bash
anchor deploy --provider.cluster devnet
```

## In Short

Create vault, deposit SOL, withdraw when needed, and close it at the end.