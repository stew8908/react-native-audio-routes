import Foundation
import AVFoundation

@objc(AudioRoutes)
class AudioRoutes: NSObject {
    @objc
    func getAudioRoutes(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let session = AVAudioSession.sharedInstance()
        do {
            try session.setActive(true)
            let outputs = session.currentRoute.outputs.map { output in
                return [
                    "portName": output.portName,
                    "portType": output.portType,
                    "uid": output.uid,
                ]
            }
            resolve(outputs)
        } catch {
            reject("ERROR", "Failed to fetch audio routes", error)
        }
    }
}
