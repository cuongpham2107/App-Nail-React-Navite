import { create } from "zustand";
import { ScheduleModel, ServiceModel } from "../models";

type ScheduleType = {
    schedule : ScheduleModel[]
}
type Action = {
    addSchedule:(data : ScheduleModel) => void,
    removeSchedule: (id : string) => void,
   
}

const useScheduleStore = create<ScheduleType & Action>((set,get) => ({
    schedule: [],
    
    addSchedule: (data) => set({
        schedule : [...get().schedule, data]
        
    }),
    removeSchedule: (id) => set({
       schedule: get().schedule.filter(x => x.id != id)
    }) 
}))

export default useScheduleStore