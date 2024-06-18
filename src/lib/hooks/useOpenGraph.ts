import { useCallback } from "react";
import axios from "axios";
import { OpenGraphParent } from "@/types/internal/opengraph";
import { APP_URL } from "../constants";

function useOpenGraph() {
  /**
   * Fetches OpenGraph data for the provided URL.
   *
   * @param {string} url - The URL to fetch OpenGraph data from.
   * @returns {Promise<OpenGraphParent>} The OpenGraph data.
   */
  const getOpenGraph = useCallback(
    async (url: string): Promise<OpenGraphParent> => {
      try {
        console.log("URL", url);
        const response = await axios.get(
          `${APP_URL}/api/linkData?url=${encodeURIComponent(url)}`
        );
        const data = response.data;

        return data;
      } catch (error) {
        console.error(`Error fetching OpenGraph data: ${error}`);
        throw error;
      }
    },
    []
  );

  return {
    getOpenGraph,
  };
}

export { useOpenGraph };
