export class Location {
    LocationX: number;
    LocationY: number;
    /**
     *
     */
    constructor(locationX: number, locationY: number) {
        this.LocationX = locationX;
        this.LocationX = locationY;
    }
}

export class Family {
    fID: number;
    fName: string;
    fLocation: Location
    constructor(fID: number, fName: string, fLocation: Location) {
        this.fID = fID;
        this.fName = fName;
        this.fLocation = fLocation;
    }

}

export class SuperFamily {
    _families: Array<Family> = []
    AddFamily(family: Family) { 
        this._families.push(family)
    }
    RemoveFamily(fId: number) { 
        let fIndex = this._families.findIndex(x => x.fID === fId)
        this._families.splice(fIndex,1)
        console.log(this._families)
    }
}

