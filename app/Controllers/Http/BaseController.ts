enum StateCodes {
  EMPTY = 'EMPTY',
  HOLIDAY = 'HOLIDAY',
  SUCCESS = 'SUCCESS',
}

export default class BaseController {
  constructor() {}

  /** State codes (NOT HTTP codes) */
  protected readonly STATE = StateCodes

  /** Get state object */
  protected getCodeState(stateCode: keyof typeof this.STATE) {
    return { status: stateCode }
  }
}
