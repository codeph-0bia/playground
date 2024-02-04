const localConnection = new RTCPeerConnection();

localConnection.onicecandidate = (e) => {
  console.log('New Ice Candidate:');
  console.log(JSON.stringify(localConnection.localDescription));
};

const sendChannel = localConnection.createDataChannel('sendChannel');

sendChannel.onmessage = (e) => console.log('From B: ' + e.data);
sendChannel.onopen = (e) => console.log('OPEN!!!');
sendChannel.onclose = (e) => console.log('CLOSE!!');

localConnection
  .createOffer()
  .then((offer) => localConnection.setLocalDescription(offer))
  .then((offer) => console.log(offer));
