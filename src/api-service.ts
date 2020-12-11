import Axios from 'axios';
import { Coordinate, Path } from './types';

const endpoint = 'http://localhost:8000/';

class ApiService {
  public fetchClosest(latlng: Coordinate) {
    return Axios.get<Coordinate>(endpoint + 'closest', {
      params: latlng,
    });
  }

  public shortestPath(start: Coordinate, destination: Coordinate) {
    return Axios.post<Path>(endpoint + 'fsp', {
      start,
      destination,
    });
  }
}

export default new ApiService();
