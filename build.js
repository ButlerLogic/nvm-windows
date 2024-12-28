const content = await Deno.readTextFile('./nvm.iss')
const data = JSON.parse(await Deno.readTextFile('./src/manifest.json'))
const {version} = data
const output = content.replaceAll('{{VERSION}}', version)
await Deno.writeTextFile('./.tmp.iss', output)

const command = await new Deno.Command('.\\assets\\buildtools\\iscc.exe', {
  args: ['.\\.tmp.iss'],
  stdout: 'piped',
  stderr: 'piped',
})

const process = command.spawn();

// Stream stdout
(async () => {
  const decoder = new TextDecoder();
  for await (const chunk of process.stdout) {
    console.log(decoder.decode(chunk));
  }
})();

// Stream stderr
(async () => {
  const decoder = new TextDecoder();
  for await (const chunk of process.stderr) {
    console.error(decoder.decode(chunk));
  }
})();

// Wait for completion
const status = await process.status;
Deno.remove('.\\.tmp.iss');
if (!status.success) {
  Deno.exit(status.code);
}
