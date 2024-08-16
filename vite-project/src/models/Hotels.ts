export interface PriceRange {
    min: number;
    max: number;
  }
  
  export const getAveragePrice = (priceRage: PriceRange) => {
    return (priceRage.min + priceRage.max) / 2;
  };
  
  export class SearchHotel {
    public id: number;
    public name: string;
    public rating: number;
    public reviews: number;
    public priceRange: PriceRange;
  
    constructor(
      id: number,
      name: string,
      rating: number,
      reviews: number,
      priceRange: PriceRange
    ) {
      this.id = id;
      this.name = name;
      this.rating = rating;
      this.reviews = reviews;
      this.priceRange = priceRange;
    }
  }