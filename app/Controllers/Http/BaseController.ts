enum STATE_CODE {
    EMPTY = 'EMPTY',
    HOLIDAY = 'HOLIDAY',
    SUCCESS = 'SUCCESS',
}

export default class BaseController {
    constructor() {}

    /** State codes (NOT HTTP codes) */
    readonly STATE = STATE_CODE;

    /** Get state object */
    protected getCodeState(stateCode: keyof typeof this.STATE) {
        return { status: stateCode }
    }
}