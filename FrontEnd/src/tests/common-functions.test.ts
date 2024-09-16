import { getAverage, arraysAreEqual } from "../lib/common-functions";

describe("getAverage", () => {
  it("should return the average of this list of numbers", () => {
    expect(getAverage([1.5, 2.4, 3.8, 4.1, 7.1])).toBe(3.78);
  });
});

const mockMovieData  = [
  {id: "1", reviews: [6,8,7,9,8,7,8], title: "A long train ride", filmCompanyId: "1", cost : 1020, releaseYear: 2001},
  {id: "2", reviews: [5,7,3,4,5,6,3], title: "Flowers on the meadow", filmCompanyId: "2", cost : 983, releaseYear: 1997},
  {id: "3", reviews: [1,4,5,2,3,1,2], title: "Summer", filmCompanyId: "1", cost : 7346, releaseYear: 2015},
  {id: "4", reviews: [6,7,4,5,6,7,3], title: "Back to the garden", filmCompanyId: "2", cost : 364, releaseYear: 2009},
  {id: "5", reviews: [2,1,2,1,3,2,1], title: "Mr John Smith", filmCompanyId: "3", cost : 26456, releaseYear: 2021}
];

const mockMovieDataCopy  = [
  {id: "1", reviews: [6,8,7,9,8,7,8], title: "A long train ride", filmCompanyId: "1", cost : 1020, releaseYear: 2001},
  {id: "2", reviews: [5,7,3,4,5,6,3], title: "Flowers on the meadow", filmCompanyId: "2", cost : 983, releaseYear: 1997},
  {id: "3", reviews: [1,4,5,2,3,1,2], title: "Summer", filmCompanyId: "1", cost : 7346, releaseYear: 2015},
  {id: "4", reviews: [6,7,4,5,6,7,3], title: "Back to the garden", filmCompanyId: "2", cost : 364, releaseYear: 2009},
  {id: "5", reviews: [2,1,2,1,3,2,1], title: "Mr John Smith", filmCompanyId: "3", cost : 26456, releaseYear: 2021}
];

const mockMovieDataIncomplete  = [
  {id: "1", reviews: [6,8,7,9,8,7,8], title: "A long train ride", filmCompanyId: "1", cost : 1020, releaseYear: 2001},
  {id: "2", reviews: [5,7,3,4,5,6,3], title: "Flowers on the meadow", filmCompanyId: "2", cost : 983, releaseYear: 1997},
  {id: "3", reviews: [1,4,5,2,3,1,2], title: "Summer", filmCompanyId: "1", cost : 7346, releaseYear: 2015},
];


describe("arraysAreEqual", () => {
  it("should return that these arrays are the same", () => {
    expect(arraysAreEqual(mockMovieData, mockMovieDataCopy)).toBe(true);
  });

  it("should return that these arrays are NOT the same", () => {
    expect(arraysAreEqual(mockMovieData, mockMovieDataIncomplete)).toBe(false);
  });
});