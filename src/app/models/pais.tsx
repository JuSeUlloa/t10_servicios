class Pais {

    public id: number;
    public name: string;
    public description: string;
    public stateCapital: string;
    public surface: string;
    public population: string;
    public languages: string[];
    public timeZone: string;
    public currency: string;
    public flags: string[];

    constructor(cod: number, nam: string, des: string, sta: string,
        suf: string, pop: string, lan: string[], time: string, cur: string, fla: string[]) {
        this.id = cod;
        this.name = nam;
        this.description = des;
        this.stateCapital = sta;
        this.surface = suf;
        this.population = pop;
        this.languages = lan;
        this.timeZone = time;
        this.currency = cur;
        this.flags = fla;
    }



}

export default Pais;