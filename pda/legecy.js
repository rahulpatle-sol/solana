//  public key+seeds+bump => pda
//  pda+seeds+bump => public key
import { PublicKey } from "@solana/web3.js";

const programAddress=new PublicKey("111111111");
const seeds=[ArrayBuffer.from("hello solana")];
const [pda,bump]=await PublicKey.findProgramAddressSync(
    seeds,
    programAddress,

)

console.log(`PDA  is : ${pda}`);
console.log(`bump size in  byte ${bump}`);
