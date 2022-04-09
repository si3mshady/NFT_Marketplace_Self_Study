import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ethers } from "ethers";

import Web3modal from 'web3modal'
import HealthMarket from '../artifacts/contracts/Market.sol/MentalHealthMarket.json'
import ApptToken from '../artifacts/contracts/NFT.sol/ElDigitalAsset.json'

import {nftTokenSmartContractAddress,nftMarketSmartContractAddress } from '../utility/config'

 import {data} from './StarterData.js'




 export const ChainContext = React.createContext();

 




        export const ChainProvider = ({children}) => { 

            const buyNft = async (tokenId, fee) => {

                console.log(tokenId, fee )
                const web3modal = new Web3modal()
                const connection = await web3modal.connect()
                const provider =  await new ethers.providers.Web3Provider(connection)
                const signer = provider.getSigner()
                const marketContract = new ethers.Contract(nftMarketSmartContractAddress, HealthMarket.abi, signer)
                var fee = await ethers.utils.parseUnits(fee, 'ether')
                const tx = await marketContract.createMarketSale(nftTokenSmartContractAddress,tokenId, {value: fee}) 
                await tx.wait()
                // implement a use effect here 
                loadNfts() 

                // return (

                //     <div className='main_container' style={{display: 'flex'}}>

                //                 <div className='main_container level1'  style={{display: 'flex'}}>


                //                             <div className='main_container level2'>

                //                                     {data.map((nft, i) => {
                //                                         console.log(nft)
                //                                     }) }

                //                             </div>                                                        
                //                 </div>

                //     </div>
                // )
            }
    const connectWallet = async () => { 

        if (window.ethereum) {
            // await window.ethereum.request({method: 'eth_accounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            setConnected(true)
             
        }

    }
                


            const loadNfts = async () => {
                console.log('Loading Nfts....')

                await window.ethereum.request({method: 'eth_accounts'});

                // const provider = new ethers.providers.Web3Provider(window.ethereum)
                // https://rpc-mumbai.matic.today"
                const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today")


                const tokenContract = new ethers.Contract(nftTokenSmartContractAddress, ApptToken.abi, provider)
                const marketContract = new ethers.Contract(nftMarketSmartContractAddress, HealthMarket.abi, provider)
                const results = await marketContract.getListedAppointments()

                console.log('All avaiable appts',results)
                
                try { let appts = await Promise.all(results.map(async (i,index) => {
            
                    let tokenURI = await tokenContract.tokenURI(i.nftTokenId) // the url is provided when provide the token id 
                    const metadata = await axios.get(tokenURI)
                    const fee = await ethers.utils.formatUnits(i.fee.toString(), 'ether')
                    const data = await axios.get(tokenURI)
                    console.log(data)
                    
                    
            
                    let items = {
            
                      apptId: i.apptId.toString(),
                      epochTime: i.epochTime.toString(),
                      appointmentType: i.appointmentType.toString(),
                      fee: fee,
                      imageURI: imageURI,
                      nftTokenId: i.nftTokenId,
                      url: data.data.nftUri,
                      patientWallet: i.patientWallet,
                      providerWallet: i.providerWallet,
                      tokenURI,
                     
                      
                    }
                    return items
                    
                }
            
                ))
                console.log(appts)
                setTokens(appts)


                setLoadingState(!loadingState)
                return appts
         

            }  catch(e) {

                    console.log(e)
                }
               
            
            }

            const getConnectedMetaMaskAcc = async () => {

                const web3Modal = new Web3modal();


                let provider = await web3Modal.connect();
                const handler = new ethers.providers.Web3Provider(provider);
                const accounts = await handler.listAccounts();
                const connected_account = accounts[0]
                return connected_account


            }

            const loadMyScheduledNfts = async () => {
                console.log('Loading My Nfts....')

                await window.ethereum.request({method: 'eth_accounts'});

                // const provider = new ethers.providers.Web3Provider(window.ethereum)
                // https://rpc-mumbai.matic.today"
                let provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today")
                const tokenContract = new ethers.Contract(nftTokenSmartContractAddress, ApptToken.abi, provider)
                const marketContract = new ethers.Contract(nftMarketSmartContractAddress, HealthMarket.abi, provider)
                const results = await marketContract.getAllAppts()

                console.log('ALL scheduled appts', results)

                console.log(results)
                
                try { let appts = await Promise.all(results.map(async (i,index) => {
            
                    let tokenURI = await tokenContract.tokenURI(i.nftTokenId) // the url is provided when provide the token id 
                    const metadata = await axios.get(tokenURI)
                    const fee = await ethers.utils.formatUnits(i.fee.toString(), 'ether')
                    const data = await axios.get(tokenURI)
                    console.log(data)
                    
                    
            
                    let items = {
            
                        apptId: i.apptId.toString(),
                        epochTime: i.epochTime.toString(),
                        appointmentType: i.appointmentType.toString(),
                        fee: fee,
                        imageURI: imageURI,
                        nftTokenId: i.nftTokenId,
                        url: data.data.nftUri,
                        patientWallet: i.patientWallet,
                        providerWallet: i.providerWallet,
                        tokenURI,
                       
                     
                      
                    }
                    return items
                    
                }
            
                ))
                console.log('Appts that have been scheduled',appts)
                

                let connected_acc = await getConnectedMetaMaskAcc()
                console.log('MM wallet',  connected_acc.toString())

            
                const result = await appts.filter(obj => obj.patientWallet === connected_acc )
                console.log('My filtered appts', result)
                setMyAppts(result)


                setLoadingState(!loadingState)
         

            }  catch(e) {

                    console.log(e)
                }
               
            
            }
    
        const [tokens, setTokens] = useState([])
        const [myAppts, setMyAppts] = useState([])
        const [loadingState, setLoadingState] = useState(false)
        const [starterData, setData] = useState([])
        const [imageURI, setImageURI] = useState('')
        const [metaMaskAccounts, setMetaMaskAccounts] = useState('')
        const [connected, setConnected] = React.useState(false)
    

        
    
        useEffect(() => {
            connectWallet()
            setData(data)
            loadNfts()
            loadMyScheduledNfts()
           
    
        },[])
       
    
        return (
            <ChainContext.Provider value={{starterData, loadMyScheduledNfts, tokens, setTokens, 
            loadingState, setLoadingState,myAppts, connected, loadNfts,buyNft}}>
                {children}
            </ChainContext.Provider>
        )

}
        