// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (char = '*') {
    return function (adjective = "special") {
      return `You are ${char}${adjective}${char}!`;
    };
}