export enum Types {
  SelectWarpSpeed = '[Warp] Select Warp Speed'
}

export interface SelectWarpSpeedAction {
  type: Types.SelectWarpSpeed;
  warpSpeed: number;
}

export function createSelectWarpSpeedAction(
  warpSpeed: number
): SelectWarpSpeedAction {
  return { type: Types.SelectWarpSpeed, warpSpeed };
}

export type Union = SelectWarpSpeedAction;
