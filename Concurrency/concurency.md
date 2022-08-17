# Concurency
Concurrency means multiple computations are happening at the same time. Concurrency is everywhere in modern programming, whether we like it or not


JavaScript runs on a single thread. This thread is event-based and responds to events when they occur. So how does it not block other functions from executing? Well, the answer is simple, it does. JS functions are hoisted, as pointed out by my friend Featherweight, functions declared in variables will not execute if called before being defined as the variable doesn’t exist, while normal functions do execute anyways as they’re hoisted.

## Callbacks
Callbacks are asynchronous functions that call back after their execution completes.

## Promises
A promise is an object that represents the eventual completion or failure of an asynchronous operation

A promise has three states.

- Pending (pending): initial state, neither fulfilled nor rejected. More of currently running at the moment.
- Fulfilled (fulfilled): When the operation completes successfully.
- Rejected (rejected): When the operation fails.

## Async Await
Async await is a new way to write asynchronous code in JavaScript. It is syntactic sugar for promises.
An async function can contain await expression that pauses the execution of the async function and awaits for the passed promise resolution or rejection. It then resumes the async method and returns a resolved value.

