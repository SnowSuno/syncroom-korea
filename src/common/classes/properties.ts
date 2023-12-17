/**
 * @deprecated
 */
export class Status {
  public static readonly PUBLIC = "status/PUBLIC";
  public static readonly PRIVATE = "status/PRIVATE";
}

/**
 * @deprecated
 */
export type StatusType = (typeof Status)[keyof typeof Status];
