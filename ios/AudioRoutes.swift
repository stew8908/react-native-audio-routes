import AVFoundation

@objc(AudioRoutes)
class AudioRoutes: NSObject {
  
  @objc
  func getAvailableAudioRoutes(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    let audioSession = AVAudioSession.sharedInstance()
    var routes: [[String: String]] = []

    for output in audioSession.currentRoute.outputs {
      let route = [
        "name": output.portName,
        "type": output.portType.rawValue,
        "uid": output.uid
      ]
      routes.append(route)
    }

    resolve(routes)
  }
}