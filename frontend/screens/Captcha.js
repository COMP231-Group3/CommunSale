// import React, { useRef } from 'react';
// import { View, Button } from 'react-native';

// import Recaptcha from 'react-native-recaptcha-that-works';

// const Captcha = () => {
//     const recaptcha = useRef();

//     const send = () => {
//         console.log('send!');
//         recaptcha.current.open();
//     }

//     const onVerify = token => {
//         console.log('success!', token);
//     }

//     const onExpire = () => {
//         console.warn('expired!');
//     }

//     return (
//         <View>
//             <Recaptcha
//                 ref={recaptcha}
//                 siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                 baseUrl="http://google.com"
//                 onVerify={onVerify}
//                 onExpire={onExpire}
//                 size="normal"
//             />
//             <Button title="Send" onPress={send} />
//         </View>
//     );
// }

// export default Captcha;
