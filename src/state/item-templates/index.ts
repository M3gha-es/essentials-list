//Define Interface to create any of the following list item:
//1. savedList: Save a list of item for later use
//2. currentList: Current List of items you need to purchase
//3. suggestedList: Suggest a list of items to user
export interface ListItem {
    item:string,
    completed:boolean,
    empty:boolean,
    id:number
};