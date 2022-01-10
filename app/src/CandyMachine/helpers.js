import { web3 } from '@project-serum/anchor';

// CLI Properties Given to us
const candyMachineProgram = new web3.PublicKey(
  'cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ'
);

const candyMachineProgramV2 = new web3.PublicKey(
  'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
  //'Ch3qpQYqr7AvLP6Eph9xxbtneAbzovzuEexAGh48URHS',
);

const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
);

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
);
export {
  candyMachineProgram,
  candyMachineProgramV2,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
};
