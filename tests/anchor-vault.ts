import * as anchor from "@coral-xyz/anchor";
import { expect } from "chai";
import { AnchorVault } from "../target/types/anchor_vault";

describe("anchor-vault", () => {
  const program = anchor.workspace.AnchorVault as anchor.Program<AnchorVault>;
  const provider = anchor.AnchorProvider.env();
  const user = provider.wallet.publicKey;

  const vaultState = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("state"), user.toBytes()],
    program.programId
  )[0];

  const vault = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), vaultState.toBytes()],
    program.programId
  )[0];

  it("loads the workspace program", () => {
    expect(program.programId.toBase58()).to.equal("pWBqGdZX6SBeoTbnhrXx6MyrjFn3amzjgpsTCUMnfUm");
  });

  it("derives the vault state PDA", () => {
    expect(vaultState).to.not.equal(undefined);
    expect(vaultState.toBase58()).to.match(/^.{32,}$/);
  });

  it("derives the vault PDA", () => {
    expect(vault).to.not.equal(undefined);
    expect(vault.toBase58()).to.match(/^.{32,}$/);
  });
});
