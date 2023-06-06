import { v4 as uuidv4 } from 'uuid';


export class APP_BuildingCurriculumStudent {
    constructor(
        public id: string=uuidv4(),
        public tz: string="",
        public isPasport: boolean=false,
        public password: string="",
        public buildingCurriculumID: number=0,
        public paymentID: number=0,
    ) {

    }
}