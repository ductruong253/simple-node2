const SERVICE_NAME = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(process.env);
    console.log(`${SERVICE_NAME} is running sucessfully!`);
    await sleep(5000);
  }
}

main();
