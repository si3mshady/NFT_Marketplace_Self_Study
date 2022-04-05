pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Debug is ReentrancyGuard {

        using Counters for Counters.Counter;
        Counters.Counter public _appointmentId;
        

        address payable owner; // owner will collect listing fees for appoitnemtns registered 
        uint256 listingPrice = 0.0001 ether;
       
        constructor() {  owner = payable( msg.sender);  }

        mapping(uint256 => Appointment) private idToAppointment;

        

        struct Appointment 
        
        { 
            address nftContract;
            
            
        }

        function getListingPrice() public view returns (uint256) {
            return listingPrice;
        }

        function createNewListing( ) public payable nonReentrant {
           

            _appointmentId.increment();
            uint256 apptId = _appointmentId.current();

            idToAppointment[apptId] = Appointment(address(msg.sender));

           
        
           
            
        }

       

        function getAllAppts() public view  returns (Appointment[] memory) {
                 uint currentAppointmentListings =  _appointmentId.current();
                
                 uint localIndex = 0;

                 Appointment[] memory appointments = new Appointment[](currentAppointmentListings);

                 for (uint i = 0; i < currentAppointmentListings; i++) {
                     if (true) {

                           
                            Appointment storage currentAppt = idToAppointment[i + 1];
                                appointments[localIndex] = currentAppt;
                                localIndex +=1;

                     }

                   
                       
                 }
                 return appointments;
               


}
}