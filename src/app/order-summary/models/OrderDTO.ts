import { FoodItem } from "src/app/shared/models/FoodItem";
import { Restaurant } from "src/app/shared/models/Restaurant";

export interface OrderDTO{

    foodItemList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}