import { Keypair } from "@solana/web3.js";

const  keypair=Keypair.generate();
console.log(`my  public key  is ${keypair.publicKey}`);
console.log(`privte key  here ${keypair.secretKey}`);

let connection = new Connection("https://api.devnet.solana.com");
