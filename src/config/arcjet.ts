import { ARCJET_KEY } from './env';

let ajPromise: Promise<any>;

async function initializeArcjet() {
  const arcjetModule = await import('@arcjet/node');
  const { default: arcjet, shield, detectBot, tokenBucket } = arcjetModule;

  return arcjet({
    key: ARCJET_KEY!,
    characteristics: ['ip.src'], // Track requests by IP
    rules: [
      shield({ mode: 'LIVE' }),
      detectBot({
        mode: 'LIVE',
        allow: ['CATEGORY:SEARCH_ENGINE'],
      }),
      tokenBucket({
        mode: 'LIVE',
        refillRate: 5, // Refill 5 tokens per interval
        interval: 10, // Refill every 10 seconds
        capacity: 10, // Bucket capacity of 10 tokens
      }),
    ],
  });
}

// Initialize and store the promise
ajPromise = initializeArcjet();

// Export a function to access the initialized `aj`
export async function getAj() {
  return await ajPromise;
}
