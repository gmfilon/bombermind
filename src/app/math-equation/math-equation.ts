import { networkInterfaces } from "node:os";

export class MathEquation {

    private equationString: String = "";
    private result: number = 0;
    private deadlineSeconds: number = 0;

    constructor(equationString: String, result: number, deadlineSeconds: number) {
        this.equationString = equationString;
        this.result = result;
        this.deadlineSeconds = deadlineSeconds;
    }

    public getDeadlineSeconds(): number {
        return this.deadlineSeconds;
    }

    public getResult(): number {
        return this.result;
    }

    public getEquationString(): String {
        return this.equationString;
    }

}
