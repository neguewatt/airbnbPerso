export class StorageUtils {

    static EXPIRES_TOKEN: string = 'expires_in';
    static TOKEN: string = 'access_token';
    static DATE_TOKEN: string = 'date_token';

    static getItemStorage(itemName:string):any {
        return JSON.parse(localStorage.getItem(itemName));
    }
    static setItemStorage(item:string):void {
        localStorage.setItem(item,JSON.stringify(item));
    }

    static removeItemStorage(item:string):void {
        localStorage.removeItem(item);
    }
    static hasToken():boolean {
        return this.getItemStorage(this.TOKEN) ;
    }
    static getToken():string {
        if(this.hasToken()) {
            return this.getItemStorage(this.TOKEN);
        }
    }
    static setToken(token:string):void {
        localStorage.setItem(this.TOKEN,JSON.stringify(token));
    }
    static removeToken():void {
        localStorage.removeItem(this.TOKEN);
    }
   
    static setEXPIRES_TOKEN(secret_key:any):void {
        localStorage.setItem(this.EXPIRES_TOKEN,JSON.stringify(secret_key));
    }
    static getEXPIRES_TOKEN():number {
        if(this.hasEXPIRES_TOKEN()) {
            return this.getItemStorage(this.EXPIRES_TOKEN);
        }
    }
    static hasEXPIRES_TOKEN():boolean {
        return !!this.getItemStorage(this.EXPIRES_TOKEN);
    }
    static removeEXPIRES_TOKEN():void {
        localStorage.removeItem(this.EXPIRES_TOKEN);
    }

    static setDateToken(date:number):void {
        localStorage.setItem(this.DATE_TOKEN,JSON.stringify(date));
    }
    static getDateToken():number {
        if(this.hasDateToken()) {
            return this.getItemStorage(this.DATE_TOKEN);
        }
    }
    static hasDateToken():boolean {
        return !!this.getItemStorage(this.DATE_TOKEN);
    }
    static removeDateToken():void {
        localStorage.removeItem(this.DATE_TOKEN);
    }

    static tokenExpires():boolean{

        let dateNow = new Date().getTime();
        console.log("date",this.getDateToken());
        return (dateNow - this.getDateToken()) <= this.getEXPIRES_TOKEN();
    }
}