export const StatusList = [
  "planning",
  "started",
  "paused",
  "finished",
  "abondoned",
] as const;

export const statusIconMap: Record<typeof StatusList[number], string> = {
  started: "pi-play",
  paused: "pi-pause",
  planning: "pi-calendar",
  abondoned: "pi-times",
  finished: "pi-check",
};
