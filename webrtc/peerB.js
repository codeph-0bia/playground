const remoteConnection = new RTCPeerConnection()

remoteConnection.onicecandidate = e => {
  console.log("New Ice Candidate: ")
  console.log(JSON.stringify(remoteConnection.localDescription))
}

remoteConnection.ondatachannel = e => {
  const receiveChannel = e.channel;
  receiveChannel.onmessage = e => console.log("From A: " + e.data)
  receiveChannel.onopen = e => console.log("OPEN!!!")
  receiveChannel.onclose = e => console.log("CLOSE")
}

remoteConnection.setRemoteDescription(offer).then(a => console.log("Done"))

await remoteConnection.createAnswer().then(ans => remoteConnection.setLocalDescription(ans)).then(ans => console.log(JSON.stringify(remoteConnection.localDescription)))
