
import { StoriesApi } from "@/api/stories/storiesApi";
import axios from "axios";
class StoriesService {
  private api;
  constructor() {
    this.api = StoriesApi;
  }
  async getStories() {
    try {
      const data = await axios.get(this.api.stories);
      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }

}
export const storiesService = new StoriesService();
