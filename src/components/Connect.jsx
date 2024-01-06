import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ApiIcon from '@mui/icons-material/Api';
import initializeWeb3 from '../web3/initializeWeb3'; // Import your Web3 initialization function
import { getCourseMethod } from '../web3/contractInteraction'; // Import contract interaction function

const Connect = () => {

  const handleConnectWallet = async () => {
    console.log('Connecting to wallet...'); // debugging log

    try {
      const web3 = initializeWeb3();
      if (!web3) {
        console.error('Web3 not initialized');
        return;
      }

      console.log('Requesting account access...'); // debugging log
      const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });

      if (addresses.length === 0) {
        console.error('No address provided.');
        return;
      }

      console.log('Connected to address:', addresses[0]); // debugging log

      // call contract interaction function, only to test that it works
      const result = await getCourseMethod();
      console.log('getCourseMethod() result:', result); // debugging log

    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
      <ApiIcon sx={{ fontSize: 70, m: 1 }} color="primary" />
      <Typography variant='h3' color="primary" sx={{ fontWeight: 'bold' }}>
        Welcome to EduChain
      </Typography>
      <Typography variant='h4'>
        Please connect your wallet to continue
      </Typography>
      <Button 
        variant='contained' 
        color='primary' 
        sx={{ mt: 4, p: 2, fontSize: '23px' }} 
        onClick={ handleConnectWallet }
      >
        <AddLinkIcon sx={{ fontSize: 40, mr: 1 }} />
        Connect Wallet
      </Button>
    </Paper>
  );
}

export default Connect;
