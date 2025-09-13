import React, { useCallback, useEffect } from "react";
import * as bin from "./bin";
import { useTheme } from "./themeProvider";

const ShellContext = React.createContext(null);

export const useShell = () => React.useContext(ShellContext);

export const ShellProvider = ({ children }) => {
  const [init, setInit] = React.useState(true);
  const [history, _setHistory] = React.useState([]);
  const [command, _setCommand] = React.useState("");
  const [lastCommandIndex, _setLastCommandIndex] = React.useState(0);
  const { setTheme } = useTheme();

  const setHistory = useCallback(
    (output) => {
      _setHistory((h) => [
        ...h,
        {
          id: h.length,
          date: new Date(),
          command: command.split(" ").slice(1).join(" "),
          output,
        },
      ]);
    },
    [command]
  );

  const setCommand = useCallback((command) => {
    _setCommand([Date.now(), command].join(" "));
    setInit(false);
  }, []);

  const clearHistory = useCallback(() => {
    _setHistory([]);
  }, []);

  const setLastCommandIndex = useCallback((index) => {
    _setLastCommandIndex(index);
  }, []);

  const execute = useCallback(async () => {
    const [cmd, ...args] = command.split(" ").slice(1);

    if (isTrackingEnabled && window?.umami?.track) {
      window.umami.track(`command - ${cmd}`, {
        args: args.join(" "),
      });
    }

    switch (cmd) {
      case "theme": {
        const output = await bin.theme(args, setTheme);
        setHistory(output);
        break;
      }
      case "clear":
        clearHistory();
        break;
      case "":
        setHistory("");
        break;
      default: {
        if (!Object.keys(bin).includes(cmd)) {
          setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
        } else {
          try {
            const output = await bin[cmd](args);
            setHistory(output);
          } catch (error) {
            setHistory(error.message);
          }
        }
      }
    }
  }, [command, setTheme, setHistory, clearHistory]);

  useEffect(() => {
    setCommand("banner");
  }, [setCommand]);

  useEffect(() => {
    if (!init) {
      execute();
    }
  }, [command, init, execute]);

  return (
    <ShellContext.Provider
      value={{
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        execute,
        clearHistory,
      }}
    >
      {children}
    </ShellContext.Provider>
  );
};