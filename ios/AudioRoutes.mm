#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AudioRoutes, NSObject)
RCT_EXTERN_METHOD(getAudioRoutes:(RCTPromiseResolveBlock)resolve
                          reject:(RCTPromiseRejectBlock)reject)
@end
