class Region {

    public id: number;
    public name: string;
    public description: string;

    constructor(cod: number, nam: string, des: string) {
        this.id = cod;
        this.name = nam;
        this.description = des;
    }


}

export default Region;