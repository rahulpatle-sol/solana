
use solana_sdk::signature::{Keypair, Signer};
#[tokio::main]
//  tokio  for aysnc process

async fn main(){
    //  this function comnyons 
    let  keypair = Keypair::new();
    println!("Public Key: {}", keypair.public);
    println!("Secret Key: {}", keypair.secret);
}