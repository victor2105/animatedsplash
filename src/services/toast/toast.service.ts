import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";



@Injectable()
export class ToastService {
    constructor(private toastCtrl: ToastController) {}

    show(message, duration = 3000){
        return this.toastCtrl
        .create({
            message, duration
        }).present();
    }
}