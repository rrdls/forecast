import axios from "axios";
import { StormGlass } from "../stormGlass";
import stormGlassWeather3HoursFixture from "@test/fixtures/stormglass_weather_3_hours.json";
import stormGlassNormalized3HoursFixture from "@test/fixtures/stormglass_normalized_response_3_hours.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("StormGlass client", () => {
  it("should return the normalized forescast from the StormGlass service", async () => {
    const lat = -33.792726;
    const lng = 151.289824;
    mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3HoursFixture });
    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
