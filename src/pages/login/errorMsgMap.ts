export const authErrorMap = new Map();

authErrorMap.set('auth/user-not-found', `This account doesn't exist`);
authErrorMap.set('auth/wrong-password', 'Wrong password');
authErrorMap.set('auth/invalid-email', `Email isn't valid`);
authErrorMap.set('auth/weak-password', 'Password is too weak');
authErrorMap.set('auth/email-already-in-use', 'This email is already used');
authErrorMap.set(
  'auth/too-many-requests',
  'Authorization is getting too many requests, please stop :)',
);
