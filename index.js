let pulsehaxVisible = false;

const gameFrame = document.getElementById("gameFrame");
const pulsehaxFrame = document.getElementById("pulsehaxFrame");
//document.getElementById("gameContainer").appendChild(pulsehaxFrame);

function getPulsehaxWidth() {
    return gameFrame.width / 5;
}

setInterval(function () {
  gameFrame.width = pulsehaxVisible ? innerWidth - getPulsehaxWidth() : innerWidth;
  gameFrame.height = innerHeight;

  pulsehaxFrame.width = innerWidth - gameFrame.width;
  pulsehaxFrame.height = innerHeight;


  window.frames[0].postMessage(
    {
      client: true,
      version: "e0.2-HAX",
      paste: electronAPI.readClipboardText(),
    },
    "*"
  );
}, 100);


/** Define channel name */
const CHANNEL_NAME = "main";

/** Create a processor for a button's click event */
const sendIPCData = (a) => {
  /** Message to be sent */
  let message = a;

  electronAPI.sendSyncIPCRequest(CHANNEL_NAME, message);
};

window.addEventListener(
  "message",
  (event) => {
    if (event.data === "enableConsole") {
      electronAPI.IPCSend("enableConsole");
    } else if (event.data === "togglePulsehax") {
      pulsehaxVisible = !pulsehaxVisible;
      
      pulsehaxFrame.id = "pulsehaxFrame";
      pulsehaxFrame.width = getPulsehaxWidth();
      pulsehaxFrame.height = innerHeight;
    } else {
      sendIPCData(event.data);
    }
  },
  false
);
