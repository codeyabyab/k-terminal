import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (_args) => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (_args) => {
  return 'guest';
};

export const date = async (_args) => {
  return new Date().toString();
};

export const email = async (_args) => {
  window.open('mailto:kobyabybab@gmail.com');

  return 'Opening mailto:kobyabybab@gmail.com...';
};

export const repo = async (_args) => {
  setTimeout(function () {
    window.open('https://github.com/codeyabyab/k-terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};


export const banner = (_args) => {
  return `
██╗  ██╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
██║ ██╔╝    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
█████╔╝        ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
██╔═██╗        ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
██║  ██╗       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
╚═╝  ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝v${packageJson.version}
                                                                               
                                                                                                   

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.
--
`;
};
