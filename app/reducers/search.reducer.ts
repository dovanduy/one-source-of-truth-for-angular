import { ActionReducer, Action } from '@ngrx/store';
import {SearchBox} from '../components/search-box.component';
import {ProximitySelector} from '../components/proximity-selector.component';
import {CurrentSearch} from "../models/current-search.model";

export const SearchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    switch (action.type) {
         case SearchBox.StoreEvents.text:
             return Object.assign({}, state, {
                 name: action.payload.text
             });
         case ProximitySelector.StoreEvents.position:
             return Object.assign({}, state, {
                 location: {
                     latitude: action.payload.position.latitude,
                     longitude: action.payload.position.longitude
                 }
             });
         case ProximitySelector.StoreEvents.radius:
             return Object.assign({}, state, {
                 radius: action.payload.radius
             });
         case ProximitySelector.StoreEvents.off:
             return Object.assign({}, state, {
                 location: null
             });
        default:
            return state;
    }
};
