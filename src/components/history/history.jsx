import ps1 from "../ps1/ps1";

function history({ terminalHistory }) {
  return (
    <>
      {terminalHistory.map((entry, index) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <ps1/>
            </div>
            <div className="flex-grow">{entry.command}</div>
          </div>
          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          ></p>
        </div>
      ))}
    </>
  );
}

export default history;
