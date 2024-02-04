const remoteConnection = new RTCPeerConnection();

remoteConnection.onicecandidate = (e) => {
  console.log('New Ice Candidate: ');
  console.log(JSON.stringify(remoteConnection.localDescription));
};

remoteConnection.ondatachannel = (e) => {
  //channel is saved in the RemoteConnection Object
  remoteConnection.receiveChannel = e.channel;
  remoteConnection.receiveChannel.onmessage = (e) =>
    console.log('From A: ' + e.data);
  remoteConnection.receiveChannel.onopen = (e) => console.log('OPEN!!!');
  remoteConnection.receiveChannel.onclose = (e) => console.log('CLOSE');
};

remoteConnection.setRemoteDescription(offer).then((a) => console.log('Done'));

await remoteConnection
  .createAnswer()
  .then((ans) => remoteConnection.setLocalDescription(ans))
  .then((ans) =>
    console.log(JSON.stringify(remoteConnection.localDescription))
  );
