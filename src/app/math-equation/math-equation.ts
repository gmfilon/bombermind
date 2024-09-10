export class MathEquation {

    constructor(equationString: String, result: number) {
        this.equationString = equationString;
        this.result = result;
    }

    private equationString: String = "";
    private result: number = 0;

    public getResult(): number {
        return this.result;
    }

    public getEquationString(): String {
        return this.equationString;
    }

}
