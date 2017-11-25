import * as _ from 'lodash';
import {IOrderedMapAction, OrderedMap, IOrderedMap} from 'Utils/OrderedMap';
export interface ITask {
	question: string
	resetCode: string
}
export type ITaskState = IOrderedMap<ITask>;

export type ITaskActionType = ITaskAction["type"]
export type ITaskAction = {
	type: "TASK_ACTION"
	orderedMapAction: IOrderedMapAction<ITask>
}

export let TaskReducer = (state: ITaskState={map: {}, order: []}, action: ITaskAction) => {
	switch(action.type) {
		case "TASK_ACTION": {
			let orderedMapState = new OrderedMap(state);
			orderedMapState.performAction(action.orderedMapAction);
			state = orderedMapState.getState();
			break;
		}
	}
	return state;
}