Open Two Browser Windows
Open Dev tools on both

Paste peerA.js content in first browser dev tools
Copy the SDP offer JSON blob
Go to second browser and Create a const "offer" object and set it to SDP you copied (signled)

Paste peerB.js content in second browser dev tools

Copy answer JSON blob
Go to first browser and Create a const "answer" object and set it to answer you copied

Paste peerA_connect.js content in first browser --->
CONNNECTTIOONNNN!!!!!!!!!!!!!!

use sendChannel.send("hi, u got the messsage") to send data from peerA

use remoteConnection.channel.send("ya i got it") to send data from peerB
