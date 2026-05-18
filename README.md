# Solana Vault

A simple Solana smart contract that lets you create a vault, deposit SOL, and withdraw it later. Built with Anchor.

---

## What It Does

- Create a personal vault
- Deposit SOL into your vault
- Withdraw SOL from your vault
- Close your vault and get your money back

---

## Project Structure

```
turbine-anchor-vaults/
├── programs/anchor-vault/        Main smart contract code
│   ├── src/lib.rs                All vault logic (deposit, withdraw, etc.)
│   ├── Cargo.toml                Rust dependencies
│   └── Xargo.toml                Build configuration
├── migrations/deploy.ts          Deployment script
├── tests/anchor-vault.ts         Tests for all operations
├── Anchor.toml                   Workspace settings
├── Cargo.toml                    Project dependencies
├── package.json                  Node.js packages
└── README.md                     This file
```

**Key folders explained:**
- `programs/` – Your smart contract lives here (Rust code)
- `migrations/` – Handles program deployment
- `tests/` – Automated tests using TypeScript

---

## Prerequisites

- Rust – [Install here](https://www.rust-lang.org/tools/install)
- Solana CLI – [Install here](https://docs.solana.com/cli/install-solana-cli-tools)
- Anchor – [Install here](https://www.anchor-lang.com/docs/installation)
- Node.js 16+ – [Install here](https://nodejs.org/)

---

1. Install dependencies:
```bash
npm install
```

2. Build the program:
```bash
anchor build
```

3. Run tests:
```bash
anchor test
```

---

## Testing

Run tests:
```bash
anchor test
```

This starts a local validator, deploys your program, and runs all tests.

---

## Deploy

### Prepare for deployment

First, make sure your cluster is set correctly in `Anchor.toml`:

```toml
[provider]
cluster = "localnet"  # or "devnet" / "mainnet-beta"
```

### Deploy to localnet (for testing)

```bash
# Terminal 1: Start a local validator
solana-test-validator

# Terminal 2: Deploy your program
anchor deploy
```

After deployment, you'll see your program ID in the output.

### Deploy to devnet (for development)

```bash
# Update Anchor.toml to use devnet
anchor deploy --provider.cluster devnet
```

### Verify deployment

Once deployed, check if your program is on-chain:

```bash
solana program show <YOUR_PROGRAM_ID> --url devnet
```

Replace `<YOUR_PROGRAM_ID>` with the actual ID from your deployment output.

---

## Resources

- [Anchor Documentation](https://www.anchor-lang.com/)
- [Solana Documentation](https://docs.solana.com/)
- [Solana Cookbook](https://solanacookbook.com/)

---

**Built with Anchor on Solana**