/*
Given the script file callbacks.js, write a script that does the following:
    o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
      message after a timeout of 500ms.
    o Create a method rejectedPromise that is similar to delayedException and rejects an
      error message after a timeout of 500ms.
    o Call both promises separately and handle the resolved and reject results and then output
      to the console
*/

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    // Invoking the resolve() in settimeout instead of console logging likewise in callback.js
    setTimeout(resolve({ message: 'delayed success!' }), 500);
  });

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ error: 'delayed exception!' }), 500);
  });

resolvedPromise().then((output) => console.log(output));
rejectedPromise().catch((output) => console.error(output));