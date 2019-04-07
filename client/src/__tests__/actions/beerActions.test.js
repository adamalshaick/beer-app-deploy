import configureMockStore from "redux-mock-store";
import * as beerActions from "../../actions/beerActions";
import * as types from "../../actions/types";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("beer actions", () => {
  const beersData = [
    {
      beer: "beer 1",
      brewer: "brewer 1"
    },
    {
      beer: "beer 2",
      brewer: "brewer 2"
    }
  ];

  it("gets beers data", async () => {
    httpMock.onGet("/products").reply(200, { beersData });
    beerActions.getBeers()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_BEERS, payload: { beersData } }
    ]);
  });

  it("doesnt get beers on error", async () => {
    httpMock.onGet("/products").reply(400);
    beerActions.getBeers()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_BEERS, payload: null }
    ]);
  });
});
