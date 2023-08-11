import { Observable } from "rxjs";

export class Utils {
    
    public static getPropertiesForHost(): boolean{
        return ((window.location.host != undefined) && (window.location.host.indexOf('vivenua') > -1));
    }

    public static transformObservableToPromise( obs: Observable<any>): Promise<any>{
        return new Promise((resolve, reject) => {
            obs.subscribe((res: any) => {
                resolve(res);
            }, (err: any) => {
                reject(err);
            });
        });
    }

    public static getHost(): string{
        const host = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
        return (host.indexOf('localhost') > -1) ? 'https://vive-nua-test-diagnostico-git-qa.vercel.app/' : host;
    }

    public static transformCapitalizeToString(_str: string): string{
        return _str.charAt(0).toUpperCase() + _str.slice(1).toLowerCase();
    }

    public static isDevice(): boolean {
        var ua = navigator.userAgent;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
           return true;
        return false;
    }
}