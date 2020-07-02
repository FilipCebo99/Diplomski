import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";

configure({ enforceActions: "always" });

export class RootStore{
    activtyStore : ActivityStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;

    constructor(){
        this.activtyStore= new ActivityStore(this);
        this.userStore= new UserStore(this);
        this.commonStore= new CommonStore(this);
        this.modalStore= new ModalStore(this)
    }

}

export const RootStoreContext = createContext(new RootStore());