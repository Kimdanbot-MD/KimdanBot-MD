import readline from "readline";
import chalk from "chalk";
import { BaileysConnection } from "../core/BaileysConnection.js";
import { fetchLatestBaileysVersion } from "@whiskeysockets/baileys";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

export class AuthHandler {
  async obtenerOpcionConexion() {
    let opcion;
    do {
      let lineM = '★∻∹⋰⋰ ☆∻∹⋰⋰ ★∻∹⋰⋰ ☆∻∹⋰⋰★∻∹⋰⋰ ☆∻∹⋰⋰'
      let linen = '✄ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈'
      opcion = await question(`\n\n${lineM}\n
     ${chalk.blue.bgBlue.bold.cyan('🪷  mᥱ́𝗍᥆ძ᥆ ძᥱ ᥎іᥒᥴᥙᥣᥲᥴі᥆ᥒ 🪷 ')}\n
${lineM}\n
  ${chalk.blueBright('🎀 ꒷︶꒥‧˚૮꒰۵•▴•۵꒱ა‧˚꒷︶꒥🎀')}\n
${chalk.blueBright(linen)}\n   
${chalk.green.bgMagenta.bold.yellow('🌟  һ᥆ᥣᥲ, һᥱrm᥆s᥊, ¿ᥴ᥆m᥆ 𝗊ᥙіᥱrᥱs ᥴ᥆ᥒᥱᥴ𝗍ᥲr𝗍ᥱ? 🌟 ')}\n
${chalk.bold.redBright('🍓  ▷ ᥱᥣᥱᥴᥴі᥆ᥒ ➊ :')} ${chalk.greenBright('ᥙsᥲ ᥙᥒ ᥴ᥆ძіg᥆ 🆀 🆁 .')}
${chalk.bold.redBright('🧸  ▷ ᥱᥣᥱᥴᥴі᥆ᥒ ➋ :')} ${chalk.greenBright('ᥙsᥲ ᥙᥒ ᥴ᥆ძіg᥆ ძᥱ 8 ძіgі𝗍᥆s.')}\n
${chalk.blueBright(linen)}\n   
${chalk.italic.magenta('🍄 ¿𝗊ᥙᥱ́ ᥱᥣᥱᥴᥴі᥆ᥒ ᥱᥣᥱgіs𝗍ᥱ? ⍴᥆r𝖿іs ᥱsᥴrіᑲᥱ')}
${chalk.italic.magenta('s᥆ᥣ᥆ ᥱᥣ ᥒᥙ́mᥱr᥆ ძᥱ ᥣᥲ ᥱᥣᥱᥴᥴі᥆ᥒ. 🍄')}\n
${chalk.bold.magentaBright('---> ')}`);

      if (!/^[1-2]$/.test(opcion)) {
        console.log(chalk.bold.cyanBright(`🌻  һᥱᥡᥡᥡᥡ 🌻  ٩(๑꒦ິȏ꒦ິ๑)۶ \n\n${chalk.bold.redBright(`🌸  ᥒ᥆ sᥱ ⍴ᥱrmі𝗍ᥱᥒ mᥲ́s ᥒᥙmᥱr᥆s᥆s ᥲ⍴ᥲr𝗍ᥱ ძᥱ ${chalk.bold.greenBright("➊")} ᥆ ${chalk.bold.greenBright("➋")} 🌸\n🌼  𝗍ᥲm⍴᥆ᥴ᥆ ᥣᥱ𝗍rᥲs ᥒі sіmᑲ᥆ᥣ᥆s ᥱs⍴ᥱᥴіᥲᥣᥱs. (╥﹏╥) 🌼`)}\n\n${chalk.bold.yellowBright("🪻  ♡ ´･ღ ･`♡ 𝗍і⍴ 🪻 : 🌺  ᥴ᥆⍴іᥲ 𝗍ᥙ ᥒᥙ́mᥱr᥆ ძᥱsძᥱ ᥣᥲ ᥲ⍴⍴\n ძᥱ ᥕһᥲ𝗍sᥲ⍴⍴ ᥡ ⍴ᥱgᥲᥣ᥆ ᥱᥒ ᥣᥲ ᥴ᥆ᥒs᥆ᥣᥲ. 🌺")}`))
      }
    } while (!/^[1-2]$/.test(opcion));

    return opcion;
  }

  async iniciarAutenticacion(opcion) {
    try {
      const { version } = await fetchLatestBaileysVersion();
      const baileysConnection = new BaileysConnection({
        authPath: 'auth',
        printQRInTerminal: opcion === '1',
        browser: ['KimdanBot-MD', 'Safari', version], 
        version, 
      });

      const { kim, store } = baileysConnection;

      kim.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        console.log(chalk.yellow('Connection Update:', connection));
        if (connection === 'close') {
          const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== 409;
          console.log(chalk.red('Connection Closed. Reconnecting:', shouldReconnect));
        } else if (connection === 'open') {
          console.log(chalk.green('Connection Opened!'));
        }
      });
      if (opcion === '2') { // Opción 2: Código de 8 dígitos
        if (!fs.existsSync(`./auth/creds.json`)) {
          if (!sock.authState.creds.registered) {
            let addNumber;
            if (!!phoneNumber) {
              addNumber = phoneNumber.replace(/[^0-9]/g, '');
              if (!Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
                console.log(chalk.bgBlack(chalk.bold.redBright(`\n🍓  (≡^∇^≡) ⍴᥆r𝖿іs іᥒ𝗍r᥆ძᥙzᥴᥲ sᥙ ᥒᥙ́mᥱr᥆ ძᥱ ᥕһᥲ𝗍sᥲ⍴⍴. 🍓\n\n${chalk.bold.yellowBright("🫐  ⍴᥆r ᥱȷᥱm⍴ᥣ᥆ (〃∀〃)ゞ🫐\n    ➥ +57 316 1407118")}\n`)));
          process.exit(0);
              }
            } else {
              while (true) {
                addNumber = await question(chalk.bgBlack(chalk.bold.greenBright(`\n  (≡^∇^≡) ⍴h́᥆r𝖿іs іᥒ𝗍r᥆ძᥙzᥴᥲ sᥙ ᥒUh́mᥱr᥆ ძᥱ ᥕһh́ᥲ𝗍sᥲ⍴⍴. \n\n${chalk.bold.yellowBright("🫐  ⍴h́᥆r ᥱȷᥱm⍴ᥣ᥆ (〃∀〃)ゞ🫐\n    ➥ +57 316 1407118")}\n`)));
                addNumber = addNumber.replace(/[^0-9]/g, '');

                if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
                  break;
                } else {
                  console.log(chalk.bold.redBright("🍨  ⍴᥆r𝖿ᥲs rᥱᥴᥙᥱrძᥲ іᥒ𝗍r᥆ძᥙᥴіr ᥱᥣ ᥴ᥆ძіg᥆ ძᥱᥣ ⍴ᥲіs. (◞ ᜊ ◟ㆀ) 🍨"));
          }
              }
              rl.close();
            }

            try {
              let codeBot = await sock.requestPairingCode(addNumber);
              codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
              console.log(chalk.bold.white(chalk.bgMagenta(`(●'▽ '●)ゝ 🩷  ᥴ᥆ძіg᥆ ძᥱ ᥎іᥒᥴᥙᥣᥲᥴі᥆ᥒ 🩷 : `)), chalk.bold.white(chalk.white(code)));
        } catch (error) {
              console.error(chalk.red('Error al solicitar el código de emparejamiento:', error));
              return;
            }
          }
        }

      return { kim, store };

    } catch (error) {
      console.error(chalk.red('Error en la autenticación:', error));
      rl.close();
      return;
    }
  }
} 
