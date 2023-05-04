// code your solution here

function superbowlWin(arg) {
  let win = arg.find(obj => obj.result === "W");
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}
